import React from 'react';
import { ShieldCheck, Paintbrush, Settings } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

type BenefitProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedElement animation="fade-up" delay={delay} className="w-full md:w-1/3 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform border border-gray-100">
        <div className="p-4 bg-primary-50 rounded-full inline-flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedElement>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Unlock Exclusive Advantages with Our Exterior Painting Services"
            centered={true}
          />
        </AnimatedElement>
        
        <div className="flex flex-wrap -mx-4">
          <BenefitCard
            icon={<ShieldCheck className="w-8 h-8 text-primary-600" />}
            title="Long-Lasting Protection"
            description="Using premium, weather-resistant paints, we offer long-lasting protection against Chennai's harsh climate, giving you peace of mind and saving you money on maintenance."
            delay={100}
          />
          
          <BenefitCard
            icon={<Paintbrush className="w-8 h-8 text-primary-600" />}
            title="Expert Craftsmanship"
            description="Our professional, experienced team delivers high-quality workmanship and a flawless finish, enhancing your property's value and giving you pride of ownership."
            delay={200}
          />
          
          <BenefitCard
            icon={<Settings className="w-8 h-8 text-primary-600" />}
            title="Customized Solutions"
            description="We provide painting solutions tailored to your needs, ensuring optimal results that reflect your personal style and bring you satisfaction."
            delay={300}
          />
        </div>
      </Container>
    </section>
  );
};

export default Benefits;