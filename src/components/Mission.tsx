import React from 'react';
import { MessageSquare, Headphones, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RetroText from './RetroText';

const Mission: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-green-500 mb-6">
              <span className="w-6 h-6 rounded-full border border-green-500/50 flex items-center justify-center">
                <span className="text-sm">01</span>
              </span>
              <span className="font-aquire">THE OPPORTUNITY</span>
            </div>

            <RetroText
              text="Wake Up. Automate."
              className="text-4xl md:text-5xl font-bold mb-2"
            >
              <span className="text-green-500"> Win.</span>
            </RetroText>

            <p className="text-gray-300 text-lg mb-8">
              At Deity_AI, we're revolutionizing customer interaction through powered
              automation. Our mission is to help businesses capture leads and engage with
              customers 24/7 using cutting-edge solutions that deliver multilingual support,
              lightning-fast response times, and seamless lead booking capabilities.
            </p>

            <p className="text-gray-300 text-lg mb-8">
              Built on the pillars of Reliability, Results, and Innovation, we stand out with our
              emotionally intelligent voice agents, comprehensive analytics dashboards, and
              sophisticated human handoff system.
            </p>

            <Link to="/booking" className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center">
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-6">
            <div className="hover-card p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                  <MessageSquare className="card-icon w-12 h-12 sm:w-6 sm:h-6 text-green-500" />
                </div>
                <div className="w-full text-center sm:text-left">
                  <h3 className="font-aquire mb-2">Captures Leads</h3>
                  <p className="text-gray-300 text-sm">
                    Our chatbots engage with customers across your website and social media,
                    capturing leads 24/7.
                  </p>
                </div>
                <ArrowRight className="hidden sm:block card-icon w-5 h-5 text-green-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="hover-card p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                  <Headphones className="card-icon w-12 h-12 sm:w-6 sm:h-6 text-green-500" />
                </div>
                <div className="w-full text-center sm:text-left">
                  <h3 className="font-aquire mb-2">Real-Time Interaction</h3>
                  <p className="text-gray-300 text-sm">
                    Call and chat agents handle multilingual support, answer inquiries, and book
                    appointments in real-time.
                  </p>
                </div>
                <ArrowRight className="hidden sm:block card-icon w-5 h-5 text-green-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="hover-card p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                  <BarChart className="card-icon w-12 h-12 sm:w-6 sm:h-6 text-green-500" />
                </div>
                <div className="w-full text-center sm:text-left">
                  <h3 className="font-aquire mb-2">Insights and Handoffs</h3>
                  <p className="text-gray-300 text-sm">
                    Leads and insights are delivered to your team, with seamless handoffs when needed.
                  </p>
                </div>
                <ArrowRight className="hidden sm:block card-icon w-5 h-5 text-green-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="hover-card p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="card-icon text-2xl font-aquire">2.5s</h4>
                    <p className="text-gray-300 text-sm mt-1">Response Time</p>
                  </div>
                  <span className="text-green-500 text-sm">+15%</span>
                </div>
              </div>
              <div className="hover-card p-6 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="card-icon text-2xl font-aquire">98.5%</h4>
                    <p className="text-gray-300 text-sm mt-1">Success Rate</p>
                  </div>
                  <span className="text-green-500 text-sm">+5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;