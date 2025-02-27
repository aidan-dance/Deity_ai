import React from 'react';
import { MessageSquare, Phone, Share2, Mail, ArrowRight } from 'lucide-react';
import RetroText from './RetroText';

const Services: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <RetroText
          text="UNLEASH The Power Of"
          className="text-4xl md:text-6xl font-bold text-center mb-2"
        >
          <span className="text-green-500"> Next-Level Automation</span>
        </RetroText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Chatbot Agent Card */}
          <div className="hover-card p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <MessageSquare className="card-icon w-10 h-10 text-green-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Chatbot Agent</h3>
            <p className="text-gray-300 mb-6">
              Transform your customer service with 24/7 intelligent support and lead capture, 
              powered by advanced natural language processing for human-like interactions.
            </p>
            <div className="inline-block text-green-500 font-semibold">
              24/7 Support Coverage
            </div>
          </div>

          {/* Voice Caller Agent Card */}
          <div className="hover-card p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <Phone className="card-icon w-10 h-10 text-green-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Voice Caller Agent</h3>
            <p className="text-gray-300 mb-6">
              Revolutionize your call center with natural-sounding agents that provide 
              instant, consistent responses while gathering valuable customer insights.
            </p>
            <div className="inline-block text-green-500 font-semibold">
              100% Availability
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="group bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center">
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;