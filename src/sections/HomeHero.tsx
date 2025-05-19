import React from 'react';
import { PaintBucket } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import AnimatedElement from '../components/AnimatedElement';

const HomeHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 to-primary-500 text-white py-20 md:py-32">
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent-500"></div>
      </div>
      
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-7/12 z-10">
            <AnimatedElement animation="fade-up">
              <div className="flex items-center space-x-2 mb-6">
                <PaintBucket className="w-8 h-8 text-accent-500" />
                <span className="text-lg font-medium text-accent-400">Professional Chennai Painters</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Want a Beautifully Painted Space by Professional Chennai Painters?
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
                We provide high-quality painting services as the leading painting contractor in Chennai—zero stress, no surprises. Get your dream space painted without the hassle.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" size="lg">
                  Get Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  View Our Work
                </Button>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="w-full md:w-5/12 mt-12 md:mt-0">
            <AnimatedElement animation="fade-in" delay={300}>
              <div className="relative">
                <div className="absolute inset-0 bg-terracotta-500 rounded-lg transform rotate-3"></div>
                <img 
                  src="https://images.pexels.com/photos/8134647/pexels-photo-8134647.jpeg" 
                  alt="Professional painters at work" 
                  className="relative rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;