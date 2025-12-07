import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import Hero from '../../components/Hero/Hero';
import styles from './HomePage.module.css';

function HomePage() {
  // Disable body scroll on home page for single-screen experience
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

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
