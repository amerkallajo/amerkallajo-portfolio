import { motion } from 'framer-motion';
import NavButton from '../NavButton/NavButton';
import { NAV_LINKS, PAGE_CONTENT } from '../../utils/constants';
import styles from './Hero.module.css';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function Hero() {
  const { title, subtitle, disciplines } = PAGE_CONTENT.home;

  return (
    <motion.section
      className={styles.hero}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className={styles.branding} variants={itemVariants}>
        <motion.img
          src="/images/profile.png"
          alt="Amer Kallajo"
          className={styles.profilePic}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className={styles.titleContainer}>
          <h1 className={styles.title} data-text={title}>{title}</h1>
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.disciplines}>{disciplines}</p>
      </motion.div>

      <motion.nav
        className={styles.navigation}
        variants={containerVariants}
      >
        {NAV_LINKS.map((link) => (
          <motion.div key={link.id} variants={itemVariants}>
            <NavButton
              label={link.label}
              to={link.path}
            />
          </motion.div>
        ))}
      </motion.nav>
    </motion.section>
  );
}

export default Hero;
