import React from 'react';
import { PaintBucket, Users, Palette } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 mb-12">
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="fade-up">
              <SectionTitle
                title="Our Exceptional Features"
                centered={false}
                className="mb-10"
              />
              
              <Feature
                icon={<PaintBucket className="w-6 h-6 text-primary-600" />}
                title="Premium Weather-Resistant Paints"
                description="We use top-quality paints that provide long-lasting protection against Chennai's climate, giving you peace of mind and reducing future maintenance."
              />
              
              <Feature
                icon={<Users className="w-6 h-6 text-primary-600" />}
                title="Professional Experienced Team"
                description="Our skilled painters deliver a flawless finish, enhancing your property's value and giving you pride in your home."
              />
              
              <Feature
                icon={<Palette className="w-6 h-6 text-primary-600" />}
                title="Tailored Painting Solutions"
                description="We customize our services to meet your specific needs, ensuring optimal results and personal satisfaction."
              />
            </AnimatedElement>
          </div>
          
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="slide-in-right" delay={200}>
              <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[500px]">
                <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Exterior painting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5691626/pexels-photo-5691626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Painter at work" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-1 row-span-3 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/8092522/pexels-photo-8092522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Paint samples" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-3 row-span-2 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Beautiful exterior" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;