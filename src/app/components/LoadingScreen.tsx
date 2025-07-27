'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onComplete: () => void;
    duration?: number;
}

export default function LoadingScreen({ onComplete, duration = 3000 }: LoadingScreenProps) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        // Start the percentage counter
        const interval = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, duration / 100);

        // Complete the loading after duration
        const timeout = setTimeout(() => {
            onComplete();
        }, duration + 200);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [duration, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                {/* SVG Circle Animation */}
                <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    className="transform -rotate-90"
                >
                    {/* Background circle */}
                    {/* <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          /> */}

                    {/* Four quarter circles expanding simultaneously */}
                    {/* Top quarter (0° to 90°) */}
                    <motion.path
                        d="M 100 20 A 80 80 0 0 1 180 100"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: duration / 1000,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Right quarter (90° to 180°) */}
                    <motion.path
                        d="M 180 100 A 80 80 0 0 1 100 180"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: duration / 1000,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Bottom quarter (180° to 270°) */}
                    <motion.path
                        d="M 100 180 A 80 80 0 0 1 20 100"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: duration / 1000,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Left quarter (270° to 360°) */}
                    <motion.path
                        d="M 20 100 A 80 80 0 0 1 100 20"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: duration / 1000,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Four starting points */}
                    {/* <motion.circle
            cx="100"
            cy="20"
            r="6"
            fill="white"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          />
          <motion.circle
            cx="180"
            cy="100"
            r="6"
            fill="white"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          />
          <motion.circle
            cx="100"
            cy="180"
            r="6"
            fill="white"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          />
          <motion.circle
            cx="20"
            cy="100"
            r="6"
            fill="white"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          /> */}
                </svg>

                {/* Purple Gradient Background Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="w-8 h-8 rounded-full overflow-hidden"
                        style={{
                            backgroundImage: 'url(/images/purple-gradient.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(2px)'
                        }}
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ opacity: 1, scale: 4 }}
                        transition={{
                            duration: duration / 1000,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* Percentage Counter */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="text-white text-xl font-hk-nova-light z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {percentage}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}