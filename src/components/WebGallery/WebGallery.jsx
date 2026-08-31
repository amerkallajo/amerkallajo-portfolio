import { motion } from 'framer-motion';
import styles from './WebGallery.module.css';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function WebGallery({ items = [] }) {
  return (
    <motion.div className={styles.gallery} variants={containerVariants} initial="initial" animate="animate">
      {items.map((item, index) => (
        <motion.a
          key={item.id || index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          variants={itemVariants}
          whileHover={{ y: -3 }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={`${item.title} public website preview`} loading="lazy" />
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.visitButton}>
              <span>Inspect public website</span>
              <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}

export default WebGallery;
