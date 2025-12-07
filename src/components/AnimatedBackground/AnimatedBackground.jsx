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

    // Create engine
    const engine = Engine.create();
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio
      }
    });
    renderRef.current = render;

    // Create boundaries (floor and walls)
    const wallOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };

    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth,
      60,
      wallOptions
    );

    const leftWall = Bodies.rectangle(
      -30,
      window.innerHeight / 2,
      60,
      window.innerHeight,
      wallOptions
    );

    const rightWall = Bodies.rectangle(
      window.innerWidth + 30,
      window.innerHeight / 2,
      60,
      window.innerHeight,
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
      const width = window.innerWidth;
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

      // Spawn 4 bodies per interval to fill faster
      for (let i = 0; i < 4; i++) {
        const size = getIconSize();
        const x = Math.random() * window.innerWidth;
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

    // Handle resize
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;

      // Reposition ground
      Matter.Body.setPosition(ground, {
        x: window.innerWidth / 2,
        y: window.innerHeight
      });

      // Reposition walls
      Matter.Body.setPosition(rightWall, {
        x: window.innerWidth + 30,
        y: window.innerHeight / 2
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
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
