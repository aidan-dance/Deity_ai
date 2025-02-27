import React from 'react';
import { Shield, Scale, FileText, Users, AlertCircle, Gavel, Clock, Mail, BookOpen } from 'lucide-react';
import BinaryBackground from '../components/BinaryBackground';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RetroText from '../components/RetroText';

const Section: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="hover-card p-8 rounded-lg bg-black/30 backdrop-blur-md border border-green-500/20 mb-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
        {icon}
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="space-y-4 text-gray-300">
      {children}
    </div>
  </div>
);

const Terms: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <BinaryBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-24 px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <RetroText
                text="Terms of"
                className="text-4xl md:text-6xl font-bold mb-2"
              >
                <span className="text-green-500"> Service</span>
              </RetroText>
              <p className="text-xl text-gray-300 mt-4">
                Effective Date: 04/02/2025
              </p>
            </div>

            <Section icon={<Shield className="w-6 h-6 text-green-500" />} title="1. Acceptance of Terms">
              <p>
                By accessing and using Deity_AI ("Company," "we," "our," "us"), you agree to be bound 
                by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not 
                use our services.
              </p>
            </Section>

            <Section icon={<BookOpen className="w-6 h-6 text-green-500" />} title="2. Services Provided">
              <p>
                Deity_AI provides AI automation solutions, including but not limited to AI chatbots, 
                voice AI, social media automation, and AI-powered email assistants ("Services").
              </p>
              <p className="mt-4">
                We reserve the right to modify or discontinue any part of our Services at any time.
              </p>
            </Section>

            <Section icon={<Users className="w-6 h-6 text-green-500" />} title="3. User Responsibilities">
              <p>By using our Services, you agree to:</p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Provide accurate and complete information when required.</li>
                <li>Use the Services in compliance with applicable laws and regulations.</li>
                <li>Not misuse, exploit, or reverse-engineer our AI automation tools.</li>
                <li>Not engage in fraudulent, abusive, or illegal activities through our Services.</li>
              </ul>
              <p className="mt-4 text-yellow-400">
                Violation of these responsibilities may result in the termination of your access to our Services.
              </p>
            </Section>

            <Section icon={<Scale className="w-6 h-6 text-green-500" />} title="4. Payment & Subscription">
              <p>Certain Services may require payment or subscription. By purchasing any paid Services, you agree to:</p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Pay all applicable fees and charges.</li>
                <li>Allow us to process payments through our third-party payment processors.</li>
                <li>Acknowledge that fees are non-refundable unless stated otherwise.</li>
              </ul>
            </Section>

            <Section icon={<FileText className="w-6 h-6 text-green-500" />} title="5. Intellectual Property Rights">
              <p>
                All content, trademarks, software, and technology provided by Deity_AI are owned by or 
                licensed to us. Users may not copy, distribute, or reproduce any part of our Services 
                without prior written consent.
              </p>
            </Section>

            <Section icon={<AlertCircle className="w-6 h-6 text-green-500" />} title="6. Disclaimer of Warranties">
              <p>
                Deity_AI provides Services "as is" and makes no warranties, expressed or implied, 
                regarding reliability, accuracy, or fitness for a particular purpose. We do not 
                guarantee uninterrupted access or error-free functionality.
              </p>
            </Section>

            <Section icon={<Shield className="w-6 h-6 text-green-500" />} title="7. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, Deity_AI shall not be liable for any indirect, 
                incidental, or consequential damages resulting from your use of our Services.
              </p>
            </Section>

            <Section icon={<AlertCircle className="w-6 h-6 text-green-500" />} title="8. Termination">
              <p>
                We reserve the right to suspend or terminate your access to our Services if you violate 
                these Terms or engage in any activity that may harm Deity_AI or its users.
              </p>
            </Section>

            <Section icon={<Gavel className="w-6 h-6 text-green-500" />} title="9. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of 
                [Insert Jurisdiction].
              </p>
            </Section>

            <Section icon={<Clock className="w-6 h-6 text-green-500" />} title="10. Changes to These Terms">
              <p>
                We may update these Terms from time to time. Any changes will be posted with an 
                updated "Effective Date."
              </p>
            </Section>

            <Section icon={<Mail className="w-6 h-6 text-green-500" />} title="11. Contact Information">
              <p>For any questions regarding these Terms, contact us at:</p>
              <p className="mt-2">
                <a href="mailto:support@deity-ai.co.uk" className="text-green-500 hover:text-green-400">
                  support@deity-ai.co.uk
                </a>
              </p>
            </Section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Terms;