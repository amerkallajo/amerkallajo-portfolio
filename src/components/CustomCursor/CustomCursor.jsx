import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.css';

function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const trailRef = useRef([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Don't render on mobile/touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className={`${styles.cursor} ${isHovering ? styles.hovering : ''} ${isClicking ? styles.clicking : ''}`}
                animate={{
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 10,
                    scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            {/* Outer ring */}
            <motion.div
                className={`${styles.cursorRing} ${isHovering ? styles.ringHovering : ''}`}
                animate={{
                    x: mousePosition.x - 25,
                    y: mousePosition.y - 25,
                    scale: isHovering ? 1.8 : isClicking ? 0.9 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.8,
                }}
            />

            {/* Glow trail */}
            <motion.div
                className={styles.cursorGlow}
                animate={{
                    x: mousePosition.x - 50,
                    y: mousePosition.y - 50,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    mass: 1,
                }}
            />
        </>
    );
}

export default CustomCursor;
