'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

interface MouseFollowerProps {
    size?: number;
    color?: string;
    delay?: number;
    stiffness?: number;
    damping?: number;
}

export default function MouseFollower({
    size = 100,
    color = 'bg-blue-500',
    delay = 0.1,
    stiffness = 80,
    damping = 15
}: MouseFollowerProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Create smooth spring animations for the circle position
    const springX = useSpring(mouseX, { stiffness, damping });
    const springY = useSpring(mouseY, { stiffness, damping });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Add a slight delay to the mouse tracking
            setTimeout(() => {
                mouseX.set(e.clientX - size / 2);
                mouseY.set(e.clientY - size / 2);
            }, 200);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY, size, delay]);

    return (
        <motion.div
            className={`fixed pointer-events-none z-[9999999] rounded-full bg-gradient-to-br from-[#FFFFFF33] to-[#FFFFFF1A] backdrop-blur-[15px]`}
            style={{
                width: size,
                height: size,
                x: springX,
                y: springY,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        />
    );
}