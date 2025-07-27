'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import MouseFollower from './components/MouseFollower';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        <LoadingScreen onComplete={handleLoadingComplete} duration={2000} />
        {/* {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} duration={2000} />
        )} */}
      </AnimatePresence>

      {!isLoading && (
        <>
          <MouseFollower />
          <div className="flex items-center justify-center h-screen flex-col gap-y-5">
            <h1 className="text-3xl font-noto-thin">Noto Sans</h1>
            <h1 className="text-3xl font-noto-thin-italic">Noto Sans Italic</h1>
            <h1 className="text-3xl font-alien font-thin">Alien</h1>
            <h1 className="text-3xl font-alien font-hk-nova-light">HK Nova</h1>
          </div>
        </>
      )}
    </>
  );
}