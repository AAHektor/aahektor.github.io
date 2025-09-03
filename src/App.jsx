import { useEffect } from 'react';
import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './assets/pages/LandingPage'

function App() {

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
      <HashRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />  
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
