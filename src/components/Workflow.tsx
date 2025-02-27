import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import RetroText from './RetroText';
import { Link } from 'react-router-dom';

const Workflow: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <RetroText
              text="Ready To"
              className="text-4xl md:text-5xl font-bold mb-2"
            >
              <span className="text-green-500"> 10X Your Success?</span>
            </RetroText>
            <p className="text-gray-300 text-lg mb-8">
              Take the first step towards transforming your business with AI automation.
              Our team is ready to show you how.
            </p>
            <Link to="/booking" className="group bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center">
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video bg-black/50 rounded-lg overflow-hidden border border-green-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500 hover:bg-green-500/30 transition-colors group">
                  <Play className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;