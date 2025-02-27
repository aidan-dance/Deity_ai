import React, { useEffect } from 'react';
import { Calendar, Zap, Clock, TrendingUp, Users, Check, ArrowRight } from 'lucide-react';
import BinaryBackground from '../components/BinaryBackground';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RetroText from '../components/RetroText';

const Booking: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Add Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BinaryBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-green-500 mb-6">
              <Calendar className="w-6 h-6" />
              <span>FEEL THE RUSH OF SUCCESS</span>
            </div>
            <RetroText
              text="Experience The Electric Thrill Of"
              className="text-4xl md:text-6xl font-bold mb-2"
            >
              <span className="text-green-500"> Unstoppable Growth</span>
            </RetroText>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Feel the surge of excitement as you watch your business transform into a 
              24/7 revenue-generating powerhouse. Your future self will thank you for 
              taking action today.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="hover-card p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-green-500">15min</h3>
                  <p className="text-gray-300 mt-2">
                    is all it takes to transform your business
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-green-500">3.5x</h3>
                  <p className="text-gray-300 mt-2">
                    average revenue increase for our clients
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-green-500">24/7</h3>
                  <p className="text-gray-300 mt-2">
                    automated revenue generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="hover-card p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Here's What You'll <span className="text-green-500">Discover</span> On Your Call:
                  </h2>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Your Custom AI Blueprint</h4>
                        <p className="text-gray-300">Get a personalized strategy to automate your business and multiply your revenue</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Hidden Revenue Opportunities</h4>
                        <p className="text-gray-300">Discover untapped profit centers in your business that AI can unlock instantly</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Competitive Advantage Analysis</h4>
                        <p className="text-gray-300">Learn what your competitors are doing and how to stay 10 steps ahead</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <Zap className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-green-500">BONUS: Fast Action Takers Get</h4>
                        <p className="text-gray-300">• Exclusive 14-Day FREE Trial<br />• Priority Setup & VIP Onboarding<br />• Custom AI Strategy Blueprint</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-md text-center space-y-8">
                    <h3 className="text-2xl font-bold">
                      Schedule Your <span className="text-green-500">FREE</span> Strategy Call Now
                    </h3>
                    <p className="text-gray-300">
                      Click below to find a time that works best for you. Our calendar fills up fast, 
                      so don't wait!
                    </p>
                    <a 
                      href="https://calendly.com/aidandance1/chatbot-_power_call-clone-1" 
                      target="_blank" 
                      className="calendly-button group bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Your Strategy Call
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-green-500 font-medium">
                      ⚡ Limited Time: Next 7 Clients Get Exclusive Access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hover-card p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20">
              <h2 className="text-3xl font-bold mb-4">
                Feel The Power Of <span className="text-green-500">Limitless Growth</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                These calls are filling up fast, and spots are strictly limited. 
                The opportunity cost of waiting could be your business's future.
              </p>
              <div className="space-y-4">
                <p className="text-green-500 font-bold">
                  ⚡ Next 7 Clients Get Exclusive VIP Access
                </p>
                <p className="text-sm text-gray-400">
                  No obligation. 100% free strategy call. Limited spots available.
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

export default Booking;