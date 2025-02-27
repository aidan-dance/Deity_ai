import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SplinePage: React.FC = () => {
  useEffect(() => {
    // Add Spline script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.71/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative min-h-screen">
        <spline-viewer 
          loading-anim-type="none" 
          url="https://prod.spline.design/K1UvaagSaQEmufIG/scene.splinecode"
          className="w-full h-screen"
        />
      </div>
      <Footer />
    </div>
  );
};

export default SplinePage;