'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

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
    const [displayText, setDisplayText] = useState('+');
    const [isScrambling, setIsScrambling] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Create smooth spring animations for the circle position
    const springX = useSpring(mouseX, { stiffness, damping });
    const springY = useSpring(mouseY, { stiffness, damping });

    const scrambleText = (finalText: string) => {
        setIsScrambling(true);
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}';
        const textLength = finalText.length;
        let iterations = 0;
        const maxIterations = 20;

        const interval = setInterval(() => {
            setDisplayText(
                finalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return finalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (iterations >= textLength) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iterations += 1 / 3;
        }, 50);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Add a slight delay to the mouse tracking
            setTimeout(() => {
                mouseX.set(e.clientX - size / 2);
                mouseY.set(e.clientY - size / 2);
            }, 200);
        };

        // Define hover text mappings
        const hoverTextMap: { [key: string]: string } = {
            'aungkyaw': '[index]',
            'menu': '[open]',
            'scrollBack': '[top]'
        };

        const handleMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement;
            const dataName = target.getAttribute('data-name');

            if (dataName && hoverTextMap[dataName]) {
                setIsHovering(true);
                scrambleText(hoverTextMap[dataName]);
            }
        };

        const handleMouseLeave = (e: Event) => {
            setIsHovering(false);
            scrambleText('+');
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Add event listeners for all elements with data-name attributes
        const hoverElements = document.querySelectorAll('[data-name]');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            hoverElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [mouseX, mouseY, size, delay]);

    return (
        <motion.div
            className={`fixed pointer-events-none z-[9999999] rounded-full bg-gradient-to-br from-[#FFFFFF33] to-[#FFFFFF1A] backdrop-blur-[15px] flex items-center justify-center`}
            style={{
                width: size,
                height: size,
                x: springX,
                y: springY,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: isHovering ? 1.2 : 1
            }}
            transition={{
                duration: 0.3,
                scale: { duration: 0.2, ease: "easeOut" }
            }}
        >
            <span className="text-white text-xs font-hk-nova-light select-none">
                {displayText}
            </span>
        </motion.div>
    );
}