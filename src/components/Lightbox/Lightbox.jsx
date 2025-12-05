import { useEffect } from 'react';
import styles from './Lightbox.module.css';

function Lightbox({ selectedImage, onClose }) {
    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            // Save current scroll position and lock body
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
            
            return () => {
                // Restore scroll position when closing
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [selectedImage]);

    if (!selectedImage) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                ×
            </button>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title || 'Gallery image'} 
                    className={styles.image}
                />
            </div>
        </div>
    );
}

export default Lightbox;
