import React from 'react';
import { Clock, Banknote, Home } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import AnimatedElement from '../components/AnimatedElement';

type SavingPointProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const SavingPoint: React.FC<SavingPointProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="shrink-0">
        <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const CostSaving: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 bg-primary-700 text-white p-10 lg:p-16 relative">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-400"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-terracotta-500"></div>
              </div>
              
              <div className="relative z-10">
                <AnimatedElement animation="fade-up">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Did You Know Quality Painting Saves You Money?
                  </h2>
                  
                  <p className="text-primary-100 mb-6 text-lg">
                    Worried that professional exterior painting services in Chennai might break the bank? Did you know that investing in quality now can actually save you money in the long run?
                  </p>
                  
                  <div className="mb-8">
                    <img 
                      src="https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Professional painting" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <Button variant="secondary" size="lg">
                    Get Your Free Quote Today
                  </Button>
                </AnimatedElement>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 p-10 lg:p-16">
              <AnimatedElement animation="fade-up" delay={200}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  How Quality Painting Pays For Itself
                </h3>
                
                <SavingPoint 
                  icon={<Clock className="w-5 h-5 text-terracotta-600" />}
                  title="Longer-Lasting Protection"
                  description="Our premium, weather-resistant paints last years longer than standard options, so you won't need to repaint as often."
                />
                
                <SavingPoint 
                  icon={<Banknote className="w-5 h-5 text-terracotta-600" />}
                  title="Reduced Maintenance Costs"
                  description="Expert application means less peeling and fading, saving you from frequent repairs."
                />
                
                <SavingPoint 
                  icon={<Home className="w-5 h-5 text-terracotta-600" />}
                  title="Boosted Property Value"
                  description="A beautifully maintained exterior increases your property's value and curb appeal."
                />
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-gray-700 mb-4">
                    Cheaper options might seem tempting, but they often lead to more expenses down the line due to quick wear and tear. By choosing professional quality, you're making a smart investment that pays off over time.
                  </p>
                  
                  <p className="text-gray-900 font-semibold">
                    Don't let upfront costs hold you back from protecting your property. Invest in our exterior painting services in Chennai today and enjoy savings for years to come.
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CostSaving;