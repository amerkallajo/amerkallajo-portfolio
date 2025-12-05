import { motion } from 'framer-motion';
import styles from './GalleryGrid.module.css';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

function GalleryGrid({ items = [], onItemClick }) {
  return (
    <motion.div
      className={styles.grid}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {items.length > 0 ? (
        items.map((item, index) => (
          <GalleryItem
            key={item.id || index}
            item={item}
            index={index}
            onClick={onItemClick}
          />
        ))
      ) : (
        <motion.div className={styles.emptyState} variants={itemVariants}>
          <p>Gallery items will appear here</p>
        </motion.div>
      )}
    </motion.div>
  );
}

function GalleryItem({ item, onClick }) {
  const isLink = !!item.link;
  const Component = isLink ? motion.a : motion.article;

  const props = isLink
    ? {
      href: item.link,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: styles.item,
      variants: itemVariants,
      whileHover: { zIndex: 10 },
    }
    : {
      className: styles.item,
      variants: itemVariants,
      onClick: () => onClick?.(item),
      whileHover: { zIndex: 10 },
      role: 'button',
      tabIndex: 0,
      onKeyDown: (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(item);
        }
      },
    };

  return (
    <Component {...props}>
      <div className={styles.imageWrapper}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#1a1a24' }} />
        )}
      </div>

      <div className={styles.overlay}>
        <h3 className={styles.title}>{item.title}</h3>
        {item.description && (
          <p className={styles.description}>{item.description}</p>
        )}
      </div>
    </Component>
  );
}

export default GalleryGrid;
