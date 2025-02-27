import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Mail, User, Phone, Building2, Globe, Briefcase, 
  Users, Bot, MessageSquare, Share2, Calendar, VoicemailIcon, 
  Database, ShoppingCart, Settings, Check, ClipboardList, Target, 
  Hourglass, Clock, HeadphonesIcon, PhoneCall, CalendarRange, 
  Users2, Zap, Clock3, Rocket, HelpCircle, DollarSign, Timer,
  CalendarDays, PhoneForwarded, AtSign, MessageCircle, ChevronDown,
  ChevronUp, ChevronLeft, Loader
} from 'lucide-react';
import CustomCursor from '../components/CustomCursor';
import { Helmet } from 'react-helmet';

// Constants
const INDUSTRIES = [
  'E-commerce',
  'Healthcare',
  'Real Estate',
  'Local Service',
  'SaaS',
  'Other'
];

const COMPANY_SIZES = [
  '1-5',
  '6-10',
  '11-50',
  '51-100',
  '100+'
];

const AUTOMATION_NEEDS = [
  {
    id: 'lead-gen',
    label: 'Lead Generation & Follow-Ups',
    icon: Bot
  },
  {
    id: 'customer-support',
    label: 'Customer Support (AI chatbots, automated responses)',
    icon: MessageSquare
  },
  {
    id: 'social-media',
    label: 'Social Media (Automated posting, DMs, engagement)',
    icon: Share2
  },
  {
    id: 'sales-outreach',
    label: 'Sales Outreach (Cold email automation, LinkedIn, auto-dialers)',
    icon: Mail
  },
  {
    id: 'appointment',
    label: 'Appointment Scheduling (AI booking assistants, calendar sync)',
    icon: Calendar
  },
  {
    id: 'voice-call',
    label: 'Phone & Voice Call Automation (AI voice responders, IVRs)',
    icon: VoicemailIcon
  },
  {
    id: 'email-marketing',
    label: 'Email Marketing (Drip campaigns, personalization)',
    icon: Mail
  },
  {
    id: 'crm',
    label: 'CRM & Contact Management',
    icon: Database
  },
  {
    id: 'ecommerce',
    label: 'E-commerce (Cart reminders, order follow-ups)',
    icon: ShoppingCart
  },
  {
    id: 'internal',
    label: 'Internal Workflows (Task automation, reports, reminders)',
    icon: Settings
  },
  {
    id: 'other',
    label: 'Other (Tell us what\'s eating your time)',
    icon: Bot
  }
];

const CURRENT_AUTOMATION = [
  {
    id: 'none',
    label: 'No, I\'m still doing everything manually',
    icon: Clock3
  },
  {
    id: 'outdated',
    label: 'Yes, but they\'re outdated or weak',
    icon: Settings
  },
  {
    id: 'ineffective',
    label: 'Yes, but they\'re not giving me the results I need',
    icon: Target
  },
  {
    id: 'other',
    label: 'Other (Tell us what\'s working—or not)',
    icon: HelpCircle
  }
];

const BUSINESS_CHALLENGES = [
  {
    id: 'manual-tasks',
    label: 'Drowning in manual tasks',
    description: 'Your to-do list never ends, and it\'s eating up your time.',
    icon: ClipboardList
  },
  {
    id: 'not-enough-leads',
    label: 'Not enough leads',
    description: 'You\'re putting in the effort, but people just aren\'t coming in.',
    icon: Target
  },
  {
    id: 'leads-not-converting',
    label: 'Leads come in but don\'t convert',
    description: 'You\'re getting traffic, but they\'re not buying.',
    icon: Hourglass
  },
  {
    id: 'slow-response',
    label: 'Slow response times losing customers',
    description: 'By the time you reply, they\'ve moved on.',
    icon: Clock
  },
  {
    id: 'patchy-support',
    label: 'Customer service is patchy',
    description: 'Support is inconsistent, and customers feel it.',
    icon: HeadphonesIcon
  },
  {
    id: 'sales-struggling',
    label: 'Sales team struggling with outreach',
    description: 'Cold calls, emails—nothing is landing.',
    icon: PhoneCall
  },
  {
    id: 'booking-issues',
    label: 'Too much back and forth for bookings',
    description: 'Scheduling is a mess, and it\'s costing you clients.',
    icon: CalendarRange
  },
  {
    id: 'retention-issues',
    label: 'Need better client retention',
    description: 'Customers buy once, then disappear.',
    icon: Users2
  },
  {
    id: 'other',
    label: 'Other',
    description: 'Tell us about your specific challenge',
    icon: Target
  }
];

const CONTACT_METHODS = [
  {
    id: 'phone',
    label: 'Phone Call',
    description: 'Direct, fast, and to the point.',
    icon: PhoneForwarded
  },
  {
    id: 'email',
    label: 'Email',
    description: 'Get detailed insights right in your inbox.',
    icon: AtSign
  },
  {
    id: 'sms',
    label: 'SMS',
    description: 'Quick, straight-to-the-point updates.',
    icon: MessageCircle
  }
];

const BEST_TIMES = [
  {
    id: 'morning',
    label: 'Morning (9am - 12pm)',
    icon: Clock
  },
  {
    id: 'afternoon',
    label: 'Afternoon (12pm - 5pm)',
    icon: Clock
  },
  {
    id: 'evening',
    label: 'Evening (5pm - 8pm)',
    icon: Clock
  }
];

const BUDGETS = [
  {
    id: 'under-500',
    label: 'Under £500',
    description: 'Dipping a toe in—let\'s get you started',
    icon: DollarSign
  },
  {
    id: '500-1500',
    label: '£500 - £1,500',
    description: 'You\'re serious—good, we are too',
    icon: DollarSign
  },
  {
    id: '1500-5000',
    label: '£1,500 - £5,000',
    description: 'You want full-power automation—smart move',
    icon: DollarSign
  },
  {
    id: '5000-plus',
    label: '£5,000+',
    description: 'Let\'s build a beast',
    icon: DollarSign
  },
  {
    id: 'not-sure',
    label: 'Not sure yet, just exploring',
    description: 'We\'ll guide you',
    icon: HelpCircle
  }
];

const TIMELINES = [
  {
    id: 'immediate',
    label: 'Immediately',
    description: 'I\'m done wasting time, let\'s go.',
    icon: Rocket
  },
  {
    id: '30-days',
    label: 'Within 30 days',
    description: 'I\'m planning, but ready to move.',
    icon: CalendarDays
  },
  {
    id: '3-6-months',
    label: '3-6 months',
    description: 'Just gathering intel for now.',
    icon: Timer
  },
  {
    id: 'not-sure',
    label: 'Not sure',
    description: 'Need more info before making moves.',
    icon: HelpCircle
  }
];

const NEXT_STEPS = [
  {
    id: 'consultation',
    label: 'Submit & Book Your Free Consultation',
    description: 'Straight to a call with an expert—no fluff, just solutions.',
    icon: Calendar
  },
  {
    id: 'plan',
    label: 'Get a Free Automation Plan',
    description: 'We analyze your setup & send a tailored automation strategy.',
    icon: ClipboardList
  },
  {
    id: 'talk-now',
    label: 'Talk to an Expert Now',
    description: 'Immediate connection to someone who gets results.',
    icon: PhoneCall
  }
];

type Step = 'personal' | 'business' | 'automation' | 'challenge' | 'contact' | 'budget' | 'final' | 'success';

interface FormData {
  // Personal Info
  fullName: string;
  email: string;
  phone: string;

  // Business Info
  companyName: string;
  website: string;
  industry: string;
  customIndustry: string;
  companySize: string;

  // Automation Needs
  automationNeeds: string[];
  currentAutomation: string;
  otherCurrentAutomation: string;

  // Business Challenge
  businessChallenge: string;
  otherChallenge: string;

  // Contact Preferences
  contactMethod: string;
  bestTime: string;

  // Budget & Timeline
  budget: string;
  timeline: string;

  // Final Step
  nextStep: string;
}

const Survey: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('personal');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    industry: '',
    customIndustry: '',
    companySize: '',
    automationNeeds: [],
    currentAutomation: '',
    otherCurrentAutomation: '',
    businessChallenge: '',
    otherChallenge: '',
    contactMethod: '',
    bestTime: '',
    budget: '',
    timeline: '',
    nextStep: ''
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(14); // Start at 14% (1/7)

  useEffect(() => {
    // Pre-fill email from landing page
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
    }

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

  // Update progress bar when step changes
  useEffect(() => {
    switch (currentStep) {
      case 'personal': setProgress(14); break;
      case 'business': setProgress(28); break;
      case 'automation': setProgress(42); break;
      case 'challenge': setProgress(56); break;
      case 'contact': setProgress(70); break;
      case 'budget': setProgress(84); break;
      case 'final': setProgress(100); break;
      case 'success': setProgress(100); break;
    }
  }, [currentStep]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormError(null);

    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        automationNeeds: isChecked
          ? [...prev.automationNeeds, value]
          : prev.automationNeeds.filter(need => need !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateStep = (): boolean => {
    switch (currentStep) {
      case 'personal':
        if (!formData.fullName.trim()) {
          setFormError('Please enter your full name');
          return false;
        }
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
          setFormError('Please enter a valid email address');
          return false;
        }
        if (!formData.phone.trim()) {
          setFormError('Please enter your phone number');
          return false;
        }
        return true;

      case 'business':
        if (!formData.industry) {
          setFormError('Please select your industry');
          return false;
        }
        if (formData.industry === 'Other' && !formData.customIndustry.trim()) {
          setFormError('Please specify your industry');
          return false;
        }
        if (!formData.companySize) {
          setFormError('Please select your company size');
          return false;
        }
        return true;

      case 'automation':
        if (formData.automationNeeds.length === 0) {
          setFormError('Please select at least one automation need');
          return false;
        }
        if (!formData.currentAutomation) {
          setFormError('Please tell us about your current automation');
          return false;
        }
        if (formData.currentAutomation === 'other' && !formData.otherCurrentAutomation.trim()) {
          setFormError('Please provide details about your current automation');
          return false;
        }
        return true;

      case 'challenge':
        if (!formData.businessChallenge) {
          setFormError('Please select your biggest business challenge');
          return false;
        }
        if (formData.businessChallenge === 'other' && !formData.otherChallenge.trim()) {
          setFormError('Please describe your specific challenge');
          return false;
        }
        return true;

      case 'contact':
        if (!formData.contactMethod) {
          setFormError('Please select your preferred contact method');
          return false;
        }
        if (!formData.bestTime) {
          setFormError('Please select your preferred contact time');
          return false;
        }
        return true;

      case 'budget':
        if (!formData.budget) {
          setFormError('Please select your budget range');
          return false;
        }
        if (!formData.timeline) {
          setFormError('Please select your implementation timeline');
          return false;
        }
        return true;

      case 'final':
        if (!formData.nextStep) {
          setFormError('Please select your preferred next step');
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  const goToPreviousStep = () => {
    switch (currentStep) {
      case 'business': setCurrentStep('personal'); break;
      case 'automation': setCurrentStep('business'); break;
      case 'challenge': setCurrentStep('automation'); break;
      case 'contact': setCurrentStep('challenge'); break;
      case 'budget': setCurrentStep('contact'); break;
      case 'final': setCurrentStep('budget'); break;
      default: break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate current step
    if (!validateStep()) {
      return;
    }

    // If final step, submit the form
    if (currentStep === 'final') {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Move to success page
        setCurrentStep('success');
      } catch (error) {
        setFormError('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
      return;
    }
    
    // Move to next step based on current step
    switch (currentStep) {
      case 'personal':
        setCurrentStep('business');
        break;
      case 'business':
        setCurrentStep('automation');
        break;
      case 'automation':
        setCurrentStep('challenge');
        break;
      case 'challenge':
        setCurrentStep('contact');
        break;
      case 'contact':
        setCurrentStep('budget');
        break;
      case 'budget':
        setCurrentStep('final');
        break;
    }
  };

  // Get meta description based on current step
  const getMetaDescription = () => {
    switch (currentStep) {
      case 'personal': return 'Tell us about yourself so we can tailor our automation solutions to your needs.';
      case 'business': return 'Share details about your business to help us understand your industry and scale.';
      case 'automation': return 'Discover the perfect automation solutions for your specific business needs.';
      case 'challenge': return 'Identify your biggest business challenges and how automation can solve them.';
      case 'contact': return 'Choose how and when you\'d like to hear about your custom automation strategy.';
      case 'budget': return 'Help us understand your investment level for implementing automation solutions.';
      case 'final': return 'Select your preferred next steps for implementing AI automation in your business.';
      case 'success': return 'Thank you for completing our survey. Your automation journey begins now!';
      default: return 'Discover how AI automation can transform your business with Deity_AI.';
    }
  };

  const renderPersonalForm = () => (
    <>
      <div className="text-center mb-12 animate-fade-in reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Who Are You?</h1>
        <p className="text-xl text-gray-300 mb-4">
          🔥 Let's start simple. No fluff—just the essentials so we can cut through the noise and get you results.
        </p>
      </div>

      <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                placeholder="Because we don't do anonymous automation"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                placeholder="Where we'll send your tailored automation blueprint"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                placeholder="For direct contact. If we call, it'll be worth it"
                required
              />
            </div>
          </div>

          {formError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {formError}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full group bg-green-500/80 hover:bg-green-400/80 text-black font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            Continue
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {/* Why it matters */}
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-500 font-medium">✅ Why it matters:</p>
          <p className="text-gray-300 mt-2">
            Because real businesses need real solutions. No bots, no gimmicks—just automation that actually works.
          </p>
        </div>
      </div>
    </>
  );

  const renderBusinessForm = () => (
    <>
      <div className="text-center mb-12 animate-fade-in reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Business, Your Battlefield</h1>
        <p className="text-xl text-gray-300 mb-4">
          🔥 We don't automate for just anyone. Drop your details so we know if you're built for this.
        </p>
      </div>

      <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Name */}
          <div className="space-y-2">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">
              Company Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                placeholder="Optional, but makes things easier if we're talking B2B"
              />
            </div>
          </div>

          {/* Website URL */}
          <div className="space-y-2">
            <label htmlFor="website" className="block text-sm font-medium text-gray-300">
              Website URL <span className="text-gray-500">(Optional)</span>
            </label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                placeholder="Because seeing is believing—if you've got one, we'll check it out"
              />
            </div>
          </div>

          {/* Industry */}
          <div className="space-y-2">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-300">
              Industry/Niche <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white appearance-none"
                required
              >
                <option value="">Select your industry</option>
                {INDUSTRIES.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 pointer-events-none" />
            </div>
          </div>

          {/* Custom Industry */}
          {formData.industry === 'Other' && (
            <div className="space-y-2 animate-fade-in">
              <label htmlFor="customIndustry" className="block text-sm font-medium text-gray-300">
                Please specify your industry <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                <input
                  type="text"
                  id="customIndustry"
                  name="customIndustry"
                  value={formData.customIndustry}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white"
                  placeholder="Tell us about your industry"
                  required
                />
              </div>
            </div>
          )}

          {/* Company Size */}
          <div className="space-y-2">
            <label htmlFor="companySize" className="block text-sm font-medium text-gray-300">
              Company Size <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white appearance-none"
                required
              >
                <option value="">Select company size</option>
                {COMPANY_SIZES.map(size => (
                  <option key={size} value={size}>{size} employees</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 pointer-events-none" />
            </div>
          </div>

          {formError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {formError}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={goToPreviousStep}
              className="sm:w-1/3 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center"
            >
              <ChevronLeft className="mr-2 w-5 h-5" />
              Back
            </button>
            <button
              type="submit"
              className="sm:w-2/3 group bg-green-500/80 hover:bg-green-400/80 text-black font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              Continue
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        {/* Why it matters */}
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-500 font-medium">✅ Why it matters:</p>
          <p className="text-gray-300 mt-2">
            Because size and industry dictate automation needs. Solopreneur? Small team? Enterprise? 
            Doesn't matter—we adjust fire accordingly.
          </p>
        </div>
      </div>
    </>
  );

  const renderAutomationForm = () => (
    <>
      <div className="text-center mb-12 animate-fade-in reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">What's Slowing You Down?</h1>
        <p className="text-xl text-gray-300 mb-4">
          🔥 Let's cut to the chase. What's eating up your time, costing you sales, or slowing your growth?
        </p>
      </div>

      <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select all the areas where you need automation: <span className="text-red-500">*</span>
            </label>
            {AUTOMATION_NEEDS.map(need => {
              const Icon = need.icon;
              return (
                <div key={need.id} className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      id={need.id}
                      value={need.id}
                      checked={formData.automationNeeds.includes(need.id)}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <label
                      htmlFor={need.id}
                      className="flex items-center justify-center w-6 h-6 border border-green-500/20 rounded cursor-pointer transition-all duration-200 peer-checked:bg-green-500 peer-checked:border-green-500"
                    >
                      <Check className="w-4 h-4 text-black opacity-0 peer-checked:opacity-100" />
                    </label>
                  </div>
                  <label htmlFor={need.id} className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-2 text-white hover:text-green-500 transition-colors">
                      <Icon className="w-5 h-5" />
                      <span>{need.label}</span>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Are You Using Any Automation Tools Already? <span className="text-red-500">*</span></h3>
            <div className="space-y-4">
              {CURRENT_AUTOMATION.map(option => {
                const Icon = option.icon;
                return (
                  <div key={option.id} className="relative">
                    <input
                      type="radio"
                      id={`automation-${option.id}`}
                      name="currentAutomation"
                      value={option.id}
                      checked={formData.currentAutomation === option.id}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <label
                      htmlFor={`automation-${option.id}`}
                      className="flex items-start gap-4 p-4 rounded-lg border border-green-500/20 cursor-pointer transition-all duration-200 hover:bg-green-500/10 peer-checked:bg-green-500/20 peer-checked:border-green-500"
                    >
                      <Icon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span>{option.label}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {formData.currentAutomation === 'other' && (
            <div className="space-y-2 animate-fade-in">
              <label htmlFor="otherCurrentAutomation" className="block text-sm font-medium text-gray-300">
                Please tell us about your current automation <span className="text-red-500">*</span>
              </label>
              <textarea
                id="otherCurrentAutomation"
                name="otherCurrentAutomation"
                value={formData.otherCurrentAutomation}
                onChange={handleChange}
                placeholder="Tell us about your current automation setup..."
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white h-32"
                required
              />
            </div>
          )}

          {formError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {formError}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={goToPreviousStep}
              className="sm:w-1/3 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center"
            >
              <ChevronLeft className="mr-2 w-5 h-5" />
              Back
            </button>
            <button
              type="submit"
              className="sm:w-2/3 group bg-green-500/80 hover:bg-green-400/80 text-black font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              Continue
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        {/* Why it matters */}
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-500 font-medium">✅ Why it matters:</p>
          <p className="text-gray-300 mt-2">
            Because we don't pitch generic BS. We diagnose the problem, prescribe the solution, 
            and automate the hell out of it.
          </p>
        </div>
      </div>
    </>
  );

  const renderChallengeForm = () => (
    <>
      <div className="text-center mb-12 animate-fade-in reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">What's Your Biggest Business Challenge?</h1>
        <p className="text-xl text-gray-300 mb-4">
          ⚠️ Business is tough—but it doesn't have to be. What's the #1 thing slowing you down?
        </p>
      </div>

      <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select your biggest challenge: <span className="text-red-500">*</span>
            </label>
            {BUSINESS_CHALLENGES.map(challenge => {
              const Icon = challenge.icon;
              return (
                <div key={challenge.id} className="relative">
                  <input
                    type="radio"
                    id={challenge.id}
                    name="businessChallenge"
                    value={challenge.id}
                    checked={formData.businessChallenge === challenge.id}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor={challenge.id}
                    className="flex items-start gap-4 p-4 rounded-lg border border-green-500/20 cursor-pointer transition-all duration-200 hover:bg-green-500/10 peer-checked:bg-green-500/20 peer-checked:border-green-500"
                  >
                    <Icon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{challenge.label}</div>
                      <div className="text-sm text-gray-400">{challenge.description}</div>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>

          {formData.businessChallenge === 'other' && (
            <div className="space-y-2 animate-fade-in">
              <label htmlFor="otherChallenge" className="block text-sm font-medium text-gray-300">
                Please describe your specific challenge <span className="text-red-500">*</span>
              </label>
              <textarea
                id="otherChallenge"
                name="otherChallenge"
                value={formData.otherChallenge}
                onChange={handleChange}
                placeholder="Tell us about your specific challenge..."
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-green-500/20 rounded-lg focus:outline-none focus:border-green-500 text-white h-32"
                required
              />
            </div>
          )}

          {formError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {formError}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={goToPreviousStep}
              className="sm:w-1/3 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center"
            >
              <ChevronLeft className="mr-2 w-5 h-5" />
              Back
            </button>
            <button
              type="submit"
              className="sm:w-2/3 group bg-green-500/80 hover:bg-green-400/80 text-black font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              Continue
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        {/* Why it matters */}
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-500 font-medium">✅ Why it matters:</p>
          <p className="text-gray-300 mt-2">
            Because understanding your biggest pain point helps us prioritize solutions that make the biggest impact.
          </p>
        </div>
      </div>
    </>
  );

  const renderContactForm = () => (
    <>
      <div className="text-center mb-12 animate-fade-in reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">How Do You Want This to Go Down?</h1>
        <p className="text-xl text-gray-300 mb-4">
          🔥 Tell us how you want to play this. We'll meet you there.
        </p>
      </div>

      <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Method */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Preferred Contact Method <span className="text-red-500">*</span></h3>
            <div className="space-y-3">
              {CONTACT_METHODS.map(method => {
                const Icon = method.icon;
                return (
                  <div key={method.id} className="relative">
                    <input
                      type="radio"
                      id={method.id}
                      name="contactMethod"
                      value={method.id}
                      checked={formData.contactMethod === method.id}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <label
                      htmlFor={method.id}
                      className="flex items-start gap-4 p-4 rounded-lg border border-green-500/20 cursor-pointer transition-all duration-200 hover:bg-green-500/10 peer-checked:bg-green-500/20 peer-checked:border-green-500"
                    >
                      <Icon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{method.label}</div>
                        <div className="text-sm text-gray-400">{method.description}</div>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Best Time */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Best Time for Contact <span className="text-red-500">*</span></h3>
            <div className="space-y-3">
              {BEST_TIMES.map(time => {
                const Icon = time.icon;
                return (
                  <div key={time.id} className="relative">
                    <input
                      type="radio"
                      id={time.id}
                      name="bestTime"
                      value={time.id}
                      checked={formData.bestTime === time.id}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <label
                      htmlFor={time.id}
                      className="flex items-center gap-4 p-4 rounded-lg border border-green-500/20 cursor-pointer transition-all duration-200 hover:bg-green-500/10 peer-checked:bg-green-500/20 peer-checked:border-green-500"
                    >
                      <Icon className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span>{time.label}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {formError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {formError}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={goToPreviousStep}
              className="sm:w-1/3 bg-black/50 backdrop-blur-md text- white px-6 py-3 rounded-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center"
            >
              <ChevronLeft className="mr-2 w-5 h-5" />
              Back
            </button>
            <button
              type="submit"
              className="sm:w-2/3 group bg-green-500/80 hover:bg-green-400/80 text-black font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              Continue
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        {/* Why it matters */}
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-500 font-medium">✅ Why it matters:</p>
          <p className="text-gray-300 mt-2">
            Because we respect your time. We don't waste calls. We don't spam. You tell us what works—we execute.
          </p>
        </div>
      </div>
    </>
  );

  const renderBudgetForm = () => (
    <>
      <div className="text-center mb-12 animate-fade-in reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Can You Handle the Heat?</h1>
        <p className="text-xl text-gray-300 mb-4">
          🔥 We don't work with tire-kickers. Where do you stand?
        </p>
      </div>

      <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Budget */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">What's Your Budget for Automation Solutions? <span className="text-red-500">*</span></h3>
            <div className="space-y-3">
              {BUDGETS.map(budget => {
                const Icon = budget.icon;
                return (
                  <div key={budget.id} className="relative">
                    <input
                      type="radio"
                      id={budget.id}
                      name="budget"
                      value={budget.id}
                      checked={formData.budget === budget.id}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <label
                      htmlFor={budget.id}
                      className="flex items-start gap-4 p-4 rounded-lg border border-green-500/20 cursor-pointer transition-all duration-200 hover:bg-green-500/10 peer-checked:bg-green-500/20 peer-checked:border-green-500"
                    >
                      <Icon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{budget.label}</div>
                        <div className="text-sm text-gray-400">{budget.description}</div>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">How Soon Are You Looking to Implement? <span className="text-red-500">*</span></h3>
            <div className="space-y-3">
              {TIMELINES.map(timeline => {
                const Icon = timeline.icon;
                return (
                  <div key={timeline.id} className="relative">
                    <input
                      type="radio"
                      id={timeline.id}
                      name="timeline"
                      value={timeline.id}
                      checked={formData.timeline === timeline.id}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <label
                      htmlFor={timeline.id}
                      className="flex items-start gap-4 p-4 rounded-lg border border-green-500/20 cursor-pointer transition-all duration-200 hover:bg-green-500/10 peer-checked:bg-green-500/20 peer-checked:border-green-500"
                    >
                      <Icon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{timeline.label}</div>
                        <div className="text-sm text-gray-400">{timeline.description}</div>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {formError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {formError}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={goToPreviousStep}
              className="sm:w-1/3 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center"
            >
              <ChevronLeft className="mr-2 w-5 h-5" />
              Back
            </button>
            <button
              type="submit"
              className="sm:w-2/3 group bg-green-500/80 hover:bg-green-400/80 text-black font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              Continue
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>

        {/* Why it matters */}
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-500 font-medium">✅ Why it matters:</p>
          <p className="text-gray-300 mt-2">
            Because some people talk, some people act. We focus on the action-takers.
          </p>
        </div>
      </div>
    </>
  );

  const renderFinalStep = () => (
    <>
      <div className="text-center mb-12 animate-fade-in reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">What Happens Next?</h1>
        <p className="text-xl text-gray-300 mb-4">
          🔥 You've made it this far—now it's time to take action.
        </p>
      </div>

      <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {NEXT_STEPS.map(step => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  <input
                    type="radio"
                    id={step.id}
                    name="nextStep"
                    value={step.id}
                    checked={formData.nextStep === step.id}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor={step.id}
                    className="flex items-start gap-4 p-4 rounded-lg border border-green-500/20 cursor-pointer transition-all duration-200 hover:bg-green-500/10 peer-checked:bg-green-500/20 peer-checked:border-green-500"
                  >
                    <Icon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{step.label}</div>
                      <div className="text-sm text-gray-400">{step.description}</div>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>

          {formError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {formError}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={goToPreviousStep}
              className="sm:w-1/3 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center"
            >
              <ChevronLeft className="mr-2 w-5 h-5" />
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.nextStep}
              className="sm:w-2/3 group bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Processing...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Submit & Get Started
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Final Message */}
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-green-500 font-medium">✅ Your time is your most valuable asset.</p>
          <p className="text-gray-300 mt-2">
            Stop wasting it. Automate now.
          </p>
        </div>
      </div>
    </>
  );

  const renderSuccessStep = () => (
    <>
      <div className="text-center mb-12 animate-fade-in reveal">
        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
          <Check className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>
        <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Your automation journey has officially begun. We're analyzing your responses and will send your custom automation plan shortly.
        </p>
      </div>

      <div className="hover-card p-8 rounded-xl bg-black/30 backdrop-blur-md border border-green-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-aquire mb-4">What Happens Next?</h2>
            <p className="text-gray-300 mb-6">
              Our team is preparing your custom automation strategy. Here's what to expect:
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-green-500 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Initial Analysis</h3>
                <p className="text-gray-300">Our experts are reviewing your business needs and challenges.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-green-500 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Strategy Development</h3>
                <p className="text-gray-300">We're crafting a tailored automation plan specifically for your business.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-green-500 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-medium mb-1">Delivery</h3>
                <p className="text-gray-300">You'll receive your custom plan via email within 24-48 hours.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <a 
              href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
              target="_blank"
              className="group bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Strategy Call Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/home"
              className="group bg-black/50 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-black/70 transition-colors border border-green-500/50 flex items-center justify-center"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Helmet>
        <title>Deity_AI - Automation Survey</title>
        <meta name="description" content={getMetaDescription()} />
      </Helmet>
      <CustomCursor />
      
      {/* Spline Background */}
      <div className="fixed inset-0 z-0">
        <spline-viewer 
          loading-anim-type="none" 
          url="https://prod.spline.design/27GEQhq8YVQ3d8Zv/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <img src="/Assets/Logo.png" alt="Deity_AI Logo" className="h-24 w-auto" />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/30 z-50">
        <div 
          className="h-full bg-green-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Step Indicator */}
      <div className="fixed top-4 right-8 z-50 bg-black/50 backdrop-blur-md border border-green-500/20 px-4 py-2 rounded-full">
        <span className="text-green-500 font-medium">Step {
          currentStep === 'personal' ? '1' :
          currentStep === 'business' ? '2' :
          currentStep === 'automation' ? '3' :
          currentStep === 'challenge' ? '4' :
          currentStep === 'contact' ? '5' :
          currentStep === 'budget' ? '6' : 
          currentStep === 'final' ? '7' : 'Complete'
        } of 7</span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          {(() => {
            switch (currentStep) {
              case 'personal': return renderPersonalForm();
              case 'business': return renderBusinessForm();
              case 'automation': return renderAutomationForm();
              case 'challenge': return renderChallengeForm();
              case 'contact': return renderContactForm();
              case 'budget': return renderBudgetForm();
              case 'final': return renderFinalStep();
              case 'success': return renderSuccessStep();
              default: return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Survey;