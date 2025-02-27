import React, { useEffect, useState } from 'react';
import { 
  Phone, Zap, Clock, TrendingUp, Users, ArrowRight, 
  Check, X, Calendar, ChevronDown, ChevronUp, BarChart, 
  Shield, Headphones, Target, DollarSign, Award, Sparkles,
  Mail
} from 'lucide-react';
import VoiceBackground from '../../components/VoiceBackground';
import CustomCursor from '../../components/CustomCursor';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Feature: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1">
      <Check className="w-5 h-5 text-green-500" />
    </div>
    <div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const ComparisonItem: React.FC<{ title: string; withAI: string; withoutAI: string }> = ({ title, withAI, withoutAI }) => (
  <div className="grid grid-cols-3 gap-4 py-4 border-t border-green-500/20">
    <div className="font-medium">{title}</div>
    <div className="flex items-center text-green-500">
      <Check className="w-5 h-5 mr-2" />
      {withAI}
    </div>
    <div className="flex items-center text-red-500">
      <X className="w-5 h-5 mr-2" />
      {withoutAI}
    </div>
  </div>
);

const Testimonial: React.FC<{ quote: string; name: string; role: string; image?: string }> = ({ 
  quote, name, role, image 
}) => (
  <div className="hover-card p-6 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-xl font-bold text-green-500">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-gray-300 mb-4 italic">"{quote}"</p>
        <p className="font-aquire text-white">{name}</p>
        <p className="text-green-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const FAQ: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-green-500/20 last:border-b-0">
      <button 
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-aquire text-lg">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-green-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const PricingTier: React.FC<{
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}> = ({ name, price, description, features, isPopular }) => (
  <div className={`hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border ${isPopular ? 'border-green-500' : 'border-green-500/20'} flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] relative`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">
        MOST POPULAR
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-2xl font-aquire mb-2">{name}</h3>
      <div className="flex items-end gap-1 mb-2">
        <span className="text-4xl font-aquire text-green-500">{price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
    <div className="flex-1">
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <a 
      href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
      target="_blank"
      className={`w-full group ${isPopular ? 'bg-green-500 text-black hover:bg-green-600' : 'bg-red-600 text-white hover:bg-red-700'} transition-colors flex items-center justify-center px-4 py-3 rounded-lg font-bold text-base`}
    >
      <Zap className="w-5 h-5 mr-2" />
      Get Started
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

const VoiceCallerService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add Spline script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.71/build/spline-viewer.js';
    document.body.appendChild(script);

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
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <VoiceBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section with Spline Animation */}
        <section className="relative min-h-screen flex items-center">
          {/* Spline Background - Full screen with blur effect */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
            <spline-viewer url="https://prod.spline.design/OLklRAE0OKmA2t3d/scene.splinecode"></spline-viewer>
          </div>

          {/* Content */}
          <div className="relative z-20 w-full pt-32 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-green-500 mb-6 reveal">
                <Phone className="w-6 h-6" />
                <span className="font-aquire tracking-wider">VOICE AUTOMATION BREAKTHROUGH</span>
              </div>
              <div className="mb-2 reveal">
                <h1 className="text-5xl md:text-7xl font-aquire text-white">
                  Meet Your New Sales Team:
                </h1>
              </div>
              <div className="mb-6 reveal">
                <h1 className="text-5xl md:text-7xl font-aquire text-green-500">
                  Never Sleeps, Never Quits
                </h1>
              </div>
              <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto reveal">
                While human sales teams sleep, automated businesses are closing deals 24/7. 
                Don't let another lead go cold - unleash the power of Voice Automation today.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center reveal">
                <a 
                  href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                  target="_blank" 
                  className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center btn-glow"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Strategy Call Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="group bg-black/50 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center">
                  Watch 2-Minute Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-green-500 mt-4 font-medium reveal">
                Limited Time: Get 30 Minutes FREE When You Book Today
              </p>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                The <span className="text-green-500">Problem</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every minute of delay in reaching leads decreases your chances of conversion
              </p>
            </div>
            
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 mb-16 reveal">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">67%</h3>
                  <p className="text-gray-300 mt-2">
                    of leads are lost due to slow follow-up times
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">24/7</h3>
                  <p className="text-gray-300 mt-2">
                    outbound calling coverage needed to stay competitive
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">45%</h3>
                  <p className="text-gray-300 mt-2">
                    increase in contact rates with voice technology
                  </p>
                </div>
              </div>
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl font-aquire mb-4">
                  Can you afford to let leads go cold while your team sleeps?
                </h2>
                <p className="text-gray-300">
                  In today's fast-paced market, timing is everything. Every minute of delay in 
                  reaching out to leads decreases your chances of conversion. Traditional call 
                  centers can't keep up with the 24/7 demand.
                </p>
                <p className="text-green-500 font-bold">
                  The solution? Automated voice calling that never sleeps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Introducing Your New <span className="text-green-500">24/7 Sales Machine</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deity_AI's Voice Caller doesn't just make calls – it converts. Using advanced technology, 
                it engages prospects with natural conversations that drive results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Feature
                  title="24/7 Outbound Calling"
                  description="Never miss another opportunity. Our system makes calls, qualifies leads, and books meetings around the clock."
                />
                <Feature
                  title="Natural Voice Interaction"
                  description="Human-like conversations powered by advanced technology that adapts to each prospect's responses."
                />
                <Feature
                  title="Multi-Language Support"
                  description="Break language barriers with support for 100+ languages, expanding your global reach instantly."
                />
              </div>
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Feature
                  title="Smart Lead Prioritization"
                  description="Automatically prioritizes and routes high-value prospects to your sales team."
                />
                <Feature
                  title="Seamless Integration"
                  description="Works with your existing CRM and tools. No complex setup or technical expertise required."
                />
                <Feature
                  title="Performance Analytics"
                  description="Real-time insights into call quality, conversion rates, and campaign performance."
                />
              </div>
            </div>
            
            <div className="text-center reveal">
              <a 
                href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                target="_blank"
                className="group bg-green-500 text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-600 transition-colors inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                See It In Action
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                How It <span className="text-green-500">Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A simple, powerful process that transforms your outbound calling
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">1</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Intelligent Dialing</h3>
                <p className="text-gray-300">
                  System automatically calls leads at optimal times, ensuring maximum contact rates and efficiency.
                </p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">2</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Natural Conversation</h3>
                <p className="text-gray-300">
                  Human-like voice engages prospects in natural conversation, qualifying leads and addressing objections.
                </p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">3</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Conversion & Handoff</h3>
                <p className="text-gray-300">
                  Books appointments, captures information, and seamlessly transfers hot leads to your sales team.
                </p>
              </div>
            </div>
            
            <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <BarChart className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">35%</h3>
                  <p className="text-gray-300">Increase in contact rates</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">85%</h3>
                  <p className="text-gray-300">Reduction in cost per call</p>
                </div>
                <div className="text-center">
                  <Headphones className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">24/7</h3>
                  <p className="text-gray-300">Outbound calling coverage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                The <span className="text-green-500">Brutal Truth</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the stark difference between businesses with and without voice automation
              </p>
            </div>
            
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <h2 className="text-3xl font-aquire text-center mb-12">
                With vs Without <span className="text-green-500">Automation</span>
              </h2>
              <div className="overflow-x-auto">
                <div className="min-w-[768px]">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-lg font-aquire">Metric</div>
                    <div className="text-lg font-aquire text-green-500">With Deity_AI</div>
                    <div className="text-lg font-aquire text-red-500">Without Automation</div>
                  </div>
                  
                  <ComparisonItem
                    title="Call Capacity"
                    withAI="Unlimited"
                    withoutAI="Limited by staff"
                  />
                  <ComparisonItem
                    title="Operating Hours"
                    withAI="24/7/365"
                    withoutAI="Limited hours"
                  />
                  <ComparisonItem
                    title="Response Rate"
                    withAI="100% of leads"
                    withoutAI="45% average"
                  />
                  <ComparisonItem
                    title="Cost per Call"
                    withAI="$0.05"
                    withoutAI="$15+"
                  />
                  <ComparisonItem
                    title="Language Support"
                    withAI="100+ languages"
                    withoutAI="Limited languages"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Success <span className="text-green-500">Stories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients are saying about their voice caller experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <Testimonial 
                quote="We've seen a 42% increase in appointments booked since implementing the voice caller. It's like having a sales team that works 24/7."
                name="David Thompson"
                role="Sales Director, GrowthTech"
              />
              <Testimonial 
                quote="The natural-sounding voice is incredible. Our prospects can't tell they're talking to an automated system until we tell them."
                name="Jennifer Lee"
                role="CMO, InnovateNow"
              />
              <Testimonial 
                quote="We've reduced our cost per acquisition by 67% while increasing our contact rate. The ROI has been phenomenal."
                name="Robert Chen"
                role="CEO, MarketEdge"
              />
            </div>
            
            <div className="text-center reveal">
              <a 
                href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                target="_blank"
                className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Join Our Success Stories
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Simple, Transparent <span className="text-green-500">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <PricingTier 
                name="Builder"
                price="£999"
                description="Perfect for small businesses just getting started with voice automation"
                features={[
                  "Build Voice Caller",
                  "Up to 500 minutes/month",
                  "Basic lead qualification",
                  "CRM integration",
                  "Email notifications",
                  "Business hours support",
                  "Single voice profile"
                ]}
              />
              
              <PricingTier 
                name="Maintainer"
                price="£1,599"
                description="Ideal for growing businesses ready to scale their outbound calling"
                features={[
                  "Build & Maintain Caller",
                  "Up to 2,000 minutes/month",
                  "Emotion Detection",
                  "Advanced lead qualification",
                  "Custom integration",
                  "Email notifications",
                  "24/7 priority support",
                ]}
                isPopular={true}
              />
              
              <PricingTier 
                name="Improver"
                price="£2,999"
                description="For established businesses requiring comprehensive voice solutions"
                features={[
                  "Build, Maintain & Improve Caller",
                  "Unlimited minutes",
                  "Emotion Detection",
                  "Advanced lead qualification",
                  "Advanced analytics ",
                  "Custom integrations",
                  "Dedicated account manager",
                  "Update-to-date Email notifications",
                  "Unlimited conversations",
                  "24/7 priority support",
                  "Multi-language support"
                ]}
              />
            </div>
            
            <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <h3 className="text-2xl font-aquire mb-4">
                Need a <span className="text-green-500">Custom Solution?</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Contact us for a tailored package designed specifically for your unique business requirements
              </p>
              <a 
                href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 bg-black/50 text-white font-medium hover:bg-black/70 transition-colors border border-green-500/50 rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Our Solutions Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Frequently Asked <span className="text-green-500">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our voice caller solution
              </p>
            </div>
            
            <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 mb-16 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <div className="space-y-4">
                <FAQ 
                  question="How natural does the voice sound?"
                  answer="Our voice technology uses advanced natural language processing to create incredibly human-like conversations. Most people can't tell they're speaking with an automated system until we tell them."
                />
                <FAQ 
                  question="How quickly can we get started?"
                  answer="Our implementation process typically takes 5-7 business days from signing up to making your first calls. This includes voice training, script development, and integration with your existing systems."
                />
                <FAQ 
                  question="Can I customize what the voice caller says?"
                  answer="Absolutely! You have full control over the script, responses, and conversation flows. We'll work with you to ensure it represents your brand perfectly and addresses common questions and objections."
                />
                <FAQ 
                  question="How does the voice caller integrate with my CRM?"
                  answer="We offer seamless integration with popular CRMs including Salesforce, HubSpot, Zoho, and more. All lead information captured during calls is automatically synced to your CRM."
                />
                <FAQ 
                  question="What happens when a prospect wants to speak to a human?"
                  answer="The system can detect when a prospect requests a human agent and will smoothly transfer the call to your team. You can set up rules for when and how these handoffs occur."
                />
                <FAQ 
                  question="Is there a limit to how many calls the system can make?"
                  answer="No, our system can scale to handle virtually unlimited concurrent calls, ensuring you never miss an opportunity regardless of volume."
                />
              </div>
            </div>
            
            <div className="text-center reveal">
              <p className="text-xl text-gray-300 mb-6">
                Still have questions? We're here to help!
              </p>
              <a 
                href="mailto:support@deity-ai.co.uk"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-black font-medium hover:bg-green-600 transition-colors rounded-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Our Support Team
              </a>
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Awards & <span className="text-green-500">Recognition</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry recognition for our innovative voice solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Award className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Best Voice Technology</h3>
                <p className="text-gray-400 text-sm mb-4">Voice Tech Awards 2024</p>
                <p className="text-gray-300">Recognized for exceptional innovation in voice automation</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Sparkles className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Sales Innovation Award</h3>
                <p className="text-gray-400 text-sm mb-4">Sales Tech Summit 2024</p>
                <p className="text-gray-300">Featured among the most impactful sales automation tools</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Target className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">ROI Excellence Award</h3>
                <p className="text-gray-400 text-sm mb-4">Business Technology 2024</p>
                <p className="text-gray-300">Awarded for delivering exceptional return on investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <h2 className="text-4xl font-aquire mb-6">
                Ready to <span className="text-green-500">Transform</span> Your Outbound Calling?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your free strategy call now and discover how our voice caller solution can help you:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Automate 80% of your outbound calls instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Custom voice strategy tailored to your business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>First 30 minutes FREE activation</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                  target="_blank" 
                  className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center btn-glow"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+447476873592"
                  className="group bg-black/50 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-green-500 font-medium">
                  Limited Time: First 30 Minutes FREE + Priority Setup
                </p>
                <p className="text-sm text-gray-400">
                  No obligation. 100% free consultation. Spots are limited.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default VoiceCallerService;