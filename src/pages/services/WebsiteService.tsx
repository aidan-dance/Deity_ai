import React, { useEffect, useState } from 'react';
import { 
  Globe, Zap, Clock, TrendingUp, Users, ArrowRight, 
  Check, X, Calendar, ChevronDown, ChevronUp, BarChart, 
  Shield, Headphones, Target, DollarSign, Award, Sparkles,
  Mail, Phone, Smartphone, Laptop, Code, Search, Rocket, Lock
} from 'lucide-react';
import WebsiteBackground from '../../components/WebsiteBackground';
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

const WebsiteService: React.FC = () => {
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
      <WebsiteBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section with Spline Animation */}
        <section className="relative min-h-screen flex items-center">
          {/* Spline Background - Full screen with blur effect */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
            <spline-viewer url="https://prod.spline.design/xxO4vlOoUCjgCL9K/scene.splinecode"></spline-viewer>
          </div>

          {/* Content */}
          <div className="relative z-20 w-full pt-32 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-green-500 mb-6 reveal">
                <Globe className="w-6 h-6" />
                <span className="font-aquire tracking-wider">WEBSITE AUTOMATION REVOLUTION</span>
              </div>
              <div className="mb-2 reveal">
                <h1 className="text-5xl md:text-7xl font-aquire text-white">
                  Your Website Is Losing You Money
                </h1>
              </div>
              <div className="mb-6 reveal">
                <h1 className="text-5xl md:text-7xl font-aquire text-green-500">
                  While Your Competitors Convert
                </h1>
              </div>
              <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto reveal">
                Traditional websites are static and lifeless. AI-powered websites adapt, optimize, and convert 
                in real-time, creating an unfair advantage for businesses that act now.
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
                Limited Time: Get 7-Day FREE Trial When You Book Today
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
                Your website is your most valuable digital asset, but it's failing to convert visitors into customers
              </p>
            </div>
            
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 mb-16 reveal">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">67%</h3>
                  <p className="text-gray-300 mt-2">
                    of visitors leave websites that aren't optimized
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">3.5x</h3>
                  <p className="text-gray-300 mt-2">
                    higher conversion rates with AI optimization
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">45%</h3>
                  <p className="text-gray-300 mt-2">
                    of businesses lose leads due to poor website performance
                  </p>
                </div>
              </div>
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl font-aquire mb-4">
                  Is your static website costing you customers?
                </h2>
                <p className="text-gray-300">
                  In today's competitive digital landscape, a standard website isn't enough. 
                  Visitors expect personalized experiences, lightning-fast load times, and 
                  intuitive navigation. Traditional websites simply can't keep up.
                </p>
                <p className="text-green-500 font-bold">
                  The solution? An AI-powered website that adapts and converts in real-time.
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
                Introducing Your New <span className="text-green-500">Conversion Machine</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deity_AI's Website Service doesn't just build websites – it creates intelligent digital 
                experiences that adapt, learn, and convert visitors into customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Feature
                  title="AI-Driven Design"
                  description="Intelligent layouts that adapt to visitor behavior and preferences for maximum engagement."
                />
                <Feature
                  title="Self-Optimizing Pages"
                  description="Pages that automatically test and improve themselves based on real user interactions."
                />
                <Feature
                  title="Conversion Optimization"
                  description="Smart CTAs and content that adjusts in real-time to increase conversion rates."
                />
              </div>
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Feature
                  title="Lightning-Fast Performance"
                  description="Optimized code and assets that load in milliseconds, reducing bounce rates."
                />
                <Feature
                  title="SEO Automation"
                  description="Continuous SEO improvements that keep you ranking above competitors."
                />
                <Feature
                  title="Analytics & Insights"
                  description="Real-time data on visitor behavior with actionable recommendations."
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
                A simple, powerful process that transforms your online presence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">1</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Intelligent Design</h3>
                <p className="text-gray-300">
                  AI analyzes your brand, industry, and target audience to create a conversion-focused website design.
                </p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">2</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Continuous Optimization</h3>
                <p className="text-gray-300">
                  Website automatically tests different elements and adapts based on real user behavior.
                </p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">3</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Growth & Scaling</h3>
                <p className="text-gray-300">
                  As your business grows, the website evolves with you, continuously improving conversion rates.
                </p>
              </div>
            </div>
            
            <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <BarChart className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">67%</h3>
                  <p className="text-gray-300">Increase in conversion rates</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">45%</h3>
                  <p className="text-gray-300">Reduction in bounce rates</p>
                </div>
                <div className="text-center">
                  <Headphones className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">24/7</h3>
                  <p className="text-gray-300">Continuous optimization</p>
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
                See the stark difference between businesses with and without AI-powered websites
              </p>
            </div>
            
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <h2 className="text-3xl font-aquire text-center mb-12">
                With vs Without <span className="text-green-500">AI Website</span>
              </h2>
              <div className="overflow-x-auto">
                <div className="min-w-[768px]">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-lg font-aquire">Metric</div>
                    <div className="text-lg font-aquire text-green-500">With Deity_AI</div>
                    <div className="text-lg font-aquire text-red-500">Traditional Website</div>
                  </div>
                  
                  <ComparisonItem
                    title="Conversion Rate"
                    withAI="8-15% average"
                    withoutAI="2-3% average"
                  />
                  <ComparisonItem
                    title="Load Speed"
                    withAI="Under 1 second"
                    withoutAI="3-5 seconds"
                  />
                  <ComparisonItem
                    title="Personalization"
                    withAI="Dynamic & real-time"
                    withoutAI="Static or basic"
                  />
                  <ComparisonItem
                    title="SEO Performance"
                    withAI="Auto-optimizing"
                    withoutAI="Manual updates"
                  />
                  <ComparisonItem
                    title="Optimization"
                    withAI="Continuous & automated"
                    withoutAI="Periodic & manual"
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
                See what our clients are saying about their AI-powered websites
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <Testimonial 
                quote="Our conversion rate increased from 2.3% to 9.7% in just 30 days after switching to Deity_AI's website service. The ROI has been incredible."
                name="Mark Johnson"
                role="CEO, E-Commerce Plus"
              />
              <Testimonial 
                quote="The self-optimizing pages are like having a conversion rate expert working 24/7. Our lead generation has increased by 78% since implementation."
                name="Lisa Chen"
                role="Marketing Director, TechGrowth"
              />
              <Testimonial 
                quote="We were skeptical at first, but the results speak for themselves. Our bounce rate dropped by 45% and our average order value increased by 28%."
                name="James Wilson"
                role="Founder, Retail Solutions"
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
                price="£1,499"
                description="Perfect for small businesses just getting started with AI-powered websites"
                features={[
                  "Build Website",
                  "5-page website",
                  "Basic AI optimization",
                  "Mobile responsive design",
                  "Basic SEO setup",
                  "Business hours support",
                  "Monthly performance reports"
                ]}
              />
              
              <PricingTier 
                name="Maintainer"
                price="£2,499"
                description="Ideal for growing businesses ready to scale their online presence"
                features={[
                  "Build & Maintain Website",
                  "10-page website",
                  "Advanced AI optimization",
                  "Mobile-first design",
                  "Continuous SEO optimization",
                  "24/7 priority support",
                  "Weekly performance reports",
                  "Conversion tracking"
                ]}
                isPopular={true}
              />
              
              <PricingTier 
                name="Improver"
                price="£3,999"
                description="For established businesses requiring comprehensive website solutions"
                features={[
                  "Build, Maintain & Improve Website",
                  "Unlimited pages",
                  "Advanced AI optimization",
                  "Custom design & functionality",
                  "Advanced SEO automation",
                  "Dedicated account manager",
                  "Daily performance reports",
                  "Advanced analytics dashboard",
                  "Conversion rate optimization"
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
                <Globe className="w-5 h-5 mr-2" />
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
                Everything you need to know about our website service
              </p>
            </div>
            
            <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 mb-16 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <div className="space-y-4">
                <FAQ 
                  question="How is an AI-powered website different from a regular website?"
                  answer="Traditional websites are static and require manual updates. Our AI-powered websites continuously learn from visitor behavior and automatically optimize design, content, and functionality to maximize conversions. They essentially improve themselves over time without human intervention."
                />
                <FAQ 
                  question="How long does it take to build an AI-powered website?"
                  answer="Our implementation process typically takes 2-4 weeks from signing up to going live. This includes design, development, AI training, and initial optimization. However, unlike traditional websites, ours continue to improve automatically after launch."
                />
                <FAQ 
                  question="Will I be able to make changes to my website?"
                  answer="Absolutely! While the AI handles optimization, you'll have full access to a user-friendly dashboard where you can update content, add pages, and make design changes. Our team is also available to assist with more complex modifications."
                />
                <FAQ 
                  question="How does the self-optimization actually work?"
                  answer="Our AI continuously runs thousands of micro-tests on elements like layouts, colors, button placement, and content. It analyzes how visitors interact with these variations and automatically implements the highest-performing versions. This process happens 24/7, ensuring your website constantly improves."
                />
                <FAQ 
                  question="Will my website work on mobile devices?"
                  answer="Yes! All our websites are built with a mobile-first approach, ensuring perfect functionality across all devices. The AI optimization also works specifically for mobile users, creating different experiences for desktop and mobile when appropriate."
                />
                <FAQ 
                  question="What about SEO? Will my website rank well in search engines?"
                  answer="SEO is a core component of our AI system. The website continuously optimizes for search engines by adjusting meta data, content structure, schema markup, and other SEO factors based on current search engine algorithms and your specific industry."
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

        {/* Features Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Advanced <span className="text-green-500">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the powerful capabilities that set our website service apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Smartphone className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Adaptive Design</h3>
                <p className="text-gray-300">Layouts that automatically adjust based on device, screen size, and user preferences.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Laptop className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Personalized Experience</h3>
                <p className="text-gray-300">Content and offers that adapt to each visitor's behavior, preferences, and history.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Code className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Clean Code Architecture</h3>
                <p className="text-gray-300">Optimized, lightweight code that loads lightning-fast and ranks higher in search engines.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Search className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">SEO Automation</h3>
                <p className="text-gray-300">Continuous optimization for search engines with automatic updates based on algorithm changes.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Rocket className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Performance Optimization</h3>
                <p className="text-gray-300">Automatic image compression, code minification, and caching for blazing-fast load times.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Lock className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Security Hardening</h3>
                <p className="text-gray-300">Advanced security measures that automatically update to protect against the latest threats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Awards & <span className="text-green-500">Recognition</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry recognition for our innovative website solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Award className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Best Web Technology</h3>
                <p className="text-gray-400 text-sm mb-4">Digital Innovation Awards 2024</p>
                <p className="text-gray-300">Recognized for exceptional innovation in website technology</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Sparkles className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Top 10 AI Web Solutions</h3>
                <p className="text-gray-400 text-sm mb-4">Tech Innovators 2024</p>
                <p className="text-gray-300">Featured among the most impactful AI-powered web technologies</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Target className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Conversion Excellence Award</h3>
                <p className="text-gray-400 text-sm mb-4">Web Business Summit 2024</p>
                <p className="text-gray-300">Awarded for delivering exceptional conversion results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <h2 className="text-4xl font-aquire mb-6">
                Ready for a Website That <span className="text-green-500">Converts</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your free strategy call now and discover how our website service can help you:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Increase conversion rates by up to 67%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Reduce bounce rates by up to 45%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Create a website that continuously improves itself</span>
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
                  Limited Time: 7-Day FREE Trial + Priority Setup
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

export default WebsiteService;