import React, { useEffect } from 'react';
import Hero from '../../sections/Hero';
import ProblemSolution from '../../sections/ProblemSolution';
import Benefits from '../../sections/Benefits';
import Process from '../../sections/Process';
import Features from '../../sections/Features';
import CostSaving from '../../sections/CostSaving';
import Contact from '../../sections/Contact';

const ExteriorPainting: React.FC = () => {
  useEffect(() => {
    document.title = "PrimeCoat - Premium Exterior Painting Services in Chennai";
  }, []);

  return (
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
  );
};

export default ExteriorPainting;