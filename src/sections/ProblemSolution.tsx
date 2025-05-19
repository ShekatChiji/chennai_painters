import React from 'react';
import { Shield, Clock, ThumbsUp } from 'lucide-react';
import Container from '../components/Container';
import AnimatedElement from '../components/AnimatedElement';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="fade-up">
              <SectionTitle 
                title="Get the Durable Exterior Your Home Deserves"
                centered={false}
                className="mb-8"
              />
              
              <p className="text-gray-600 mb-6">
                We understand how disheartening it is to watch your property's exterior fade and peel despite your efforts to maintain it. The harsh Chennai climate shouldn't dictate how your home looks or how often you need to repaint.
              </p>
              
              <p className="text-gray-900 font-semibold mb-6">
                We believe you shouldn't have to repaint your property frequently due to harsh weather—you deserve an exterior that stands the test of time.
              </p>
              
              <p className="text-gray-600 mb-8">
                With over 15 years of experience and more than 500 satisfied clients, we specialize in delivering durable exterior painting services in Chennai tailored to withstand the city's unique climate challenges. Our expertise ensures your home remains beautiful and protected for years to come.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">500+ Happy Clients</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Timely Project Completion</span>
                </div>
              </div>
              
              <Button variant="primary" size="lg">
                Let's Transform Your Home
              </Button>
            </AnimatedElement>
          </div>
          
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="slide-in-right" delay={200}>
              <div className="relative h-full">
                <div className="absolute -top-4 -right-4 w-48 h-48 rounded-full bg-terracotta-100"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-primary-100"></div>
                
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Beautiful home exterior" 
                    className="rounded-lg shadow-xl object-cover w-full h-auto"
                  />
                  
                  <div className="absolute bottom-0 right-0 transform translate-y-1/3 -translate-x-8">
                    <div className="bg-white rounded-lg shadow-xl p-6 max-w-xs">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                        <p className="font-medium text-gray-900">Weather-Resistant</p>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Our specialized coating systems are designed to withstand Chennai's harsh climate conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution;