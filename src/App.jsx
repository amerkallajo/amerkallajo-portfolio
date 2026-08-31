import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout/Layout';
import PageTransition from './components/PageTransition/PageTransition';

import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import WebPage from './pages/WebPage/WebPage';


function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/product"
            element={
              <PageTransition>
                <ProductPage />
              </PageTransition>
            }
          />
          <Route
            path="/web"
            element={
              <PageTransition>
                <WebPage />
              </PageTransition>
            }
          />

          <Route path="/profile" element={<Navigate to="/#profile" replace />} />
          <Route path="/proof" element={<Navigate to="/#proof" replace />} />
          <Route path="/capabilities" element={<Navigate to="/#capabilities" replace />} />
          <Route path="/recommend" element={<Navigate to="/#evaluate" replace />} />
          <Route path="/context" element={<Navigate to="/profile.html" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
