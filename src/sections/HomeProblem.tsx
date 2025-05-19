import React from 'react';
import Container from '../components/Container';
import AnimatedElement from '../components/AnimatedElement';
import SectionTitle from '../components/SectionTitle';

const HomeProblem: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-up">
            <SectionTitle
              title="Is Your Property Suffering from Poor Paint Quality?"
              centered={true}
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Are you tired of dealing with painters who arrive late, leave a mess, and deliver poor-quality results? The stress of hiring unreliable painting contractors in Chennai can turn a simple painting project into a nightmare.
              </p>
              
              <p className="text-gray-600 mb-6">
                Poor workmanship, hidden costs, and project delays can lead to a frustrating experience. You deserve better.
              </p>
              
              <p className="text-gray-900 font-semibold mb-6">
                Chennai Painter is here to provide a reliable painting solution in Chennai—seamlessly and stress-free. We believe every property deserves to be beautifully painted by professionals without stress or uncertainty.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  );
};

export default HomeProblem;