import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <div id="main-content" className={styles.main}>
        {children}
      </div>
    </div>
  );
}

export default Layout;

