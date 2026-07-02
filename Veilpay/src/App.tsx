import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import GlassNavbar from './components/GlassNavbar';
import ScrollSequence from './components/ScrollSequence';
import ChatPaySection from './components/ChatPaySection';
import BrutalistFooter from './components/BrutalistFooter';
import SmoothScroll from './components/SmoothScroll';
import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white cursor-none">
      <CustomCursor />
      <NoiseOverlay />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        ) : (
          <>
            <SmoothScroll>
              <div key="main" className="relative">
                <GlassNavbar />
                <ScrollSequence />
                <ChatPaySection />
                <BrutalistFooter />
              </div>
            </SmoothScroll>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
