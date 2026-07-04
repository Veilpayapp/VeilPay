import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import GlassNavbar from './components/GlassNavbar';
import ScrollSequence from './components/ScrollSequence';
import MassiveTextScroll from './components/MassiveTextScroll';
import DownloadSection from './components/DownloadSection';
import SqueezeFooterReveal from './components/SqueezeFooterReveal';
import BrutalistFooter from './components/BrutalistFooter';
import ThemeToggle from './components/ThemeToggle';
import SmoothScroll from './components/SmoothScroll';
import NoiseOverlay from './components/NoiseOverlay';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <GlassNavbar />
      <NoiseOverlay />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        ) : (
          <>
            <SmoothScroll>
              <SqueezeFooterReveal footer={<BrutalistFooter />}>
                <GlassNavbar />
                <ThemeToggle />
                <ScrollSequence />
                <MassiveTextScroll />
                <DownloadSection />
              </SqueezeFooterReveal>
            </SmoothScroll>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
