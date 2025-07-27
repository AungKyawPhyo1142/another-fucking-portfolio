'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import MouseFollower from './components/MouseFollower';
import LoadingScreen from './components/LoadingScreen';
import CircleLinesSVG from './components/BackgroundCircleLines';
import Lenis from 'lenis';
import Link from 'next/link';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

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

          <nav className='py-10 h-[50px] w-full fixed flex items-center justify-between px-10 top-0 z-50'>
            <h1 className='text-sm font-hk-nova-light text-white uppercase hover-underline' data-name="aungkyaw">AungKyaw Phyo</h1>
            <h1 className='text-sm font-hk-nova-light text-white uppercase hover-underline' data-name="menu">[Menu]</h1>
          </nav>



          {/* Fixed Background Circle Lines */}
          <div className="fixed inset-0 z-0">
            <CircleLinesSVG />
          </div>



          {/* Hero Section */}
          <section id='hero' className="relative h-screen overflow-hidden">
            {/* Hero Content */}
            <div className="relative z-10 flex items-center justify-center h-full flex-col gap-y-5">
              <motion.p
                className='uppercase tracking-wider font-hk-nova-light text-xs absolute top-[48%] left-[30%] text-white'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4.8 }}
              >
                [FullStack Web Development]
              </motion.p>

              <motion.p
                className='uppercase tracking-wider font-hk-nova-light text-xs absolute top-[48%] left-[60%] text-white'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 5.0 }}
              >
                [Mentorship]
              </motion.p>

              <motion.p
                className='uppercase tracking-wider font-hk-nova-light text-xs absolute top-[25%] right-[5%] w-[300px] text-white'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 5.2 }}
              >
                I craft digital experiences that blend logic and intuition. building with purpose across design, code, systems, and storytelling to create real impact.
              </motion.p>
            </div>
          </section>

          {/* Additional Content Sections for Scrolling */}

          <div className='relative'>
            <section className="h-screen bg-blue-200/20 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-6xl font-alien mb-8">About</h2>
                <p className="text-xl font-hk-nova-light max-w-2xl">
                  Scroll to see the circle animation transform as you move through the content.
                </p>
              </div>
            </section>

            <section className="h-screen bg-purple-200/20 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-6xl font-alien mb-8">Work</h2>
                <p className="text-xl font-hk-nova-light max-w-2xl">
                  The circles will group together and form a unified design around the center.
                </p>
              </div>
            </section>

            <section className="h-screen bg-red-200/20 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-6xl font-alien mb-8">Contact</h2>
                <p className="text-xl font-hk-nova-light max-w-2xl">
                  Watch as the animation completes and creates a cohesive circular pattern.
                </p>
              </div>
            </section>
          </div>

          {/* Scroll to top button */}
          <p
            className='font-hk-nova-light text-xs !fixed text-wite bottom-5 right-5 hover-underline cursor-pointer z-[9999] uppercase'
            data-name="scrollBack"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            back to top
          </p>

        </>
      )}
    </>
  );
}