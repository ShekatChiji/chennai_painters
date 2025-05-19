import React, { useEffect } from 'react';
import HomeHero from '../sections/HomeHero';
import HomeProblem from '../sections/HomeProblem';
import HomeAbout from '../sections/HomeAbout';
import Benefits from '../sections/Benefits';
import Process from '../sections/Process';
import Features from '../sections/Features';
import Contact from '../sections/Contact';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Chennai Painter - Professional Painting Services in Chennai";
  }, []);

  return (
    <main>
      <HomeHero />
      <div className="relative overflow-hidden">
        <HomeProblem />
      </div>
      <div className="paint-texture relative">
        <HomeAbout />
      </div>
      <div className="brush-stroke relative">
        <Benefits />
      </div>
      <div className="paint-drip relative">
        <Features />
      </div>
      <Process />
      <div className="paint-texture relative">
        <Contact />
      </div>
    </main>
  );
};

export default Home;