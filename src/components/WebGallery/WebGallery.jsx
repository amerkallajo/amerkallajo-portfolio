import { motion } from 'framer-motion';
import styles from './WebGallery.module.css';

const containerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

function WebGallery({ items = [] }) {
    return (
        <motion.div
            className={styles.gallery}
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            {items.map((item, index) => (
                <WebCard key={item.id || index} item={item} index={index} />
            ))}
        </motion.div>
    );
}

function WebCard({ item, index }) {
    return (
        <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            variants={itemVariants}
            whileHover={{ y: -5 }}
        >
            {/* Neon glow layers */}
            <div className={styles.glowOuter} />
            <div className={styles.glowInner} />

            {/* Image container with neon border */}
            <div className={styles.imageContainer}>
                <div className={styles.neonBorder}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Animated corner accents */}
                <div className={styles.cornerTopLeft} />
                <div className={styles.cornerTopRight} />
                <div className={styles.cornerBottomLeft} />
                <div className={styles.cornerBottomRight} />

                {/* Scanning line effect */}
                <div className={styles.scanLine} />
            </div>

            {/* Content section */}
            <div className={styles.content}>
                <h3 className={styles.title}>
                    <span className={styles.titleText}>{item.title}</span>
                    <span className={styles.titleGlow}>{item.title}</span>
                </h3>
                <p className={styles.description}>{item.description}</p>

                {/* Visit button */}
                <div className={styles.visitButton}>
                    <span>Visit Website</span>
                    <svg
                        className={styles.arrow}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </div>
            </div>
        </motion.a>
    );
}

export default WebGallery;
