import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomCursor from '../CustomCursor/CustomCursor';
import styles from './Layout.module.css';

function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <CustomCursor />
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <main id="main-content" className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Layout;

