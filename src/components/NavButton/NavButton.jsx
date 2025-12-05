import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NavButton.module.css';

function NavButton({ label, to, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={to} className={styles.navButton}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{label}</span>
        <span className={styles.glow} />
      </Link>
    </motion.div>
  );
}

export default NavButton;
