import React from 'react';
import { Shield, Clock, Database, Users, Lock, Cookie, Link as LinkIcon, Mail } from 'lucide-react';
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

const Privacy: React.FC = () => {
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
                text="Privacy"
                className="text-4xl md:text-6xl font-bold mb-2"
              >
                <span className="text-green-500"> Policy</span>
              </RetroText>
              <p className="text-xl text-gray-300 mt-4">
                Effective Date: 04/02/2025
              </p>
            </div>

            <Section icon={<Shield className="w-6 h-6 text-green-500" />} title="1. Introduction">
              <p>
                Welcome to Deity_AI ("Company," "we," "our," "us"). Your privacy is important to us. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your personal 
                data when you use our AI automation solutions and services.
              </p>
              <p>
                By accessing or using Deity_AI, you consent to the practices outlined in this policy.
              </p>
            </Section>

            <Section icon={<Database className="w-6 h-6 text-green-500" />} title="2. Information We Collect">
              <div className="space-y-4">
                <p>We may collect the following types of information:</p>
                <div className="ml-6 space-y-3">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Personal Data</h4>
                    <p>Name, email address, phone number, company details, and payment information when you register, subscribe, or contact us.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Usage Data</h4>
                    <p>Information about how you interact with our website, AI automation tools, and customer support services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technical Data</h4>
                    <p>IP address, browser type, device information, and cookies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">AI Interaction Data</h4>
                    <p>Queries, responses, and interactions processed by our AI tools (anonymised where applicable).</p>
                  </div>
                </div>
                <p className="text-yellow-400">
                  We do not knowingly collect personal data from children under 16.
                </p>
              </div>
            </Section>

            <Section icon={<Users className="w-6 h-6 text-green-500" />} title="3. How We Use Your Data">
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide, improve, and personalise our AI automation services.</li>
                <li>Process transactions and send billing-related communications.</li>
                <li>Respond to inquiries and provide customer support.</li>
                <li>Monitor service usage, security, and performance.</li>
                <li>Comply with legal obligations and protect our rights.</li>
              </ul>
            </Section>

            <Section icon={<LinkIcon className="w-6 h-6 text-green-500" />} title="4. Data Sharing & Disclosure">
              <p>We do not sell personal data. However, we may share data with:</p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>
                  <span className="font-semibold text-white">Service Providers:</span> Third parties that help us deliver AI services (e.g., payment processors, cloud storage, analytics tools).
                </li>
                <li>
                  <span className="font-semibold text-white">Legal Compliance:</span> If required by law or necessary to enforce our Terms of Service.
                </li>
                <li>
                  <span className="font-semibold text-white">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets.
                </li>
              </ul>
            </Section>

            <Section icon={<Clock className="w-6 h-6 text-green-500" />} title="5. Data Retention">
              <p>
                We retain personal data only as long as necessary to fulfill the purposes outlined in this policy. 
                You may request deletion of your data at any time.
              </p>
            </Section>

            <Section icon={<Lock className="w-6 h-6 text-green-500" />} title="6. Your Rights & Choices">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Access, update, or delete your personal data.</li>
                <li>Withdraw consent for processing where applicable.</li>
                <li>Request a copy of your data in a structured format.</li>
                <li>Object to certain data processing activities.</li>
              </ul>
              <p className="mt-4">
                To exercise your rights, contact us at{' '}
                <a href="mailto:support@deity-ai.co.uk" className="text-green-500 hover:text-green-400">
                  support@deity-ai.co.uk
                </a>
              </p>
            </Section>

            <Section icon={<Shield className="w-6 h-6 text-green-500" />} title="7. Security Measures">
              <p>
                We implement industry-standard security measures to protect your data. 
                However, no method of transmission is 100% secure.
              </p>
            </Section>

            <Section icon={<Cookie className="w-6 h-6 text-green-500" />} title="8. Cookies & Tracking Technologies">
              <p>
                We use cookies to enhance user experience and analyse traffic. You can manage cookie 
                preferences through your browser settings. For more details, see our Cookies Policy.
              </p>
            </Section>

            <Section icon={<LinkIcon className="w-6 h-6 text-green-500" />} title="9. Third-Party Links">
              <p>
                Our services may contain links to third-party websites. We are not responsible for 
                their privacy practices.
              </p>
            </Section>

            <Section icon={<Clock className="w-6 h-6 text-green-500" />} title="10. Updates to This Privacy Policy">
              <p>
                We may update this policy from time to time. Changes will be posted on this page 
                with an updated "Effective Date."
              </p>
            </Section>

            <Section icon={<Mail className="w-6 h-6 text-green-500" />} title="11. Contact Us">
              <p>If you have any questions about this Privacy Policy, contact us at:</p>
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

export default Privacy;