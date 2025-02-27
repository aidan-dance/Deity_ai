import React from 'react';
import { Check, X, Zap, ArrowRight } from 'lucide-react';
import RetroText from './RetroText';
import { Link } from 'react-router-dom';

const ComparisonTable: React.FC = () => {
  const features = [
    {
      name: '24/7 Customer Support',
      deityAI: { value: true, detail: 'Always-on support' },
      competitor: { value: false, detail: 'Limited hours' },
      manual: { value: false, detail: 'Not possible' }
    },
    {
      name: 'Response Time',
      deityAI: { value: true, detail: '< 2 seconds' },
      competitor: { value: false, detail: '30+ minutes' },
      manual: { value: false, detail: 'Hours or days' }
    },
    {
      name: 'Multilingual Support',
      deityAI: { value: true, detail: '100+ languages' },
      competitor: { value: false, detail: 'Limited languages' },
      manual: { value: false, detail: 'Limited by staff' }
    },
    {
      name: 'Lead Conversion Rate',
      deityAI: { value: true, detail: '40% increase' },
      competitor: { value: false, detail: '10% average' },
      manual: { value: false, detail: 'Highly variable' }
    },
    {
      name: 'Cost Efficiency',
      deityAI: { value: true, detail: '£2/hr equivalent' },
      competitor: { value: false, detail: '£15/hr average' },
      manual: { value: false, detail: '£25+/hr per agent' }
    },
    {
      name: 'Scalability',
      deityAI: { value: true, detail: 'Infinite' },
      competitor: { value: false, detail: 'Limited' },
      manual: { value: false, detail: 'Very limited' }
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-2">
            <RetroText
              text="See the Numbers"
              className="text-3xl sm:text-4xl md:text-6xl font-bold"
              showUnderscore={false}
            />
          </div>
          <div>
            <RetroText
              text="Make the Right Choice"
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-500"
              showUnderscore={true}
            />
          </div>
        </div>
        
        <p className="text-base sm:text-xl text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto mt-6">
          Discover how Deity_AI creates an unfair advantage for your business compared to 
          outdated systems and competitors
        </p>

        {/* Comparison Table */}
        <div className="hover-card p-6 sm:p-12 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
          <div className="overflow-x-auto">
            <div className="min-w-[600px] md:min-w-[768px]">
              <div className="grid grid-cols-4 gap-4 mb-8">
                {/* Header Row */}
                <div className="text-base sm:text-lg font-aquire text-white">Features</div>
                <div className="text-base sm:text-lg font-aquire text-green-500 relative before:absolute before:inset-0 before:-m-4 before:bg-green-500/5 before:rounded-lg before:shadow-[0_0_15px_rgba(0,255,0,0.3)] before:-z-10">
                  Deity_AI
                </div>
                <div className="text-base sm:text-lg font-aquire text-gray-400">Competitor X</div>
                <div className="text-base sm:text-lg font-aquire text-gray-400">Manual Process</div>

                {/* Feature Rows */}
                {features.map((feature, index) => (
                  <React.Fragment key={index}>
                    <div className="py-4 border-t border-green-500/20">
                      <span className="font-medium">{feature.name}</span>
                    </div>
                    <div className="py-4 border-t border-green-500/20 relative before:absolute before:inset-0 before:-m-4 before:bg-green-500/5 before:shadow-[0_0_15px_rgba(0,255,0,0.15)] before:-z-10">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-green-500">{feature.deityAI.detail}</span>
                      </div>
                    </div>
                    <div className="py-4 border-t border-green-500/20">
                      <div className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-400">{feature.competitor.detail}</span>
                      </div>
                    </div>
                    <div className="py-4 border-t border-green-500/20">
                      <div className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-400">{feature.manual.detail}</span>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center space-y-8">
          <h3 className="text-xl sm:text-2xl font-aquire">
            Don't Let Your Competition Get Ahead
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
              target="_blank"
              className="group bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2 flex-shrink-0" />
              <span>SCHEDULE YOUR FREE DEMO</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
            <Link to="/about" className="group bg-black/50 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center">
              Learn More About Deity_AI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;