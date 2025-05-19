import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import ProblemSolution from './sections/ProblemSolution';
import Benefits from './sections/Benefits';
import Process from './sections/Process';
import Features from './sections/Features';
import CostSaving from './sections/CostSaving';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "PrimeCoat - Premium Exterior Painting Services in Chennai";
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="relative overflow-hidden">
          <ProblemSolution />
        </div>
        <div className="paint-texture relative">
          <Benefits />
        </div>
        <div className="brush-stroke relative">
          <Process />
        </div>
        <div className="paint-drip relative">
          <Features />
        </div>
        <CostSaving />
        <div className="paint-texture relative">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;