import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import WebGallery from '../../components/WebGallery/WebGallery';
import { PAGE_CONTENT } from '../../utils/constants';
import styles from './WebPage.module.css';

function WebPage() {
  const { title, description, items } = PAGE_CONTENT.web;

  return (
    <motion.main
      className={styles.webPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackButton />

      <header className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      </header>

      <div className={styles.galleryContainer}>
        <WebGallery items={items} />
      </div>
    </motion.main>
  );
}

export default WebPage;
