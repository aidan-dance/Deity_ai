import React, { useEffect, useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import { ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store email in localStorage for the survey
    localStorage.setItem('userEmail', email);
    // Navigate to survey
    navigate('/survey');
  };

  useEffect(() => {
    // Add Spline script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.71/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black relative">
      <CustomCursor />
      
      {/* Logo */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10">
        <img 
          src="/Assets/Logo.png" 
          alt="Deity AI Logo" 
          className="h-16 sm:h-24 w-auto cursor-pointer" 
          onClick={() => navigate('/home')}
        />
      </div>
      
      {/* Centered Spline with zoom out effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <spline-viewer 
          loading-anim-type="none" 
          url="https://prod.spline.design/K1UvaagSaQEmufIG/scene.splinecode"
          className="w-auto h-auto max-w-full max-h-full flex items-center justify-center"
          camera-target="0 0 0"
          camera-orbit="-45deg 55deg 15m"
        />
      </div>
      
      {/* Email Capture Section - Centered on all devices */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-md px-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-400"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-green-500/80 hover:bg-green-400/80 backdrop-blur-md text-black font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/home')}
              className="flex-1 group bg-black/30 hover:bg-black/50 backdrop-blur-md text-white font-medium px-6 py-3 rounded-lg transition-colors border border-green-500/20 flex items-center justify-center whitespace-nowrap"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;