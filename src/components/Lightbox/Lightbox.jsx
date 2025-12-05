import { motion, AnimatePresence } from 'framer-motion';
import styles from './Lightbox.module.css';

function Lightbox({ selectedImage, onClose }) {
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
                        <img src={selectedImage.image} alt={selectedImage.title} className={styles.image} />
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
