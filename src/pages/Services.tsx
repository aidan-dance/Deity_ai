import React from 'react';
import { 
  Users, Zap, Share2, Building2, ShoppingCart, 
  LineChart, Briefcase, Wrench, Check, ArrowRight,
  MessageSquare, Phone, Mail, Bot
} from 'lucide-react';
import BinaryBackground from '../components/BinaryBackground';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RetroText from '../components/RetroText';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  services: string[];
  capabilities: string[];
  cta?: string;
  learnMoreLink?: string;
}> = ({ icon, title, services, capabilities, cta, learnMoreLink }) => (
  <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 flex flex-col min-h-[700px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
    <div className="flex-1">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-aquire text-center truncate max-w-full">{title}</h3>
      </div>
      <ul className="space-y-4 mb-8">
        {services.map((service, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">{service}</span>
          </li>
        ))}
      </ul>
      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-medium">Capabilities:</p>
        <div className="flex flex-wrap gap-2">
          {capabilities.map((capability, index) => (
            <span key={index} className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
              {capability}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="space-y-4">
      <a 
        href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1"
        target="_blank"
        className="w-full group bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center px-4 py-4 rounded-lg text-white font-bold text-base h-[56px]"
      >
        <Zap className="w-5 h-5 mr-2" />
        <span className="whitespace-nowrap">{cta || "CLAIM YOUR ADVANTAGE"}</span>
      </a>
      {learnMoreLink && (
        <Link to={learnMoreLink} className="block text-center text-green-500 hover:text-green-400 cursor-pointer text-sm font-medium">
          Learn More
        </Link>
      )}
    </div>
  </div>
);

const CategoryCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  services: string[];
  capabilities: string[];
  cta?: string;
}> = ({ icon, title, services, capabilities, cta }) => (
  <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 flex flex-col min-h-[700px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
    <div className="flex-1">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-aquire text-center truncate max-w-full">{title}</h3>
      </div>
      <ul className="space-y-4 mb-8">
        {services.map((service, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">{service}</span>
          </li>
        ))}
      </ul>
      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-medium">Capabilities:</p>
        <div className="flex flex-wrap gap-2">
          {capabilities.map((capability, index) => (
            <span key={index} className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20">
              {capability}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-6">
      <a 
        href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1"
        target="_blank"
        className="w-full group bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center px-4 py-4 rounded-lg text-white font-bold text-base h-[56px]"
      >
        <Zap className="w-5 h-5 mr-2" />
        <span className="whitespace-nowrap">{cta || "CLAIM YOUR ADVANTAGE"}</span>
      </a>
    </div>
  </div>
);

const SectionHeading: React.FC<{
  title: string;
  subtitle: string;
  greenText: string;
}> = ({ title, subtitle, greenText }) => (
  <div className="text-center mb-16">
    <div className="flex flex-col items-center justify-center">
      <RetroText
        text={title}
        className="text-5xl md:text-7xl font-bold mb-2"
      >
        <span className="text-green-500"> {greenText}</span>
      </RetroText>
      <div className="w-24 h-1 bg-green-500 my-6"></div>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: <Bot className="w-8 h-8 text-green-500" />,
      title: "Chatbot Agent",
      services: [
        "24/7 Customer Support",
        "Natural Language Processing",
        "Lead Qualification",
        "Instant Response System",
        "Smart Routing"
      ],
      capabilities: [
        "Multi-language",
        "Intent Detection",
        "Sentiment Analysis",
        "Custom Training"
      ],
      cta: "GET 24/7 SUPPORT",
      learnMoreLink: "/services/ai-chatbot"
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: "Voice Assistant",
      services: [
        "Voice Recognition",
        "Sentiment Analysis",
        "Call Transcription",
        "Smart Call Routing",
        "Auto-Scheduling"
      ],
      capabilities: [
        "Voice Cloning",
        "Real-time Analysis",
        "Multi-accent",
        "Noise Reduction"
      ],
      cta: "DOMINATE CALLS",
      learnMoreLink: "/services/ai-voice-caller"
    },
    {
      icon: <Share2 className="w-8 h-8 text-green-500" />,
      title: "Social Media Automation",
      services: [
        "Content Generation",
        "Engagement Automation",
        "Trend Analysis",
        "Performance Analytics",
        "Multi-Platform Management"
      ],
      capabilities: [
        "24/7 Posting",
        "Smart Responses",
        "Brand Voice",
        "Analytics"
      ],
      cta: "GO VIRAL NOW",
      learnMoreLink: "/services/social-media-ai"
    },
    {
      icon: <Mail className="w-8 h-8 text-green-500" />,
      title: "Email Assistant",
      services: [
        "Smart Campaign Management",
        "Personalized Content",
        "A/B Testing Automation",
        "Engagement Optimization",
        "Analytics Dashboard"
      ],
      capabilities: [
        "Smart Templates",
        "Auto-response",
        "Spam Detection",
        "List Management"
      ],
      cta: "EXPLODE YOUR EMAIL ROI",
      learnMoreLink: "/services/email-ai"
    }
  ];

  const categories = [
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Customer Service",
      services: [
        "Chatbot System",
        "Voice Assistant",
        "Email Support",
        "Help Desk System",
        "Live Chat Support"
      ],
      capabilities: [
        "Multi-channel",
        "Auto-routing",
        "Knowledge Base",
        "Analytics"
      ],
      cta: "SCALE SUPPORT"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Sales Solutions",
      services: [
        "Lead Generation",
        "Sales Assistant",
        "Cold Outreach",
        "Lead Scoring",
        "Sales Analytics"
      ],
      capabilities: [
        "CRM Integration",
        "Pipeline Mgmt",
        "Forecasting",
        "Auto-nurture"
      ],
      cta: "10X SALES"
    },
    {
      icon: <Share2 className="w-8 h-8 text-green-500" />,
      title: "Marketing Tools",
      services: [
        "Content Creation",
        "Social Management",
        "Ad Optimization",
        "SEO Assistant",
        "Campaign Tracker"
      ],
      capabilities: [
        "Multi-platform",
        "Auto-posting",
        "Brand Voice",
        "Analytics"
      ],
      cta: "CRUSH LEADS"
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-500" />,
      title: "Business Ops",
      services: [
        "Virtual Assistant",
        "Invoice System",
        "HR Assistant",
        "Meeting Notes",
        "Document Gen"
      ],
      capabilities: [
        "Automation",
        "Integration",
        "Compliance",
        "Reporting"
      ],
      cta: "SCALE FASTER"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
      title: "E-commerce",
      services: [
        "Product Recommender",
        "Shopping Assistant",
        "Price Optimizer",
        "Loyalty System",
        "Review Analysis"
      ],
      capabilities: [
        "Platform Integration",
        "Real-time Pricing",
        "Inventory Mgmt",
        "Analytics"
      ],
      cta: "BOOST SALES"
    },
    {
      icon: <LineChart className="w-8 h-8 text-green-500" />,
      title: "Analytics",
      services: [
        "Financial Tracking",
        "Risk Analysis",
        "Data Reporting",
        "Tax Assistant",
        "Business Insights"
      ],
      capabilities: [
        "Real-time Data",
        "Forecasting",
        "Custom Reports",
        "Integration"
      ],
      cta: "GET INSIGHTS"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      title: "Industry Tools",
      services: [
        "Restaurant Manager",
        "Medical Scheduler",
        "Legal Assistant",
        "Real Estate Aid",
        "Property System"
      ],
      capabilities: [
        "Customization",
        "Compliance",
        "Integration",
        "Training"
      ],
      cta: "DOMINATE NOW"
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-500" />,
      title: "Custom Tools",
      services: [
        "API Integration",
        "Training System",
        "Call Center Automation",
        "Workflow Builder",
        "Consulting"
      ],
      capabilities: [
        "Scalability",
        "Custom Dev",
        "Support",
        "Documentation"
      ],
      cta: "BUILD EMPIRE"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BinaryBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent opacity-50"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-8">
              <h1 className="text-6xl md:text-8xl font-aquire mb-6">
                Our <span className="text-green-500">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge automation solutions designed to transform your business operations and drive growth
              </p>
            </div>
          </div>
        </section>
        
        {/* Core Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Our Core"
              greenText="Automation Services"
              subtitle="Experience the power of our flagship automation solutions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
              {mainServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  services={service.services}
                  capabilities={service.capabilities}
                  cta={service.cta}
                  learnMoreLink={service.learnMoreLink}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* All Solutions Section */}
        <section className="py-16 px-4 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Explore All"
              greenText="Automation Solutions"
              subtitle="Discover our comprehensive suite of automation-powered solutions designed to transform your business"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  services={category.services}
                  capabilities={category.capabilities}
                  cta={category.cta}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center">
              <h2 className="text-4xl font-aquire mb-6">
                Ready to <span className="text-green-500">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a free consultation with our experts and discover how our automation solutions can help you achieve your business goals.
              </p>
              <a 
                href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 group"
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
};

export default Services;