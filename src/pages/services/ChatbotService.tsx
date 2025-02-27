import React, { useEffect, useState } from 'react';
import { 
  MessageSquare, Zap, Clock, TrendingUp, Users, ArrowRight, 
  Check, X, Calendar, ChevronDown, ChevronUp, BarChart, 
  Shield, Headphones, Target, DollarSign, Award, Sparkles,
  Mail, Phone
} from 'lucide-react';
import ChatBackground from '../../components/ChatBackground';
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

const ChatbotService: React.FC = () => {
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
      <ChatBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section with Spline Animation */}
        <section className="relative min-h-screen flex items-center">
          {/* Spline Background - Full screen with blur effect */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
            <spline-viewer url="https://prod.spline.design/GxCQndn3JyyokuH5/scene.splinecode"></spline-viewer>
          </div>

          {/* Content */}
          <div className="relative z-20 w-full pt-32 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-green-500 mb-6 reveal">
                <MessageSquare className="w-6 h-6" />
                <span className="font-aquire tracking-wider">NEXT-GEN CHATBOT SOLUTION</span>
              </div>
              <div className="mb-2 reveal">
                <h1 className="text-5xl md:text-7xl font-aquire text-white">
                  You're Losing Customers.
                </h1>
              </div>
              <div className="mb-6 reveal">
                <h1 className="text-5xl md:text-7xl font-aquire text-green-500">
                  Automation Stops the Bleeding.
                </h1>
              </div>
              <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto reveal">
                Capture, convert, and retain customers automatically—whilst you focus on growing and dominating the market.
              </p>
              <div className="mt-12 reveal">
                <a 
                  href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                  target="_blank"
                  className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center btn-glow"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Plug automation into your business now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <p className="text-green-500 mt-4 font-medium reveal">
                ⚡ FAST ACTION BONUS: Next 7 Clients Get 7-Day FREE Trial
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
                Every second without a chatbot costs you money, leads, and growth opportunities
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
                    support coverage needed to stay competitive
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">45%</h3>
                  <p className="text-gray-300 mt-2">
                    increase in conversion rates with chatbot
                  </p>
                </div>
              </div>
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl font-aquire mb-4">
                  Every Second Without Automation = Lost Customers.
                </h2>
                <p className="text-gray-300">
                  In today's instant-response world, hesitation kills sales. Customers won't wait—they'll leave.
                </p>
                <p className="text-gray-300">
                  Chatbots engage, capture, and close 24/7. No delays. No lost leads. No excuses.
                </p>
                <p className="text-green-500 font-bold">
                  Fix it. Activate automation now.
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
                Deity_AI's Chatbot Agent doesn't just respond – it converts. Using advanced technology, 
                it thinks, learns, and evolves to maximize every interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Feature
                  title="24/7 Lead Generation"
                  description="Never miss another opportunity. Our system engages prospects, qualifies leads, and books meetings while you sleep."
                />
                <Feature
                  title="Instant Response Time"
                  description="2-second average response time ensures no prospect ever feels ignored or moves to a competitor."
                />
                <Feature
                  title="Multi-Language Support"
                  description="Break language barriers with support for 100+ languages, expanding your global reach instantly."
                />
              </div>
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Feature
                  title="Smart Lead Qualification"
                  description="Automatically scores leads and routes high-value prospects to your sales team."
                />
                <Feature
                  title="Seamless Integration"
                  description="Works with your existing CRM and tools. No complex setup or technical expertise required."
                />
                <Feature
                  title="Performance Analytics"
                  description="Real-time insights into conversation quality, conversion rates, and customer satisfaction."
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

        {/* How It Works Section - NEW */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                How It <span className="text-green-500">Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A simple, powerful process that transforms your customer interactions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">1</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Instant Engagement</h3>
                <p className="text-gray-300">
                  Chatbot greets visitors within 2 seconds, creating immediate engagement and preventing bounce.
                </p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">2</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Smart Qualification</h3>
                <p className="text-gray-300">
                  Intelligent conversation flow qualifies leads and collects contact information automatically.
                </p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">3</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Conversion & Handoff</h3>
                <p className="text-gray-300">
                  Books meetings, answers questions, and seamlessly hands off to your team when needed.
                </p>
              </div>
            </div>
            
            <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <BarChart className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">40%</h3>
                  <p className="text-gray-300">Increase in qualified leads</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">90%</h3>
                  <p className="text-gray-300">Reduction in response time</p>
                </div>
                <div className="text-center">
                  <Headphones className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">24/7</h3>
                  <p className="text-gray-300">Customer support coverage</p>
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
                See the stark difference between businesses with and without chatbot automation
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
                    title="Response Time"
                    withAI="2 seconds"
                    withoutAI="30+ minutes"
                  />
                  <ComparisonItem
                    title="Operating Hours"
                    withAI="24/7/365"
                    withoutAI="Limited hours"
                  />
                  <ComparisonItem
                    title="Lead Response Rate"
                    withAI="100% of inquiries"
                    withoutAI="62% average"
                  />
                  <ComparisonItem
                    title="Cost per Interaction"
                    withAI="$0.05"
                    withoutAI="$12+"
                  />
                  <ComparisonItem
                    title="Scalability"
                    withAI="Unlimited"
                    withoutAI="Limited by staff"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - NEW */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Success <span className="text-green-500">Stories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients are saying about their chatbot experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <Testimonial 
                quote="Our lead conversion rate increased by 42% in the first month. The chatbot captures information we were missing before."
                name="Sarah Johnson"
                role="Marketing Director, TechCorp"
              />
              <Testimonial 
                quote="The 24/7 coverage has been a game-changer for our global business. We're now serving customers across all time zones."
                name="Michael Chen"
                role="CEO, GlobalTech Solutions"
              />
              <Testimonial 
                quote="Setup was incredibly easy and the ROI was immediate. Our support team now focuses on complex issues while the chatbot handles the rest."
                name="Emma Williams"
                role="Customer Success Manager, InnovateNow"
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

        {/* Pricing Section - NEW */}
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
                price="£1199"
                description="Perfect for small businesses just getting started with automation"
                features={[
                  "Chatbot for your website",
                  "Basic Design",
                  "Basic lead qualification",
                  "CRM integration",
                  "Email notifications",
                  "Business hours support",
                  "Up to 500 conversations/month"
                ]}
              />
              
              <PricingTier 
                name="Maintainer"
                price="£1999"
                description="Ideal for growing businesses ready to scale their customer interactions"
                features={[
                  "Build & Maintain Chatbot",
                  "Improved Design",
                  "Advanced lead qualification",
                  "Custom integration",
                  "Email notifications",
                  "24/7 priority support",
                  "Up to 2,000 conversations/month"
                ]}
                isPopular={true}
              />
              
              <PricingTier 
                name="Improver"
                price="£2999"
                description="For established businesses requiring comprehensive automation solutions"
                features={[
                  "Build, Maintain & Improve Chatbot",
                  "Advanced Design",
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
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Our Solutions Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section - NEW */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Frequently Asked <span className="text-green-500">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our chatbot solution
              </p>
            </div>
            
            <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 mb-16 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <div className="space-y-4">
                <FAQ 
                  question="How long does it take to set up the chatbot?"
                  answer="Our implementation process typically takes 3-5 business days from signing up to going live. This includes customization, training, and integration with your existing systems."
                />
                <FAQ 
                  question="Will the chatbot sound robotic or natural?"
                  answer="Our chatbots are designed to sound completely natural and conversational. We customize the tone and language to match your brand voice, making interactions feel authentic and engaging."
                />
                <FAQ 
                  question="Can I customize what the chatbot says?"
                  answer="Absolutely! You have full control over the chatbot's messaging, responses, and conversation flows. We'll work with you to ensure it represents your brand perfectly."
                />
                <FAQ 
                  question="How does the chatbot integrate with my CRM?"
                  answer="We offer seamless integration with popular CRMs including Salesforce, HubSpot, Zoho, and more. All lead information captured by the chatbot is automatically synced to your CRM."
                />
                <FAQ 
                  question="What happens when the chatbot can't answer a question?"
                  answer="When the chatbot encounters a question it can't answer, it smoothly transfers the conversation to a human agent. You can set up rules for when and how these handoffs occur."
                />
                <FAQ 
                  question="Is there a limit to how many conversations the chatbot can handle?"
                  answer="No, our chatbots can handle unlimited concurrent conversations, ensuring you never miss an opportunity regardless of traffic volume."
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

        {/* Awards & Recognition Section - NEW */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Awards & <span className="text-green-500">Recognition</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry recognition for our innovative chatbot solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Award className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Best Automation Solution</h3>
                <p className="text-gray-400 text-sm mb-4">SaaS Awards 2024</p>
                <p className="text-gray-300">Recognized for exceptional innovation in customer service automation</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Sparkles className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Top 10 AI Solutions</h3>
                <p className="text-gray-400 text-sm mb-4">Tech Innovators 2024</p>
                <p className="text-gray-300">Featured among the most impactful business automation tools</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Target className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Customer Success Award</h3>
                <p className="text-gray-400 text-sm mb-4">Business Excellence 2024</p>
                <p className="text-gray-300">Awarded for delivering exceptional ROI for clients</p>
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
                Ready to <span className="text-green-500">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your free strategy call now and discover how our chatbot solution can help you:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Automate 80% of your customer support instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Custom strategy tailored to your business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Exclusive 7-day FREE trial activation</span>
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

export default ChatbotService;