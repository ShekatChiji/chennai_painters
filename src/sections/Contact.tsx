import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import AnimatedElement from '../components/AnimatedElement';
import { Calendar, Clock, ThumbsUp } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <Container>
        <AnimatedElement animation="fade-up">
          <SectionTitle
            title="Ready to Transform Your Property?"
            subtitle="Schedule your free consultation and let our experts help you protect and beautify your home."
            centered={true}
          />
        </AnimatedElement>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="fade-up" delay={200}>
              <ContactForm />
            </AnimatedElement>
          </div>
          
          <div className="w-full lg:w-1/2">
            <AnimatedElement animation="fade-up" delay={400}>
              <div className="bg-primary-50 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our Exterior Painting Services</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                      <Calendar className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Flexible Scheduling</h4>
                      <p className="text-gray-600">
                        We work around your schedule to ensure minimal disruption to your daily life during the painting process.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Timely Completion</h4>
                      <p className="text-gray-600">
                        We respect your time and always complete projects within the agreed timeframe without compromising on quality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                      <ThumbsUp className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Satisfaction Guarantee</h4>
                      <p className="text-gray-600">
                        We stand behind our work with a satisfaction guarantee, ensuring you're completely happy with the results.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="flex -space-x-2">
                      <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Client" 
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <img 
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Client" 
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <img 
                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Client" 
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                    <div className="ml-2">
                      <span className="text-sm text-gray-500">Trusted by 500+ clients</span>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic">
                    "The team did an exceptional job with our exterior painting. Not only does it look beautiful, but it has also withstood the Chennai monsoon season without any issues. Highly recommend their services!"
                  </blockquote>
                  
                  <div className="mt-4 text-sm text-gray-900 font-semibold">
                    — Priya Sharma, Anna Nagar
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

export default Contact;