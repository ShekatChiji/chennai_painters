import React from 'react';
import { Calendar, FileEdit, Home } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedElement from '../components/AnimatedElement';

type ProcessStepProps = {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ number, icon, title, description, delay }) => {
  return (
    <AnimatedElement animation="fade-up" delay={delay} className="w-full md:w-1/3 p-4">
      <div className="relative">
        <div className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 relative z-10">
          <div className="absolute -top-5 -left-2 bg-terracotta-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
            {number}
          </div>
          <div className="p-4 bg-primary-50 rounded-full inline-flex items-center justify-center mb-6 mt-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        
        {number < 3 && (
          <div className="hidden md:block absolute top-1/2 right-0 w-16 h-2 bg-gray-200 transform translate-x-1/2">
            <div className="absolute top-0 left-0 h-full bg-primary-500 w-0 process-line"></div>
          </div>
        )}
      </div>
    </AnimatedElement>
  );
};

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-100 opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-terracotta-100 opacity-50"></div>
      </div>
      
      <Container className="relative z-10">
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Transform Your Home in Three Simple Steps"
            centered={true}
          />
        </AnimatedElement>
        
        <div className="flex flex-wrap -mx-4">
          <ProcessStep
            number={1}
            icon={<Calendar className="w-8 h-8 text-primary-600" />}
            title="Schedule Your Free Consultation"
            description="Contact us to arrange a convenient time for a comprehensive exterior assessment, so you receive expert advice tailored to your property's needs."
            delay={100}
          />
          
          <ProcessStep
            number={2}
            icon={<FileEdit className="w-8 h-8 text-primary-600" />}
            title="Customized Painting Plan"
            description="We create a tailored painting solution using premium materials, ensuring high-quality workmanship for a durable and beautiful exterior."
            delay={200}
          />
          
          <ProcessStep
            number={3}
            icon={<Home className="w-8 h-8 text-primary-600" />}
            title="Enjoy Lasting Beauty"
            description="Experience the transformation as your property gains enhanced value and curb appeal while you save on future maintenance costs."
            delay={300}
          />
        </div>
      </Container>
    </section>
  );
};

export default Process;