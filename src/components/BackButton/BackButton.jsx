import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './BackButton.module.css';

function BackButton() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/" className={styles.backButton} aria-label="Back to hub">
        <span className={styles.arrow}>←</span>
        <span className={styles.label}>Back</span>
      </Link>
    </motion.div>
  );
}

export default BackButton;
