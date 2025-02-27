import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import ChatbotService from './pages/services/ChatbotService';
import VoiceCallerService from './pages/services/VoiceCallerService';
import SocialMediaService from './pages/services/SocialMediaService';
import EmailService from './pages/services/EmailService';
import WebsiteService from './pages/services/WebsiteService';
import SplinePage from './pages/SplinePage';
import Landing from './pages/Landing';
import Survey from './pages/Survey';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/services/ai-chatbot" element={<ChatbotService />} />
        <Route path="/services/ai-voice-caller" element={<VoiceCallerService />} />
        <Route path="/services/social-media-ai" element={<SocialMediaService />} />
        <Route path="/services/email-ai" element={<EmailService />} />
        <Route path="/services/website" element={<WebsiteService />} />
        <Route path="/spline" element={<SplinePage />} />
      </Routes>
    </Router>
  );
}

export default App;