import React, { useState, useEffect } from 'react';
import { 
  Mail, Zap, ArrowRight, Phone, MessageSquare, Calendar, 
  MapPin, Globe, AtSign, Send, Clock, User, Briefcase, 
  CheckCircle, AlertCircle, Loader, ChevronDown, ChevronUp
} from 'lucide-react';
import BinaryBackground from '../components/BinaryBackground';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RetroText from '../components/RetroText';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactMethod: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  linkText: string;
}> = ({ icon, title, value, link, linkText }) => (
  <div className="hover-card p-6 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-gray-300 mb-3">{value}</p>
        <a 
          href={link}
          className="inline-flex items-center text-green-500 hover:text-green-400 font-medium transition-colors"
        >
          {linkText}
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </div>
);

const OfficeLocation: React.FC<{
  city: string;
  address: string;
  hours: string;
}> = ({ city, address, hours }) => (
  <div className="hover-card p-6 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
        <MapPin className="w-6 h-6 text-green-500" />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{city}</h3>
        <p className="text-gray-300 mb-2">{address}</p>
        <div className="flex items-center text-sm text-gray-400">
          <Clock className="w-4 h-4 mr-1" />
          <span>{hours}</span>
        </div>
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'general' | 'sales' | 'support'>('general');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto URL with form data
      const subject = `New Contact Form Submission from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
      
      // Determine recipient based on active tab
      let recipient = 'contact@deity-ai.co.uk';
      if (activeTab === 'sales') recipient = 'sales@deity-ai.co.uk';
      if (activeTab === 'support') recipient = 'support@deity-ai.co.uk';
      
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open default email client
      window.location.href = mailtoUrl;
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BinaryBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 reveal">
              <div className="inline-flex items-center gap-2 text-green-500 mb-6">
                <Mail className="w-6 h-6" />
                <span className="font-aquire tracking-wider">GET IN TOUCH</span>
              </div>
              <RetroText
                text="Let's Build Your"
                className="text-5xl md:text-7xl font-bold mb-2"
              >
                <span className="text-green-500"> Automation Future</span>
              </RetroText>
              <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
                Our team of AI experts is ready to help you transform your business with cutting-edge automation solutions.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 reveal">
              <ContactMethod 
                icon={<Phone className="w-6 h-6 text-green-500" />}
                title="Call Us"
                value="+44 7476 873592"
                link="tel:+447476873592"
                linkText="Call now"
              />
              <ContactMethod 
                icon={<Mail className="w-6 h-6 text-green-500" />}
                title="Email Us"
                value="contact@deity-ai.co.uk"
                link="mailto:contact@deity-ai.co.uk"
                linkText="Send email"
              />
              <ContactMethod 
                icon={<Calendar className="w-6 h-6 text-green-500" />}
                title="Book a Meeting"
                value="Schedule a free consultation"
                link="https://calendly.com/aidandance1/chatbot-_power_call-clone-1"
                linkText="Book now"
              />
            </div>

            {/* Main Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 reveal">
              {/* Contact Form - 3 columns */}
              <div className="lg:col-span-3">
                <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                  <div className="mb-6">
                    <h2 className="text-2xl font-aquire mb-2">Send Us a Message</h2>
                    <p className="text-gray-300">Fill out the form below and we'll get back to you as soon as possible.</p>
                  </div>
                  
                  {/* Department Tabs */}
                  <div className="flex mb-6 border-b border-green-500/20">
                    <button 
                      className={`px-4 py-2 font-medium ${activeTab === 'general' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
                      onClick={() => setActiveTab('general')}
                    >
                      General
                    </button>
                    <button 
                      className={`px-4 py-2 font-medium ${activeTab === 'sales' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
                      onClick={() => setActiveTab('sales')}
                    >
                      Sales
                    </button>
                    <button 
                      className={`px-4 py-2 font-medium ${activeTab === 'support' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-400 hover:text-white'}`}
                      onClick={() => setActiveTab('support')}
                    >
                      Support
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-black/50 border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-black/50 border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 bg-black/50 border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                            placeholder="+44 123 456 7890"
                          />
                        </div>
                      </div>
                      
                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 bg-black/50 border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white h-32"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-green-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center group"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      
                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <p className="text-green-500">Message sent successfully! We'll be in touch soon.</p>
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center">
                          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                          <p className="text-red-500">Failed to send message. Please try again or contact us directly.</p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Office Locations - 2 columns */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                  <h2 className="text-2xl font-aquire mb-6">Our Offices</h2>
                  <div className="space-y-6">
                    <OfficeLocation 
                      city="London"
                      address="123 AI Innovation Centre, Tech District, London, EC1V 9BX"
                      hours="Mon-Fri: 9:00 AM - 6:00 PM"
                    />
                    <OfficeLocation 
                      city="Manchester"
                      address="45 Digital Hub, Northern Quarter, Manchester, M4 1HW"
                      hours="Mon-Fri: 9:00 AM - 6:00 PM"
                    />
                  </div>
                </div>
                
                <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] flex-1">
                  <h2 className="text-2xl font-aquire mb-6">Connect With Us</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="text-gray-300">Visit our website</p>
                        <a href="https://www.deity-ai.co.uk" className="text-green-500 hover:text-green-400">www.deity-ai.co.uk</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="text-gray-300">Live Chat Support</p>
                        <button className="text-green-500 hover:text-green-400 flex items-center">
                          Start a conversation
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="hover-card p-12 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 text-center mb-16 reveal transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              <h2 className="text-3xl font-aquire mb-6">
                Ready for a <span className="text-green-500">Personalized Demo?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                See exactly how our AI solutions can transform your business with a live, personalized demonstration.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                  target="_blank"
                  className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Live Demo
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
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mb-16 reveal">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-aquire mb-4">
                  Frequently Asked <span className="text-green-500">Questions</span>
                </h2>
                <p className="text-gray-300">
                  Quick answers to common questions about contacting us
                </p>
              </div>
              
              <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="space-y-4">
                  <FAQ 
                    question="What's the typical response time for inquiries?"
                    answer="We aim to respond to all inquiries within 2-4 business hours. For urgent matters, we recommend calling our direct line for immediate assistance."
                  />
                  <FAQ 
                    question="Do you offer international support?"
                    answer="Yes, we provide support to clients worldwide. Our team is available across multiple time zones to ensure timely assistance regardless of your location."
                  />
                  <FAQ 
                    question="How do I book a demo of your services?"
                    answer="You can easily book a demo by clicking the 'Schedule Live Demo' button above, which will take you to our calendar booking system. Alternatively, you can call us directly to arrange a demonstration."
                  />
                  <FAQ 
                    question="What information should I prepare before contacting you?"
                    answer="To help us serve you better, it's helpful to have information about your current business challenges, goals for automation, and any specific services you're interested in. This allows us to tailor our response to your needs."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;