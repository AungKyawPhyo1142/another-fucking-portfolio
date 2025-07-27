'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import MouseFollower from './components/MouseFollower';
import LoadingScreen from './components/LoadingScreen';
import CircleLinesSVG from './components/BackgroundCircleLines';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>

        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} duration={2000} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <MouseFollower />

          <nav className='py-10 h-[50px] w-full fixed flex items-center justify-between px-5 top-0 z-50'>
            <h1 className='text-sm font-hk-nova-light text-white uppercase hover-underline' data-name="aungkyaw">AungKyaw Phyo</h1>
            <h1 className='text-sm font-hk-nova-light text-white uppercase hover-underline' data-name="menu">[Menu]</h1>
          </nav>

          {/* Hero Section with Background */}
          <div className="relative h-screen overflow-hidden">
            {/* Background Circle Lines */}
            <div className="absolute inset-0 z-0">
              <CircleLinesSVG />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex items-center justify-center h-full flex-col gap-y-5">
              <h1 className="text-3xl font-noto-thin text-white">Noto Sans</h1>
              <h1 className="text-3xl font-noto-thin-italic text-white">Noto Sans Italic</h1>
              <h1 className="text-3xl font-alien font-thin text-white">Alien</h1>
              <h1 className="text-3xl font-alien font-hk-nova-light text-white">HK Nova</h1>
            </div>
          </div>
        </>
      )}
    </>
  );
}