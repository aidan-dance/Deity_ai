import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RetroText from './RetroText';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-aquire text-white mb-2">
            10X Your Business Growth With
          </h1>
          <RetroText
            text="Automation"
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-500"
          />
        </div>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          WARNING: This Technology Is Creating Unfair Advantages For Businesses That Act Fast. 
          Will You Be Left Behind?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services" className="group bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center">
            Learn More
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/booking" className="group bg-black/50 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center">
            Get a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="hover-card p-4 sm:p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <h3 className="card-icon text-green-500 text-3xl sm:text-4xl font-aquire mb-2">24/7</h3>
            <p className="text-gray-300">Intelligent Customer Support</p>
          </div>
          <div className="hover-card p-4 sm:p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <h3 className="card-icon text-green-500 text-3xl sm:text-4xl font-aquire mb-2">90%</h3>
            <p className="text-gray-300">Faster Response Times</p>
          </div>
          <div className="hover-card p-4 sm:p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <h3 className="card-icon text-green-500 text-3xl sm:text-4xl font-aquire mb-2">40%</h3>
            <p className="text-gray-300">Increase in Conversions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;