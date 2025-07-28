'use client';

import { motion, useTransform, useScroll } from 'motion/react';

export default function ThirdSectionBackground() {
    const { scrollYProgress } = useScroll();
    
    // Fade in when reaching third section
    const backgroundOpacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);
    
    return (
        <motion.div 
            className="w-full h-screen flex items-center justify-center overflow-hidden"
            style={{ 
                opacity: backgroundOpacity,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
        >
            {/* You can add any background elements here */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
            
            {/* Optional: Add some animated elements */}
            <motion.div
                className="absolute w-96 h-96 rounded-full bg-white/5 blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <motion.div
                className="absolute w-64 h-64 rounded-full bg-purple-400/10 blur-2xl"
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </motion.div>
    );
}