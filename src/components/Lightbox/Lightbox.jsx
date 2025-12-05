import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Lightbox.module.css';

function Lightbox({ selectedImage, onClose }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Reset states when selectedImage changes
    useEffect(() => {
        if (selectedImage) {
            setImageLoaded(false);
            setImageError(false);
        }
    }, [selectedImage]);

    const handleImageLoad = () => {
        setImageLoaded(true);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(false);
    };

    return (
        <AnimatePresence>
            {selectedImage && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={styles.content}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {!imageLoaded && !imageError && (
                            <div className={styles.loading}>Loading...</div>
                        )}
                        {imageError && (
                            <div className={styles.error}>Failed to load image</div>
                        )}
                        <img 
                            src={selectedImage.image} 
                            alt={selectedImage.title || 'Gallery image'} 
                            className={styles.image}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            style={{ display: imageLoaded ? 'block' : 'none' }}
                        />
                        <button className={styles.closeButton} onClick={onClose}>
                            ×
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Lightbox;
