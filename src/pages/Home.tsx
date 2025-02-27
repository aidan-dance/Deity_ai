import React, { useEffect } from 'react';
import BinaryBackground from '../components/BinaryBackground';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Zap, Check, Clock, TrendingUp, Users, MessageSquare, Phone, Mail, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    // Add animation classes to elements as they scroll into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BinaryBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="flex flex-col items-center reveal">
              <h1 className="text-4xl md:text-6xl font-aquire text-white mb-4">
                10X Your Business Growth With
              </h1>
              <div className="text-5xl md:text-7xl font-aquire text-green-500 mb-6 relative">
                <span className="relative">
                  Automation
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-500"></span>
                </span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto reveal">
              <span className="text-red-500 font-bold">WARNING:</span> This Technology Is Creating Unfair Advantages For Businesses That Act Fast. 
              Will You Be Left Behind?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 reveal">
              <Link to="/services" className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center shadow-lg shadow-red-600/20 hover:shadow-red-600/40">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/booking" className="group bg-black/50 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center">
                Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="card-icon text-green-500 text-4xl font-aquire mb-2">24/7</h3>
                <p className="text-gray-300">Intelligent Customer Support</p>
              </div>
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="card-icon text-green-500 text-4xl font-aquire mb-2">90%</h3>
                <p className="text-gray-300">Faster Response Times</p>
              </div>
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="card-icon text-green-500 text-4xl font-aquire mb-2">40%</h3>
                <p className="text-gray-300">Increase in Conversions</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 px-4 bg-black/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-5xl md:text-7xl font-aquire mb-6">
                Our Core <span className="text-green-500">Automation Services</span>
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto my-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our flagship automation solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 reveal">
              {/* Chatbot Agent Card */}
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 flex flex-col min-h-[700px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="flex-1">
                  <div className="flex flex-col items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <MessageSquare className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-aquire text-center truncate max-w-full">Chatbot Agent</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">24/7 Customer Support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Natural Language Processing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Lead Qualification</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Instant Response System</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Smart Routing</span>
                    </li>
                  </ul>
                  <div className="mb-8">
                    <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-medium">Capabilities:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Multi-language
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Intent Detection
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Sentiment Analysis
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link 
                    to="/services/ai-chatbot"
                    className="w-full group bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center px-4 py-4 rounded-lg text-white font-bold text-base h-[56px]"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    <span className="whitespace-nowrap">GET 24/7 SUPPORT</span>
                  </Link>
                  <Link to="/services/ai-chatbot" className="block text-center text-green-500 hover:text-green-400 cursor-pointer text-sm font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Voice Caller Card */}
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 flex flex-col min-h-[700px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="flex-1">
                  <div className="flex flex-col items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Phone className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-aquire text-center truncate max-w-full">Voice Assistant</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Voice Recognition</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Sentiment Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Call Transcription</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Smart Call Routing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Auto-Scheduling</span>
                    </li>
                  </ul>
                  <div className="mb-8">
                    <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-medium">Capabilities:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Voice Cloning
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Real-time Analysis
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Multi-accent
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link 
                    to="/services/ai-voice-caller"
                    className="w-full group bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center px-4 py-4 rounded-lg text-white font-bold text-base h-[56px]"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    <span className="whitespace-nowrap">DOMINATE CALLS</span>
                  </Link>
                  <Link to="/services/ai-voice-caller" className="block text-center text-green-500 hover:text-green-400 cursor-pointer text-sm font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 flex flex-col min-h-[700px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="flex-1">
                  <div className="flex flex-col items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Share2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-aquire text-center truncate max-w-full">Social Media Automation</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Content Generation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Engagement Automation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Trend Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Performance Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Multi-Platform Management</span>
                    </li>
                  </ul>
                  <div className="mb-8">
                    <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-medium">Capabilities:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        24/7 Posting
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Smart Responses
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Brand Voice
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link 
                    to="/services/social-media-ai"
                    className="w-full group bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center px-4 py-4 rounded-lg text-white font-bold text-base h-[56px]"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    <span className="whitespace-nowrap">GO VIRAL NOW</span>
                  </Link>
                  <Link to="/services/social-media-ai" className="block text-center text-green-500 hover:text-green-400 cursor-pointer text-sm font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Email Assistant Card */}
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 flex flex-col min-h-[700px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="flex-1">
                  <div className="flex flex-col items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-aquire text-center truncate max-w-full">Email Assistant</h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Smart Campaign Management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Personalized Content</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">A/B Testing Automation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Engagement Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Analytics Dashboard</span>
                    </li>
                  </ul>
                  <div className="mb-8">
                    <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-medium">Capabilities:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Smart Templates
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Auto-response
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                        Spam Detection
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link 
                    to="/services/email-ai"
                    className="w-full group bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center px-4 py-4 rounded-lg text-white font-bold text-base h-[56px]"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    <span className="whitespace-nowrap">EXPLODE YOUR EMAIL ROI</span>
                  </Link>
                  <Link to="/services/email-ai" className="block text-center text-green-500 hover:text-green-400 cursor-pointer text-sm font-medium">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center reveal">
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-all duration-300 group">
                View All Solutions
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-6">
                Why Choose <span className="text-green-500">Deity_AI</span>
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto my-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver results that speak for themselves. Our automation solutions are designed to 
                maximize efficiency, reduce costs, and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-aquire mb-4">Save Time</h3>
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

              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-aquire mb-4">Boost Efficiency</h3>
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

              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-aquire mb-4">Grow Revenue</h3>
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

        {/* Testimonials Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-6">
                Client <span className="text-green-500">Success Stories</span>
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto my-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our automation solutions are transforming businesses across industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="card-icon w-5 h-5 text-green-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Deity_AI transformed our customer service operations. The chatbot handles 80% of inquiries automatically, and our response times have improved dramatically."
                </p>
                <div>
                  <p className="font-aquire text-white">Sarah Johnson</p>
                  <p className="text-green-500">CTO, TechCorp</p>
                </div>
              </div>
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="card-icon w-5 h-5 text-green-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "The workflow automation solutions provided by Deity_AI helped us reduce processing times by 90%. Their consulting team was exceptional."
                </p>
                <div>
                  <p className="font-aquire text-white">Michael Chen</p>
                  <p className="text-green-500">Operations Director, GlobalTech</p>
                </div>
              </div>
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="card-icon w-5 h-5 text-green-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Implementing Deity_AI's predictive analytics has given us invaluable insights into customer behavior. Our conversion rates have increased by 45%."
                </p>
                <div>
                  <p className="font-aquire text-white">Emma Williams</p>
                  <p className="text-green-500">CEO, InnovateNow</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto reveal">
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <h2 className="text-4xl font-aquire mb-6">
                Ready to <span className="text-green-500">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a free consultation with our experts and discover how our automation solutions can help you achieve your business goals.
              </p>
              <a 
                href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 group shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
              >
                <Zap className="w-6 h-6 mr-3" />
                SCHEDULE YOUR FREE CONSULTATION
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

// Star component for testimonials
const Star = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Home;