import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import { PAGE_CONTENT, CONTACT_INFO, SOCIAL_LINKS } from '../../utils/constants';
import styles from './ContactPage.module.css';

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className={styles.particlesContainer}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={styles.particle}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Animated background gradient
function AnimatedBackground() {
  return (
    <div className={styles.animatedBg}>
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
      <div className={styles.gradientOrb3} />
    </div>
  );
}

function ContactPage() {
  const { title, description } = PAGE_CONTENT.contact;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.main
      className={styles.contactPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedBackground />
      <FloatingParticles />
      <BackButton />

      <motion.div
        className={styles.contentWrapper}
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        }}
      >
        <header className={styles.header}>
          <motion.div
            className={styles.titleWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <h1 className={styles.glitchTitle} data-text={title}>
              {title}
            </h1>
            <div className={styles.titleGlow} />
          </motion.div>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>
        </header>

        <motion.section
          className={styles.contactMethods}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href={CONTACT_INFO.whatsapp.link}
            className={`${styles.contactLink} ${styles.whatsappLink}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.icon}>💬</span>
            <div className={styles.linkContent}>
              <span className={styles.linkLabel}>{CONTACT_INFO.whatsapp.label}</span>
              <span className={styles.linkNumber}>{CONTACT_INFO.whatsapp.number}</span>
            </div>
            <div className={styles.linkGlow} />
          </motion.a>

          <motion.a
            href={CONTACT_INFO.phone.link}
            className={`${styles.contactLink} ${styles.phoneLink}`}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={styles.icon}>📞</span>
            <div className={styles.linkContent}>
              <span className={styles.linkLabel}>{CONTACT_INFO.phone.label}</span>
              <span className={styles.linkNumber}>{CONTACT_INFO.phone.number}</span>
            </div>
            <div className={styles.linkGlow} />
          </motion.a>
        </motion.section>

        <motion.section
          className={styles.socialLinks}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
        >
          <motion.h3
            className={styles.socialTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Follow My Work
          </motion.h3>

          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialIcon} ${styles.instagramButton}`}
              aria-label={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(225, 48, 108, 0.8), 0 0 80px rgba(131, 58, 180, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.instagramIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
              <span className={styles.socialLabel}>{social.label}</span>
              <span className={styles.socialHandle}>@amerkallajo</span>
            </motion.a>
          ))}
        </motion.section>

        {/* Decorative elements */}
        <div className={styles.decorativeRing1} />
        <div className={styles.decorativeRing2} />
      </motion.div>
    </motion.main>
  );
}

export default ContactPage;
