import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const services = [
    { name: 'Exterior Painting', href: '#exterior-painting' },
    { name: 'Interior Painting', href: '#interior-painting' },
    { name: 'Texture Painting', href: '#texture-painting' },
    { name: 'Wood Painting', href: '#wood-painting' },
    { name: 'Metal Painting', href: '#metal-painting' },
    { name: 'Waterproofing Painting', href: '#waterproofing-painting' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      } py-4`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.ibb.co/p6q8DYpw/chennai-painter-logo-2.png" 
              alt="Chennai Painter Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Services Dropdown */}
              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            <a 
              href="#process" 
              className="text-gray-700 hover:text-primary-500 transition-colors"
            >
              Our Process
            </a>
            <a 
              href="#gallery" 
              className="text-gray-700 hover:text-primary-500 transition-colors"
            >
              Gallery
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary-500 transition-colors"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-primary-500 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+919876543210" 
              className="flex items-center mr-6 text-primary-500"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">+91 987 654 3210</span>
            </a>
            <Button variant="primary">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-gray-900 mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-900 mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 rounded-lg shadow-lg p-4 absolute left-4 right-4 top-14">
            <nav className="flex flex-col space-y-1">
              <div className="py-2 px-3 text-gray-900 font-medium">Services</div>
              {services.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="px-3 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </a>
              ))}
              <div className="border-t border-gray-100 my-2"></div>
              <a 
                href="#process" 
                className="px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Process
              </a>
              <a 
                href="#gallery" 
                className="px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#about" 
                className="px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="tel:+919876543210" 
                className="flex items-center px-3 py-2 text-primary-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-medium">+91 987 654 3210</span>
              </a>
              <Button variant="primary" className="mt-2">
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;