import { motion } from 'framer-motion';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import Hero from '../../components/Hero/Hero';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <motion.main
      className={styles.homePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedBackground />
      <Hero />
    </motion.main>
  );
}

export default HomePage;
