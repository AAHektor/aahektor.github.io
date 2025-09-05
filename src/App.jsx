import { useEffect, useState } from 'react';
import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './assets/pages/LandingPage'

function App() {

  const [loading, setLoading] = useState(true);
  const [animReady, setAnimReady] = useState(false);

    useEffect(() => {
    const MIN_SHOW = 2000;  
    const MAX_WAIT = 5000;  
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const remain = Math.max(0, MIN_SHOW - elapsed);
      setTimeout(() => {
        setLoading(false);
        
        requestAnimationFrame(() => setAnimReady(true));
      }, remain);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
    }

    const failSafe = setTimeout(finish, MAX_WAIT);
    return () => {
      window.removeEventListener('load', finish);
      clearTimeout(failSafe);
    };
  }, []);

   useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.backgroundPosition = `0% 0%, ${scrollY * 0.1}px ${scrollY * 0.1}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    {/* Preloader overlay */}
      {loading && (
        <div className="preloader">
          <div className="spinner" />
          <p>Loading…</p>
        </div>
      )}
      <HashRouter>
        <Routes>
          <Route path='/' element={<LandingPage animReady={animReady} />} />  
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
