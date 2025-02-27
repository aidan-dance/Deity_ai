import React from 'react';
import { Cookie, Shield, Cog, Database, Settings, Lock, Globe, Mail, Info } from 'lucide-react';
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

const BrowserInstructions: React.FC<{
  browser: string;
  url: string;
}> = ({ browser, url }) => (
  <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-green-500/10">
    <span className="font-medium">{browser}</span>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 hover:text-green-400 flex items-center"
    >
      View Instructions
      <Globe className="ml-2 w-4 h-4" />
    </a>
  </div>
);

const Cookies: React.FC = () => {
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
                text="Cookies"
                className="text-4xl md:text-6xl font-bold mb-2"
              >
                <span className="text-green-500"> Policy</span>
              </RetroText>
              <p className="text-xl text-gray-300 mt-4">
                Effective Date: 04/02/2025
              </p>
            </div>

            <Section icon={<Info className="w-6 h-6 text-green-500" />} title="1. Introduction">
              <p>
                This Cookies Policy explains how Deity_AI ("Company," "we," "our," "us") uses cookies 
                and similar technologies to recognize you when you visit our website and use our services. 
                It explains what cookies are, why we use them, and how you can control them.
              </p>
            </Section>

            <Section icon={<Cookie className="w-6 h-6 text-green-500" />} title="2. What Are Cookies?">
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember user preferences, track site usage, and improve functionality.
              </p>
            </Section>

            <Section icon={<Cog className="w-6 h-6 text-green-500" />} title="3. How We Use Cookies">
              <p>We use cookies to:</p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Improve user experience and personalize content</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Enable essential website functionality</li>
                <li>Provide targeted advertising based on user interactions</li>
              </ul>
            </Section>

            <Section icon={<Database className="w-6 h-6 text-green-500" />} title="4. Types of Cookies We Use">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                  <p>Necessary for the website to function properly (e.g., authentication, security).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Performance Cookies</h4>
                  <p>Help us analyze how visitors use our website to improve functionality.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Functionality Cookies</h4>
                  <p>Allow us to remember user preferences (e.g., language settings).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Advertising Cookies</h4>
                  <p>Used to deliver relevant ads based on browsing behavior.</p>
                </div>
              </div>
            </Section>

            <Section icon={<Settings className="w-6 h-6 text-green-500" />} title="5. Managing Cookies">
              <p className="mb-4">
                You can manage or disable cookies through your browser settings. However, disabling 
                certain cookies may affect website functionality.
              </p>
              <p className="mb-4">To manage cookies, follow the instructions for your browser:</p>
              <div className="space-y-3">
                <BrowserInstructions
                  browser="Google Chrome"
                  url="https://support.google.com/chrome/answer/95647"
                />
                <BrowserInstructions
                  browser="Mozilla Firefox"
                  url="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                />
                <BrowserInstructions
                  browser="Safari"
                  url="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471"
                />
                <BrowserInstructions
                  browser="Microsoft Edge"
                  url="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                />
              </div>
            </Section>

            <Section icon={<Globe className="w-6 h-6 text-green-500" />} title="6. Third-Party Cookies">
              <p>
                Some cookies on our website are placed by third-party services, including analytics 
                and advertising providers. We do not control these cookies and recommend reviewing 
                their respective privacy policies.
              </p>
            </Section>

            <Section icon={<Lock className="w-6 h-6 text-green-500" />} title="7. Updates to This Policy">
              <p>
                We may update this Cookies Policy from time to time. Any changes will be posted on 
                this page with an updated "Effective Date."
              </p>
            </Section>

            <Section icon={<Mail className="w-6 h-6 text-green-500" />} title="8. Contact Us">
              <p>If you have any questions about our use of cookies, contact us at:</p>
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

export default Cookies;