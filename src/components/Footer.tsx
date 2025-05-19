import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://i.ibb.co/6RDp3K31/chennai-painter-logo-2.png" 
                alt="Chennai Painter Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Premium exterior painting services in Chennai. We help homeowners protect and beautify their properties with durable, weather-resistant solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Exterior House Painting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Painting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wall Texturing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Waterproofing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Color Consultation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-terracotta-500 mr-3 mt-1" />
                <span className="text-gray-400">123 Anna Nagar, Chennai 600040, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-terracotta-500 mr-3" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">+91 987 654 3210</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-terracotta-500 mr-3" />
                <a href="mailto:info@primecoat.com" className="text-gray-400 hover:text-white transition-colors">info@primecoat.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Chennai Painter. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;