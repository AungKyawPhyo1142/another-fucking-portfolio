"use client"

import { motion, useTransform, useScroll } from "motion/react"

export default function CircleLinesSVG() {
    const { scrollYProgress } = useScroll()

    // Fade out the entire background when reaching third section
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.6, 0.7], [1, 1, 0])

    // Transform values based on scroll progress - only fade out other circles
    const circleScale = useTransform(scrollYProgress, [0, 1], [1, 0.3])
    const circleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.2])
    const lineOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.3, 0])

    // Position transforms to move circles toward center
    const leftCircleX = useTransform(scrollYProgress, [0, 1], [300, 450])
    const rightCircleX = useTransform(scrollYProgress, [0, 1], [900, 750])
    const topLeftX = useTransform(scrollYProgress, [0, 1], [200, 400])
    const topLeftY = useTransform(scrollYProgress, [0, 1], [200, 300])
    const topRightX = useTransform(scrollYProgress, [0, 1], [1000, 800])
    const topRightY = useTransform(scrollYProgress, [0, 1], [200, 300])
    const bottomLeftX = useTransform(scrollYProgress, [0, 1], [200, 400])
    const bottomLeftY = useTransform(scrollYProgress, [0, 1], [600, 500])
    const bottomRightX = useTransform(scrollYProgress, [0, 1], [1000, 800])
    const bottomRightY = useTransform(scrollYProgress, [0, 1], [600, 500])
    return (
        <motion.div
            className="w-full h-screen bg-black flex items-center justify-center overflow-hidden"
            style={{ opacity: backgroundOpacity }}
        >
            <svg
                width="1200"
                height="800"
                viewBox="0 0 1200 800"
                className="w-full h-full"
                style={{ maxWidth: "100vw", maxHeight: "100vh" }}
            >
                {/* Define clipping path for right half of circle */}
                <defs>
                    <clipPath id="rightHalfClip">
                        <rect x="600" y="50" width="350" height="700" />
                    </clipPath>
                    <pattern id="purpleGradientPattern" patternUnits="userSpaceOnUse" width="700" height="700" x="250" y="50">
                        <motion.image
                            href="/images/gradient-three.jpg"
                            x="-100"
                            y="-100"
                            width="900"
                            height="900"
                            preserveAspectRatio="xMidYMid slice"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 60,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </pattern>


                </defs>

                {/* Background image circle - right half only */}
                <motion.circle
                    cx="600"
                    cy="400"
                    r="350"
                    fill="url(#purpleGradientPattern)"
                    clipPath="url(#rightHalfClip)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1.5, delay: 2.5 }}
                />

                {/* Large outer circle - main container */}
                <motion.circle
                    cx="600"
                    cy="400"
                    r="350"
                    id='center-main-circle'
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                />

                {/* Large circle - left side */}
                <motion.circle
                    cx={leftCircleX}
                    cy="400"
                    r="280"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                {/* Large circle - right side */}
                <motion.circle
                    cx={rightCircleX}
                    cy="400"
                    r="280"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1.0 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                {/* Medium circle - top left */}
                <motion.circle
                    cx={topLeftX}
                    cy={topLeftY}
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                {/* Medium circle - top right */}
                <motion.circle
                    cx={topRightX}
                    cy={topRightY}
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                {/* Medium circle - bottom left */}
                <motion.circle
                    cx={bottomLeftX}
                    cy={bottomLeftY}
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.6 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                {/* Medium circle - bottom right */}
                <motion.circle
                    cx={bottomRightX}
                    cy={bottomRightY}
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.8 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                {/* Central circle - medium size */}
                <motion.circle
                    cx="600"
                    cy="400"
                    r="150"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2.0 }}
                />

                {/* Small circles for intersection points */}
                <motion.circle
                    cx="450"
                    cy="300"
                    r="80"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 2.2 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                <motion.circle
                    cx="750"
                    cy="300"
                    r="80"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 2.4 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                <motion.circle
                    cx="450"
                    cy="500"
                    r="80"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 2.6 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                <motion.circle
                    cx="750"
                    cy="500"
                    r="80"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 2.8 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                {/* Connecting lines - horizontal */}
                <motion.line
                    x1="50"
                    y1="400"
                    x2="1150"
                    y2="400"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 3.0 }}
                    style={{ opacity: lineOpacity }}
                />

                {/* Connecting lines - vertical */}
                <motion.line
                    x1="600"
                    y1="50"
                    x2="600"
                    y2="750"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 3.2 }}
                    style={{ opacity: lineOpacity }}
                />

                {/* Diagonal connecting lines */}
                <motion.line
                    x1="200"
                    y1="200"
                    x2="1000"
                    y2="600"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 3.4 }}
                    style={{ opacity: lineOpacity }}
                />

                <motion.line
                    x1="200"
                    y1="600"
                    x2="1000"
                    y2="200"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 3.6 }}
                    style={{ opacity: lineOpacity }}
                />

                {/* Additional intersecting circles for complexity */}
                <motion.circle
                    cx="400"
                    cy="250"
                    r="120"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 3.8 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                <motion.circle
                    cx="800"
                    cy="550"
                    r="120"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 4.0 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                {/* Small accent circles */}
                <motion.circle
                    cx="350"
                    cy="350"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 4.2 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />

                <motion.circle
                    cx="850"
                    cy="450"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 4.4 }}
                    style={{
                        scale: circleScale,
                        opacity: circleOpacity
                    }}
                />
            </svg>
        </motion.div>
    )
}
