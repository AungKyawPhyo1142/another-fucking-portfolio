"use client"

import { motion } from "motion/react"

export default function CircleLinesSVG() {
    return (
        <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
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
                    <pattern id="purpleGradientPattern" patternUnits="userSpaceOnUse" width="700" height="700">
                        <image
                            href="/images/purple-gradient.jpg"
                            x="0"
                            y="0"
                            width="700"
                            height="700"
                            preserveAspectRatio="xMidYMid slice"
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
                    transition={{ duration: 2, delay: 0.5 }}
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
                    cx="300"
                    cy="400"
                    r="280"
                    fill="none"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                />

                {/* Large circle - right side */}
                <motion.circle
                    cx="900"
                    cy="400"
                    r="280"
                    fill="none"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1.0 }}
                />

                {/* Medium circle - top left */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                />

                {/* Medium circle - top right */}
                <motion.circle
                    cx="1000"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                />

                {/* Medium circle - bottom left */}
                <motion.circle
                    cx="200"
                    cy="600"
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.6 }}
                />

                {/* Medium circle - bottom right */}
                <motion.circle
                    cx="1000"
                    cy="600"
                    r="180"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.8 }}
                />

                {/* Central circle - medium size */}
                <motion.circle
                    cx="600"
                    cy="400"
                    r="150"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
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
                />

                <motion.circle
                    cx="450"
                    cy="500"
                    r="80"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 2.6 }}
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
                />

                {/* Small accent circles */}
                <motion.circle
                    cx="350"
                    cy="350"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 4.2 }}
                />

                <motion.circle
                    cx="850"
                    cy="450"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 4.4 }}
                />
            </svg>
        </div>
    )
}
