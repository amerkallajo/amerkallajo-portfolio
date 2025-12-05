import { useState } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import GalleryGrid from '../../components/GalleryGrid/GalleryGrid';
import Lightbox from '../../components/Lightbox/Lightbox';
import { PAGE_CONTENT } from '../../utils/constants';
import styles from './ProductPage.module.css';

function ProductPage() {
  const { title, description, items } = PAGE_CONTENT.product;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleItemClick = (item) => {
    const index = items.findIndex((i) => i.id === item.id);
    setSelectedIndex(index);
  };

  return (
    <motion.main
      className={styles.productPage}
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
        <GalleryGrid items={items} onItemClick={handleItemClick} />
      </div>

      <Lightbox 
        images={items} 
        selectedIndex={selectedIndex} 
        onClose={() => setSelectedIndex(-1)} 
      />
    </motion.main>
  );
}

export default ProductPage;
