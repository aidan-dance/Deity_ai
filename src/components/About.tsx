import React from 'react';
import { Clock, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import RetroText from './RetroText';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <RetroText
              text="Why Choose"
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="text-green-500"> Deity_AI?</span>
            </RetroText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Save Time Card */}
            <div className="hover-card p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
              <div className="h-12 mb-4 flex items-center">
                <Clock className="card-icon w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Save Time</h3>
              <p className="text-gray-300 mb-6">
                Reduce manual tasks with intelligent automation that works 24/7, 
                handling repetitive processes while your team focuses on strategic initiatives.
              </p>
              <a 
                href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                target="_blank"
                className="w-full group bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Saving Time
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Boost Efficiency Card */}
            <div className="hover-card p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
              <div className="h-12 mb-4 flex items-center">
                <Zap className="card-icon w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Boost Efficiency</h3>
              <p className="text-gray-300 mb-6">
                Powered workflows tailored to your needs, learning and adapting 
                to your business processes for maximum operational efficiency.
              </p>
              <a 
                href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                target="_blank"
                className="w-full group bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Maximize Efficiency
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Grow Revenue Card */}
            <div className="hover-card p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
              <div className="h-12 mb-4 flex items-center">
                <TrendingUp className="card-icon w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Grow Revenue</h3>
              <p className="text-gray-300 mb-6">
                Enable your team to focus on what matters most by automating routine tasks, 
                leading to increased productivity and better customer experiences.
              </p>
              <a 
                href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                target="_blank"
                className="w-full group bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Grow Your Revenue
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;