'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Hexagon Background */}
      <motion.path
        d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z"
        fill="url(#hexGradient)"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      />
      
      {/* YAB Text */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <text
          x="50"
          y="60"
          fontSize="28"
          fontWeight="bold"
          fontFamily="Arial"
          textAnchor="middle"
          fill="white"
        >
          YAB
        </text>
      </motion.g>

      {/* Gradient Definitions */}
      <defs>
        <linearGradient
          id="hexGradient"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#9C90DE" />
          <stop offset="100%" stopColor="#2196F3" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
