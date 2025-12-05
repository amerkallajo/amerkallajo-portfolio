import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './Lightbox.module.css';

function Lightbox({ images = [], selectedIndex = -1, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(selectedIndex);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollYRef = useRef(0);

    // Minimum swipe distance to trigger navigation (in px)
    const minSwipeDistance = 50;

    // Update current index when selectedIndex changes
    useEffect(() => {
        if (selectedIndex >= 0) {
            setCurrentIndex(selectedIndex);
        }
    }, [selectedIndex]);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedIndex >= 0) {
            scrollYRef.current = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollYRef.current}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            
            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollYRef.current);
            };
        }
    }, [selectedIndex >= 0]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex < 0) return;
            
            switch (e.key) {
                case 'ArrowLeft':
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    goToNext();
                    break;
                case 'Escape':
                    onClose();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, currentIndex, images.length]);

    const goToPrevious = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        setTimeout(() => setIsAnimating(false), 300);
    }, [images.length, isAnimating]);

    const goToNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setTimeout(() => setIsAnimating(false), 300);
    }, [images.length, isAnimating]);

    // Touch handlers for swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrevious();
        }
    };

    if (selectedIndex < 0 || !images.length) return null;

    const currentImage = images[currentIndex];

    return (
        <div className={styles.overlay}>
            {/* Close button */}
            <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            {/* Previous button */}
            <button 
                className={`${styles.navButton} ${styles.prevButton}`} 
                onClick={goToPrevious}
                aria-label="Previous image"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
            </button>

            {/* Image container */}
            <div 
                className={styles.imageContainer}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onClick={onClose}
            >
                <div className={styles.imageWrapper} onClick={(e) => e.stopPropagation()}>
                    <img 
                        src={currentImage?.image} 
                        alt={currentImage?.title || 'Gallery image'} 
                        className={styles.image}
                        draggable={false}
                    />
                </div>
            </div>

            {/* Next button */}
            <button 
                className={`${styles.navButton} ${styles.nextButton}`} 
                onClick={goToNext}
                aria-label="Next image"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
            </button>

            {/* Image counter */}
            <div className={styles.counter}>
                {currentIndex + 1} / {images.length}
            </div>

            {/* Image title */}
            {currentImage?.title && (
                <div className={styles.title}>{currentImage.title}</div>
            )}
        </div>
    );
}

export default Lightbox;
