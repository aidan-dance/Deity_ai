import React from 'react';
import { MessageSquare, Phone, Share2, Mail, ArrowRight, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import RetroText from './RetroText';

const Expertise: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4">
            <RetroText
              text="UNLEASH The Power Of"
              className="text-3xl sm:text-4xl md:text-6xl font-bold"
            />
          </div>
          <div>
            <RetroText
              text="Next-Level Automation"
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Chatbot Card */}
          <div className="hover-card p-6 sm:p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <div className="h-12 mb-6 sm:mb-8">
              <MessageSquare className="card-icon w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-aquire mb-6 sm:mb-8">Chatbot Agent</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="text-gray-300">• 24/7 Customer Support</li>
              <li className="text-gray-300">• Natural Language Processing</li>
              <li className="text-gray-300">• Lead Qualification</li>
              <li className="text-gray-300">• Instant Response System</li>
            </ul>
            <div className="mt-6 sm:mt-8">
              <p className="text-sm text-gray-400 mb-3">Capabilities:</p>
              <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Multi-language
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Smart Routing
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Analytics
                </span>
              </div>
              <Link 
                to="/services/ai-chatbot" 
                className="w-full group bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-normal text-center">CLAIM YOUR 24/7 SALES MACHINE</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>
          </div>

          {/* Call Center Card */}
          <div className="hover-card p-6 sm:p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <div className="h-12 mb-6 sm:mb-8">
              <Phone className="card-icon w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-aquire mb-6 sm:mb-8">Call Center</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="text-gray-300">• Voice Recognition</li>
              <li className="text-gray-300">• Sentiment Analysis</li>
              <li className="text-gray-300">• Call Transcription</li>
              <li className="text-gray-300">• Smart Call Routing</li>
            </ul>
            <div className="mt-6 sm:mt-8">
              <p className="text-sm text-gray-400 mb-3">Features:</p>
              <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Auto-Scheduling
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Call Analytics
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  CRM Integration
                </span>
              </div>
              <Link 
                to="/services/ai-voice-caller"
                className="w-full group bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-normal text-center">10X YOUR CALL CONVERSIONS</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>
          </div>

          {/* Social Media Automation Card */}
          <div className="hover-card p-6 sm:p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <div className="h-12 mb-6 sm:mb-8">
              <Share2 className="card-icon w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-aquire mb-6 sm:mb-8">Social Media Automation</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="text-gray-300">• Automated Content Generation</li>
              <li className="text-gray-300">• Smart Engagement Responses</li>
              <li className="text-gray-300">• Trend Analysis & Hashtags</li>
              <li className="text-gray-300">• Performance Analytics</li>
            </ul>
            <div className="mt-6 sm:mt-8">
              <p className="text-sm text-gray-400 mb-3">Capabilities:</p>
              <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  24/7 Posting
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Smart Responses
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Brand Voice
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Analytics
                </span>
              </div>
              <Link 
                to="/services/social-media-ai"
                className="w-full group bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-normal text-center">DOMINATE SOCIAL MEDIA NOW</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>
          </div>

          {/* Email Assistant Card */}
          <div className="hover-card p-6 sm:p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <div className="h-12 mb-6 sm:mb-8">
              <Mail className="card-icon w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-aquire mb-6 sm:mb-8">Email Assistant</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="text-gray-300">• Smart Campaign Management</li>
              <li className="text-gray-300">• Personalized Content</li>
              <li className="text-gray-300">• A/B Testing Automation</li>
              <li className="text-gray-300">• Engagement Optimization</li>
            </ul>
            <div className="mt-6 sm:mt-8">
              <p className="text-sm text-gray-400 mb-3">Features:</p>
              <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Drip Campaigns
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Smart Segmentation
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Analytics
                </span>
              </div>
              <Link 
                to="/services/email-ai"
                className="w-full group bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-normal text-center">EXPLODE YOUR EMAIL ROI</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>
          </div>

          {/* Website Service Card */}
          <div className="hover-card p-6 sm:p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
            <div className="h-12 mb-6 sm:mb-8">
              <Globe className="card-icon w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-aquire mb-6 sm:mb-8">Website Service</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="text-gray-300">• AI-Driven Design</li>
              <li className="text-gray-300">• Conversion Optimization</li>
              <li className="text-gray-300">• SEO Automation</li>
              <li className="text-gray-300">• Performance Analytics</li>
            </ul>
            <div className="mt-6 sm:mt-8">
              <p className="text-sm text-gray-400 mb-3">Features:</p>
              <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Lightning Fast
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Mobile-First
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                  Self-Optimizing
                </span>
              </div>
              <Link 
                to="/services/website"
                className="w-full group bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-normal text-center">CONVERT MORE VISITORS NOW</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
            target="_blank"
            className="group bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center"
          >
            UNLOCK ALL FEATURES NOW
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Expertise;