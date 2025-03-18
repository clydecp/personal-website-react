import './App.css';
import NavBar from './components/NavBar';
import PageDivider from './components/PageDivider';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import { useState, useEffect } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);


  return (
    <div className='app'>
      <NavBar scrollPosition={scrollPosition} />
      <HomePage />
      <PageDivider />
      <PortfolioPage />
      <PageDivider />
      <AboutPage />
      <PageDivider />
      <ContactPage />
      <PageDivider />
    </div>
  );
}

export default App;
