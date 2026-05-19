import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import GlassNavbar from './components/GlassNavbar';
import ScrollSequence from './components/ScrollSequence';
import BrutalistFooter from './components/BrutalistFooter';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        ) : (
          <>
            <div key="main" className="relative">
              <GlassNavbar />
              <ScrollSequence />
              <BrutalistFooter />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
