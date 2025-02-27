import React, { useEffect } from 'react';
import { 
  Brain, Zap, Users, Target, ArrowRight, Clock, TrendingUp, 
  Rocket, Calendar, Award, Globe, BarChart, Shield, Sparkles,
  CheckCircle, Star, Briefcase, Lightbulb, ChevronRight,
  MessageSquare, Phone, Mail, Share2
} from 'lucide-react';
import BinaryBackground from '../components/BinaryBackground';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RetroText from '../components/RetroText';
import { Link } from 'react-router-dom';

const Section: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}> = ({ icon, title, subtitle, children }) => (
  <div className="hover-card p-12 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20 mb-12 transform transition-all duration-500 hover:scale-[1.02]">
    <div className="flex flex-col items-center text-center mb-8">
      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,255,0,0.5)]">
        {icon}
      </div>
      <h2 className="text-3xl font-aquire mb-2">{title}</h2>
      <p className="text-green-500 text-lg font-aquire">{subtitle}</p>
    </div>
    <div className="space-y-6 text-gray-300 max-w-3xl mx-auto">
      {children}
    </div>
  </div>
);

const Stat: React.FC<{
  value: string;
  label: string;
  icon: React.ReactNode;
}> = ({ value, label, icon }) => (
  <div className="text-center transform transition-all duration-500 hover:scale-110">
    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <div className="text-4xl font-aquire text-green-500 mb-2">{value}</div>
    <div className="text-gray-300">{label}</div>
  </div>
);

const ValueCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="hover-card p-6 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-aquire mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Milestone: React.FC<{
  year: string;
  title: string;
  description: string;
}> = ({ year, title, description }) => (
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0 w-24 text-center">
      <div className="text-2xl font-aquire text-green-500">{year}</div>
    </div>
    <div className="flex-1 pb-12 border-l-2 border-green-500/30 pl-6 relative">
      <div className="absolute w-4 h-4 rounded-full bg-green-500 -left-[9px] top-2"></div>
      <h3 className="text-xl font-aquire mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const About: React.FC = () => {
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
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-50"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h1 className="text-5xl md:text-7xl font-aquire mb-6">
                Revolutionizing Business <span className="text-green-500">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
                While others are stuck in outdated systems, forward-thinking leaders are leveraging 
                automation to create an unfair advantage. Join the revolution.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <a 
                  href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                  target="_blank"
                  className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/services" className="group bg-black/50 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 reveal">
              <Stat 
                value="24/7" 
                label="Continuous Operation" 
                icon={<Clock className="w-8 h-8 text-green-500" />}
              />
              <Stat 
                value="0.5s" 
                label="Response Time" 
                icon={<Zap className="w-8 h-8 text-green-500" />}
              />
              <Stat 
                value="∞" 
                label="Scalability" 
                icon={<TrendingUp className="w-8 h-8 text-green-500" />}
              />
              <Stat 
                value="40%" 
                label="Avg. Revenue Increase" 
                icon={<BarChart className="w-8 h-8 text-green-500" />}
              />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Our <span className="text-green-500">Story</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From vision to revolution: How Deity_AI is transforming the business landscape
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
              <div>
                <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                  <h3 className="text-2xl font-aquire mb-6">The Genesis</h3>
                  <p className="text-gray-300 mb-4">
                    In 2023, we witnessed countless businesses crumble under the weight of inefficiency. 
                    Brilliant companies with amazing products were being outmaneuvered by competitors who 
                    could simply move faster and operate 24/7.
                  </p>
                  <p className="text-gray-300 mb-4">
                    That's when it hit us: The business world doesn't need another tool. It needs a 
                    <span className="text-green-500 font-bold"> revolution</span>. A way to break free 
                    from human limitations while maintaining the personal touch that customers crave.
                  </p>
                  <p className="text-gray-300">
                    Deity_AI was born from this realization—a comprehensive suite of AI-powered automation 
                    solutions designed to transform how businesses operate, engage with customers, and scale.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <Milestone 
                  year="2023"
                  title="Foundation"
                  description="Deity_AI was founded with a mission to democratize AI automation for businesses of all sizes."
                />
                <Milestone 
                  year="2023"
                  title="First Product Launch"
                  description="Released our flagship AI Chatbot solution, achieving a 40% increase in customer conversion rates."
                />
                <Milestone 
                  year="2024"
                  title="Expansion"
                  description="Expanded our product suite to include Voice Caller, Email Assistant, and Website optimization solutions."
                />
                <Milestone 
                  year="2025"
                  title="Global Reach"
                  description="Now serving clients across 15 countries with multilingual support and 24/7 operation."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <Section
          icon={<Target className="w-8 h-8 text-green-500" />}
          title="Our Mission"
          subtitle="CREATING THE FUTURE OF BUSINESS"
        >
          <p className="text-lg">
            At Deity_AI, we're on a mission to revolutionize how businesses operate through intelligent automation. 
            We believe that by freeing humans from repetitive tasks, we enable them to focus on what truly matters: 
            creativity, strategy, and meaningful human connections.
          </p>
          <p className="text-lg">
            Our goal is to create a world where every business, regardless of size, has access to enterprise-grade 
            automation that works 24/7, scales infinitely, and delivers exceptional customer experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Stat 
              value="100+" 
              label="Businesses Transformed" 
              icon={<Building2 className="w-8 h-8 text-green-500" />}
            />
            <Stat 
              value="15+" 
              label="Countries Served" 
              icon={<Globe className="w-8 h-8 text-green-500" />}
            />
            <Stat 
              value="1M+" 
              label="Customer Interactions" 
              icon={<Users className="w-8 h-8 text-green-500" />}
            />
          </div>
        </Section>

        {/* Our Values Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Our <span className="text-green-500">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <ValueCard 
                icon={<Rocket className="w-8 h-8 text-green-500" />}
                title="Innovation"
                description="We constantly push the boundaries of what's possible with AI, developing cutting-edge solutions that stay ahead of the curve."
              />
              <ValueCard 
                icon={<CheckCircle className="w-8 h-8 text-green-500" />}
                title="Excellence"
                description="We're committed to delivering exceptional quality in everything we do, from our technology to our customer service."
              />
              <ValueCard 
                icon={<Users className="w-8 h-8 text-green-500" />}
                title="Customer Success"
                description="Your success is our success. We measure our achievements by the tangible results we deliver for our clients."
              />
              <ValueCard 
                icon={<Shield className="w-8 h-8 text-green-500" />}
                title="Integrity"
                description="We operate with transparency, honesty, and ethical standards that build lasting trust with our clients and partners."
              />
              <ValueCard 
                icon={<Lightbulb className="w-8 h-8 text-green-500" />}
                title="Adaptability"
                description="We embrace change and continuously evolve our solutions to meet the ever-changing needs of businesses."
              />
              <ValueCard 
                icon={<Sparkles className="w-8 h-8 text-green-500" />}
                title="Impact"
                description="We're driven by creating meaningful impact for businesses, helping them achieve transformative results."
              />
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Awards & <span className="text-green-500">Recognition</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry recognition for our innovative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Award className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Best AI Innovation</h3>
                <p className="text-gray-400 text-sm mb-4">Tech Innovators Awards 2024</p>
                <p className="text-gray-300">Recognized for exceptional innovation in business automation</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Star className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Top 10 AI Companies</h3>
                <p className="text-gray-400 text-sm mb-4">Business Technology Review 2024</p>
                <p className="text-gray-300">Featured among the most impactful AI companies transforming business</p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <Briefcase className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-aquire mb-2">Business Impact Award</h3>
                <p className="text-gray-400 text-sm mb-4">Enterprise Excellence 2024</p>
                <p className="text-gray-300">Awarded for delivering exceptional ROI for enterprise clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-aquire mb-4">
                Our <span className="text-green-500">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI automation to transform every aspect of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal">
              <Link to="/services/ai-chatbot" className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] group">
                <div className="flex items-start gap-6">
                  <MessageSquare className="w-12 h-12 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-aquire mb-3 flex items-center">
                      AI Chatbot
                      <ChevronRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </h3>
                    <p className="text-gray-300 mb-4">24/7 customer support and lead generation with intelligent conversation capabilities.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Lead Generation
                      </span>
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Customer Support
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link to="/services/ai-voice-caller" className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] group">
                <div className="flex items-start gap-6">
                  <Phone className="w-12 h-12 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-aquire mb-3 flex items-center">
                      Voice Caller
                      <ChevronRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </h3>
                    <p className="text-gray-300 mb-4">Human-like voice interactions for outbound calls, lead qualification, and appointment booking.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Outbound Calling
                      </span>
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Appointment Setting
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link to="/services/social-media-ai" className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] group">
                <div className="flex items-start gap-6">
                  <Share2 className="w-12 h-12 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-aquire mb-3 flex items-center">
                      Social Media Automation
                      <ChevronRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </h3>
                    <p className="text-gray-300 mb-4">Automated content creation, scheduling, and engagement across all social platforms.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Content Creation
                      </span>
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Engagement
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link to="/services/email-ai" className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] group">
                <div className="flex items-start gap-6">
                  <Mail className="w-12 h-12 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-aquire mb-3 flex items-center">
                      Email Assistant
                      <ChevronRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </h3>
                    <p className="text-gray-300 mb-4">Intelligent email campaigns, personalization, and automated follow-ups.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Campaigns
                      </span>
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Personalization
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link to="/services/website" className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] group">
                <div className="flex items-start gap-6">
                  <Globe className="w-12 h-12 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-aquire mb-3 flex items-center">
                      Website Service
                      <ChevronRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </h3>
                    <p className="text-gray-300 mb-4">Self-optimizing websites that adapt to visitor behavior and maximize conversions.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Conversion Optimization
                      </span>
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        SEO Automation
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] group">
                <div className="flex items-start gap-6">
                  <Zap className="w-12 h-12 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-aquire mb-3 flex items-center">
                      View All Solutions
                      <ChevronRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </h3>
                    <p className="text-gray-300 mb-4">Explore our complete suite of AI automation solutions designed to transform your business.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        All Services
                      </span>
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">
                        Custom Solutions
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-black/50 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <h2 className="text-4xl font-aquire mb-6">
                Ready to <span className="text-green-500">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the ranks of forward-thinking businesses that are already dominating their 
                industries with Deity_AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                  target="_blank"
                  className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center btn-glow"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Your Free Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="group bg-black/50 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;

// Additional components used in the About page
const Building2: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 22V2a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v20" />
    <path d="M18 11h.01" />
    <path d="M18 14h.01" />
    <path d="M18 17h.01" />
    <path d="M18 20h.01" />
    <path d="M6 11h.01" />
    <path d="M6 14h.01" />
    <path d="M6 17h.01" />
    <path d="M6 20h.01" />
    <path d="M12 11h.01" />
    <path d="M12 14h.01" />
    <path d="M12 17h.01" />
    <path d="M12 20h.01" />
    <path d="M6 22h12" />
  </svg>
);