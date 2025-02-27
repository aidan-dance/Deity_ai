import React, { useEffect, useState } from 'react';
import { 
  Mail, Zap, Clock, TrendingUp, Users, ArrowRight, 
  Check, X, Calendar, ChevronDown, ChevronUp, BarChart, 
  Shield, Headphones, Target, DollarSign, Award, Sparkles,
  Phone, AtSign, Send, Inbox, RefreshCw, PieChart, Layers
} from 'lucide-react';
import EmailBackground from '../../components/EmailBackground';
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

const EmailService: React.FC = () => {
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
      <EmailBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section with Spline Animation */}
        <section className="relative min-h-screen flex items-center">
          {/* Spline Background - Full screen with blur effect */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
            <spline-viewer url="https://prod.spline.design/rXdzP2UAI6ol-qDd/scene.splinecode"></spline-viewer>
          </div>

          {/* Content */}
          <div className="relative z-20 w-full pt-32 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-green-500 mb-6 reveal">
                <Mail className="w-6 h-6" />
                <span className="font-aquire tracking-wider">EMAIL AUTOMATION REVOLUTION</span>
              </div>
              <div className="mb-2 reveal">
                <h1 className="text-5xl md:text-7xl font-aquire text-white">
                  STOP Sending Dead Emails:
                </h1>
              </div>
              <div className="mb-6 reveal">
                <h1 className="text-5xl md:text-7xl font-aquire text-green-500">
                  Unleash Automation-Powered Results
                </h1>
              </div>
              <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto reveal">
                Your inbox is a goldmine of untapped revenue. While traditional emails die in spam folders, 
                automated campaigns are generating 3.5x more revenue. The choice is yours.
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
                Every email sent without automation is a missed opportunity for engagement and conversion
              </p>
            </div>
            
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 mb-16 reveal">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">78%</h3>
                  <p className="text-gray-300 mt-2">
                    of marketing emails never get opened
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">42%</h3>
                  <p className="text-gray-300 mt-2">
                    higher open rates with automated personalization
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-aquire text-green-500 mb-2">3.5x</h3>
                  <p className="text-gray-300 mt-2">
                    increase in conversion rates with optimization
                  </p>
                </div>
              </div>
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl font-aquire mb-4">
                  Is your email marketing leaving money on the table?
                </h2>
                <p className="text-gray-300">
                  In today's inbox battlefield, generic emails get ignored. Every unopened email is 
                  a missed opportunity for revenue. Traditional email marketing can't match the 
                  personalization power of automation.
                </p>
                <p className="text-green-500 font-bold">
                  The solution? AI-powered email automation that converts.
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
                Introducing Your New <span className="text-green-500">Email Revenue Machine</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deity_AI's Email Assistant doesn't just send emails – it maximizes ROI. Using advanced technology, 
                it personalizes every interaction for optimal engagement and conversion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Feature
                  title="Smart Content Generation"
                  description="Creates personalized email content that resonates with each segment of your audience."
                />
                <Feature
                  title="Automated A/B Testing"
                  description="Continuous optimization of subject lines, content, and send times for maximum impact."
                />
                <Feature
                  title="Behavioral Targeting"
                  description="Dynamic content adaptation based on recipient behavior and engagement patterns."
                />
              </div>
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Feature
                  title="Predictive Analytics"
                  description="Forecasts the best times to send and predicts campaign performance."
                />
                <Feature
                  title="Smart Segmentation"
                  description="Automatic audience segmentation based on behavior, preferences, and engagement."
                />
                <Feature
                  title="ROI Optimization"
                  description="Continuous learning and optimization to maximize revenue per email."
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
                A simple, powerful process that transforms your email marketing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">1</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Smart Content Creation</h3>
                <p className="text-gray-300">
                  AI analyzes your brand voice and generates personalized email content that resonates with each recipient.
                </p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">2</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Automated Campaigns</h3>
                <p className="text-gray-300">
                  System sends emails at optimal times, adapts to recipient behavior, and follows up automatically.
                </p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-aquire text-green-500">3</span>
                </div>
                <h3 className="text-xl font-aquire mb-4">Analytics & Optimization</h3>
                <p className="text-gray-300">
                  Continuous performance tracking and content optimization based on open rates, clicks, and conversions.
                </p>
              </div>
            </div>
            
            <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <BarChart className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">42%</h3>
                  <p className="text-gray-300">Higher open rates</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">65%</h3>
                  <p className="text-gray-300">Reduction in management time</p>
                </div>
                <div className="text-center">
                  <Headphones className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-aquire text-green-500 mb-2">3.5x</h3>
                  <p className="text-gray-300">Increase in conversion rates</p>
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
                See the stark difference between businesses with and without email automation
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
                    title="Open Rates"
                    withAI="45% average"
                    withoutAI="15% average"
                  />
                  <ComparisonItem
                    title="Click Rates"
                    withAI="12% average"
                    withoutAI="2% average"
                  />
                  <ComparisonItem
                    title="Personalization"
                    withAI="Dynamic & real-time"
                    withoutAI="Basic fields only"
                  />
                  <ComparisonItem
                    title="A/B Testing"
                    withAI="Continuous & automated"
                    withoutAI="Manual & limited"
                  />
                  <ComparisonItem
                    title="ROI Tracking"
                    withAI="Powered insights"
                    withoutAI="Basic metrics"
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
                See what our clients are saying about their email automation experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <Testimonial 
                quote="Our email open rates increased by 47% and conversions by 62% in the first month. The personalization is incredible."
                name="Rebecca Johnson"
                role="Marketing Director, E-Commerce Plus"
              />
              <Testimonial 
                quote="We've saved over 30 hours per week on email management while actually increasing our campaign frequency and results."
                name="David Chen"
                role="CMO, GrowthTech Solutions"
              />
              <Testimonial 
                quote="The automated A/B testing has been a game-changer. We're constantly improving without any manual work on our end."
                name="Emily Williams"
                role="Email Marketing Manager, RetailNow"
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
                price="£899"
                description="Perfect for small businesses just getting started with email automation"
                features={[
                  "Build Email Assistant",
                  "Up to 5,000 emails/month",
                  "Basic personalization",
                  "Simple A/B testing",
                  "Email notifications",
                  "Business hours support"
                ]}
              />
              
              <PricingTier 
                name="Maintainer"
                price="£1,499"
                description="Ideal for growing businesses ready to scale their email marketing"
                features={[
                  "Build & Maintain Email Assistant",
                  "Up to 15,000 emails/month",
                  "Advanced personalization",
                  "Automated A/B testing",
                  "Smart segmentation",
                  "24/7 priority support",
                  "Performance dashboard"
                ]}
                isPopular={true}
              />
              
              <PricingTier 
                name="Improver"
                price="£2,499"
                description="For established businesses requiring comprehensive email solutions"
                features={[
                  "Build, Maintain & Improve Email Assistant",
                  "30,000 emails/month",
                  "Dynamic personalization",
                  "Advanced analytics dashboard",
                  "Predictive optimization",
                  "Custom integrations",
                  "Dedicated account manager",
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
                <Mail className="w-5 h-5 mr-2" />
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
                Everything you need to know about our email automation solution
              </p>
            </div>
            
            <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 mb-16 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <div className="space-y-4">
                <FAQ 
                  question="How does the content creation process work?"
                  answer="Our AI analyzes your brand voice, previous successful emails, and industry best practices to generate content that feels authentic to your brand. You can review and approve content before it goes live, or set it to auto-send based on your preferences."
                />
                <FAQ 
                  question="Will the emails feel authentic to my brand?"
                  answer="Absolutely! Our AI is trained on your existing content, brand guidelines, and industry best practices to ensure all generated emails maintain your unique brand voice and style."
                />
                <FAQ 
                  question="How quickly can we get started?"
                  answer="Our implementation process typically takes 3-5 business days from signing up to going live. This includes AI training, email template setup, and integration with your existing email systems."
                />
                <FAQ 
                  question="Can I still create my own emails alongside the AI-generated ones?"
                  answer="Yes! Our system is designed to work alongside your existing email creation process. You can easily mix AI-generated content with your own emails for a hybrid approach."
                />
                <FAQ 
                  question="What email platforms do you integrate with?"
                  answer="We integrate with all major email platforms including Mailchimp, HubSpot, ActiveCampaign, Klaviyo, SendGrid, and more. If you use a custom solution, our team can build a custom integration for you."
                />
                <FAQ 
                  question="How do you ensure emails don't go to spam?"
                  answer="Our system includes advanced deliverability optimization that monitors spam triggers, sender reputation, and engagement metrics to ensure your emails reach the inbox. We also provide detailed deliverability reports and recommendations."
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
                <AtSign className="w-5 h-5 mr-2" />
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
                Discover the powerful capabilities that set our email automation apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Send className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Smart Drip Campaigns</h3>
                <p className="text-gray-300">Automated sequences that adapt based on recipient behavior, ensuring the right message at the right time.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Inbox className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Inbox Optimization</h3>
                <p className="text-gray-300">Advanced deliverability features that ensure your emails reach the inbox, not the spam folder.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <RefreshCw className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Continuous Optimization</h3>
                <p className="text-gray-300">Self-improving system that learns from results and automatically optimizes for better performance.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <PieChart className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Advanced Analytics</h3>
                <p className="text-gray-300">Comprehensive reporting that goes beyond opens and clicks to show true ROI and business impact.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Layers className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Multi-Channel Integration</h3>
                <p className="text-gray-300">Seamless connection with your CRM, website, and other marketing channels for unified customer journeys.</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Target className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Behavioral Targeting</h3>
                <p className="text-gray-300">Dynamic content that adapts based on individual recipient behavior and preferences.</p>
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
                Industry recognition for our innovative email solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Award className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Best Email Marketing Tool</h3>
                <p className="text-gray-400 text-sm mb-4">MarTech Awards 2024</p>
                <p className="text-gray-300">Recognized for exceptional innovation in email automation</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Sparkles className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Top 10 AI Marketing Tools</h3>
                <p className="text-gray-400 text-sm mb-4">Digital Innovators 2024</p>
                <p className="text-gray-300">Featured among the most impactful marketing automation tools</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Target className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">ROI Excellence Award</h3>
                <p className="text-gray-400 text-sm mb-4">Email Marketing Summit 2024</p>
                <p className="text-gray-300">Awarded for delivering exceptional return on investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <h2 className="text-4xl font-aquire mb-6">
                Ready to <span className="text-green-500">Transform</span> Your Email Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your free strategy call now and discover how our email automation can help you:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Increase open rates by up to 45%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Boost click-through rates by up to 38%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Drive 3.5x more conversions from your email campaigns</span>
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

export default EmailService;