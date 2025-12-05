import styles from './Lightbox.module.css';

function Lightbox({ selectedImage, onClose }) {
    if (!selectedImage) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title || 'Gallery image'} 
                    className={styles.image}
                />
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
            </div>
        </div>
    );
}

export default Lightbox;
