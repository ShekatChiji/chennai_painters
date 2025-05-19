import React from 'react';
import Container from '../components/Container';
import AnimatedElement from '../components/AnimatedElement';
import SectionTitle from '../components/SectionTitle';
import { Clock, Award, Users } from 'lucide-react';

const HomeAbout: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Chennai Painters That Help Homeowners and Businesses Transform Their Spaces with Ease"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                We understand the frustration of dealing with unreliable Chennai painters and poor-quality work. You deserve a seamless painting experience that turns your vision into reality.
              </p>
              
              <p className="text-gray-600">
                With over 10 years of experience, Chennai Painter is a trusted painting contractor in Chennai dedicated to exceptional quality. Our experienced team ensures that your project is completed on time, within budget, and to your highest satisfaction. We handle everything from start to finish, so you can sit back and enjoy the transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">10+ Years</h3>
                <p className="text-gray-600">Of Excellence</p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <Award className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Satisfaction</p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">1000+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time</h3>
                <p className="text-gray-600">Completion</p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </Container>
    </section>
  );
};

export default HomeAbout;