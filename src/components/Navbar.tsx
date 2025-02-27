import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const services = [
    { name: 'Chatbot', path: '/services/ai-chatbot' },
    { name: 'Voice Caller', path: '/services/ai-voice-caller' },
    { name: 'Social Media', path: '/services/social-media-ai' },
    { name: 'Email Assistant', path: '/services/email-ai' },
    { name: 'Website Service', path: '/services/website' },
    { name: 'All Services', path: '/services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80' : 'bg-black/50'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center" onClick={closeMenu}>
              <img src="/Assets/Logo.png" alt="Deity_AI Logo" className="h-16 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/home" className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div
                    className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-black/90 backdrop-blur-md border border-green-500/20"
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="py-2">
                      {services.map((service, index) => (
                        <React.Fragment key={service.path}>
                          <Link
                            to={service.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-green-500 hover:bg-black/50"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                          {index === services.length - 2 && (
                            <div className="my-2 border-t border-green-500/20" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                Client Login
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-green-500 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-green-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-green-500 hover:bg-black/50"
              onClick={closeMenu}
            >
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-green-500 hover:bg-black/50"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1 border-l border-green-500/20 ml-3">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-green-500 hover:bg-black/50"
                      onClick={closeMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-green-500 hover:bg-black/50"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-green-500 hover:bg-black/50"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="pt-2">
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-green-700 transition-colors">
                Client Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;