import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/home" className="flex items-center">
              <img src="/Assets/Logo.png" alt="Deity_AI Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-300">
              Your partner in automation and innovation
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-500" title="X (formerly Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai-chatbot" className="text-gray-300 hover:text-green-500">Chatbots</Link></li>
              <li><Link to="/services/ai-voice-caller" className="text-gray-300 hover:text-green-500">Voice Caller</Link></li>
              <li><Link to="/services/social-media-ai" className="text-gray-300 hover:text-green-500">Social Media</Link></li>
              <li><Link to="/services/email-ai" className="text-gray-300 hover:text-green-500">Email Assistant</Link></li>
              <li><Link to="/services/website" className="text-gray-300 hover:text-green-500">Website Service</Link></li>
              <li className="pt-2 border-t border-green-500/20">
                <Link to="/services" className="text-green-500 hover:text-green-400 font-medium">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-green-500">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-green-500">Services</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-green-500">Book a Demo</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-green-500">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-green-500">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-green-500">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-500/20 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Deity_AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;