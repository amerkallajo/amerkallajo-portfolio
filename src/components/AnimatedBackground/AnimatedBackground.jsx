import { useEffect, useRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Matter from 'matter-js';
import {
  Code, Cpu, Globe, Layers, Layout, Monitor,
  Palette, PenTool, Smartphone, Box, Terminal,
  Database, Cloud, Command, Hash
} from 'lucide-react';
import styles from './AnimatedBackground.module.css';

// Import icons as SVG strings or use a mapping if possible. 
// Since Matter.js renders on canvas, rendering React components directly inside the canvas is hard.
// A common approach is to use the 'render.sprite.texture' property with a URL to an image.
// Or we can keep the DOM nodes and sync their position with the physics engine.
// Given the requirement for "3D" and "stacking", syncing DOM nodes might be heavy but allows for easy styling.
// However, for "balls moving behavior" and performance, Canvas is better.
// Let's try syncing DOM nodes first for better visual control (glows, etc), or use Canvas with custom rendering.

// Actually, for "stacking" and "balls", Matter.js Canvas renderer is easiest to set up quickly.
// But we need custom icons. We can create sprites from the Lucide icons.
// Or we can just use colored circles/rectangles for now to get the physics right, then add textures.
// The user specifically asked for "icons".
// Let's try the DOM approach: Physics runs in background, updates React state or directly manipulates DOM.
// Direct DOM manipulation is faster.

const ICONS = [
  Code, Cpu, Globe, Layers, Layout, Monitor,
  Palette, PenTool, Smartphone, Box, Terminal,
  Database, Cloud, Command, Hash
];

const COLORS = ['#00f0ff', '#bf00ff', '#ff00aa', '#4d4dff'];

// Helper to create texture URL from icon
const createIconTexture = (Icon, color, size = 64) => {
  const svgString = renderToStaticMarkup(
    <Icon
      size={size}
      stroke={color}
      strokeWidth={2}
      fill="rgba(255,255,255,0.1)"
    />
  );
  const encoded = encodeURIComponent(svgString);
  return `data:image/svg+xml;charset=utf-8,${encoded}`;
};

function AnimatedBackground() {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    // Module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Events = Matter.Events;

    const container = sceneRef.current;
    
    // Use window dimensions directly - most reliable across devices
    // On mobile, window.innerHeight gives the full viewport height
    const getViewportSize = () => ({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const viewport = getViewportSize();

    // Create engine
    const engine = Engine.create();
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: viewport.width,
        height: viewport.height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: 1 // Keep 1:1 ratio for coordinate simplicity
      }
    });
    renderRef.current = render;
    
    // Ensure canvas fills the container
    render.canvas.style.width = '100%';
    render.canvas.style.height = '100%';

    // Create boundaries (floor and walls)
    const wallOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };

    // Ground positioned so its TOP edge is at the bottom of viewport
    // This means icons will stack starting from the very bottom
    const groundThickness = 100;
    const ground = Bodies.rectangle(
      viewport.width / 2,
      viewport.height + groundThickness / 2,
      viewport.width * 3,
      groundThickness,
      wallOptions
    );

    const leftWall = Bodies.rectangle(
      -30,
      viewport.height / 2,
      60,
      viewport.height * 3,
      wallOptions
    );

    const rightWall = Bodies.rectangle(
      viewport.width + 30,
      viewport.height / 2,
      60,
      viewport.height * 3,
      wallOptions
    );

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Run the engine
    Render.run(render);
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Pre-generate textures
    const textures = ICONS.flatMap(Icon =>
      COLORS.map(color => createIconTexture(Icon, color))
    );

    // Standard gravity for falling icons
    engine.world.gravity.y = 1.5;

    // Calculate responsive icon sizes based on screen width
    const getIconSize = () => {
      const currentViewport = getViewportSize();
      const width = currentViewport.width;
      if (width <= 480) {
        // Extra small mobile: 45-75px (larger for full coverage)
        return 45 + Math.random() * 30;
      } else if (width <= 768) {
        // Mobile/tablet: 50-80px (larger for full coverage)
        return 50 + Math.random() * 30;
      } else {
        // Desktop: 50-90px
        return 50 + Math.random() * 40;
      }
    };

    // Add bodies quickly to fill screen in ~5 seconds
    const interval = setInterval(() => {
      // Limit to 150 bodies for better coverage
      if (Composite.allBodies(engine.world).length > 150) return;

      const currentViewport = getViewportSize();
      
      // Spawn 4 bodies per interval to fill faster
      for (let i = 0; i < 4; i++) {
        const size = getIconSize();
        const x = Math.random() * currentViewport.width;
        const y = -100 - (Math.random() * 300);

        const texture = textures[Math.floor(Math.random() * textures.length)];

        const body = Bodies.circle(x, y, size / 2, {
          restitution: 0.4,
          friction: 0.1,
          render: {
            sprite: {
              texture: texture,
              xScale: size / 64,
              yScale: size / 64
            }
          }
        });

        Composite.add(engine.world, body);
      }
    }, 100); // Spawn every 100ms (fast)

    // Handle resize - update physics world to match new viewport
    const handleResize = () => {
      const newViewport = getViewportSize();
      
      // Update Matter.js render bounds
      render.bounds.max.x = newViewport.width;
      render.bounds.max.y = newViewport.height;
      render.options.width = newViewport.width;
      render.options.height = newViewport.height;
      
      // Update canvas dimensions
      render.canvas.width = newViewport.width;
      render.canvas.height = newViewport.height;

      // Reposition ground at very bottom
      Matter.Body.setPosition(ground, {
        x: newViewport.width / 2,
        y: newViewport.height + groundThickness / 2
      });

      // Reposition walls
      Matter.Body.setPosition(leftWall, {
        x: -30,
        y: newViewport.height / 2
      });
      Matter.Body.setPosition(rightWall, {
        x: newViewport.width + 30,
        y: newViewport.height / 2
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Also listen to visualViewport resize for mobile browsers
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    }
    
    // Trigger resize shortly after mount to handle any layout shifts
    setTimeout(handleResize, 50);
    setTimeout(handleResize, 200);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      }
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.gradientLayer} />
      <div ref={sceneRef} className={styles.physicsLayer} />
      <div className={styles.particleLayer} />
      <div className={styles.vignette} />
    </div>
  );
}

export default AnimatedBackground;
