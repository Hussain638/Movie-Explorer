import React from 'react';
import { motion } from 'framer-motion';

export default function UniqueCinematicBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        background: '#0d1926',
      }}
    >
      {/* Glitchy Shifting Gradient */}
      <motion.div
        animate={{
          opacity: [0.85, 0.95, 0.9, 0.95, 0.85],
          filter: [
            'contrast(1.2) saturate(1.2)',
            'contrast(1) saturate(1.5)',
            'contrast(1.3) saturate(1)',
            'contrast(1) saturate(1.3)',
            'contrast(1.2) saturate(1.2)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(145deg,rgb(25, 55, 109),rgb(34, 67, 123), #000000)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Cinematic Grain Overlay */}
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
          backgroundSize: 'cover',
          opacity: 0.1,
          zIndex: 1,
        }}
      />

      {/* Rotating Particle Starfield */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
          pointerEvents: 'none',
        }}
      >
        <svg
          viewBox="0 0 800 800"
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.18,
          }}
        >
          {Array.from({ length: 120 }).map((_, i) => {
            const x = Math.random() * 800;
            const y = Math.random() * 800;
            const r = Math.random() * 1.8;
            return <circle key={i} cx={x} cy={y} r={r} fill="#ffffff" />;
          })}
        </svg>
      </motion.div>

      {/* Central Radiant SVG with Dynamic Lines */}
      <svg
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.55,
          zIndex: 2,
        }}
      >
        <defs>
          <linearGradient id="radiantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3c72">
              <animate attributeName="stop-color" values="#1e3c72;#2a5298;#1e3c72" dur="12s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#000000">
              <animate attributeName="stop-color" values="#000000;#1a1a2e;#000000" dur="12s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i * 360) / 40;
          return (
            <line
              key={i}
              x1="720"
              y1="450"
              x2="1440"
              y2="450"
              stroke="url(#radiantGradient)"
              strokeWidth={i % 2 === 0 ? 2 : 1}
              transform={`rotate(${angle},720,450)`}
              filter="url(#glow)"
              strokeOpacity="0.5"
            />
          );
        })}
      </svg>

      {/* Dynamic Film Strip Overlay */}
      <motion.svg
        viewBox="0 0 1200 120"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '120px',
          opacity: 0.15,
          zIndex: 3,
        }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.rect
            key={i}
            x={i * 75}
            y="0"
            width="65"
            height="120"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.2"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{
              duration: 3,
              delay: i * 0.18,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.svg>

      {/* Subtle Moving Lens Flare */}
      <motion.div
        animate={{
          x: ['0%', '30%', '-30%', '0%'],
          y: ['0%', '-20%', '20%', '0%'],
          opacity: [0.15, 0.55, 0.55, 0.15],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '170px',
          height: '170px',
          top: '40%',
          left: '60%',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.14)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />

      {/* Additional Animated Grit Overlay */}
      <motion.div
        animate={{ opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
          opacity: 0.09,
          zIndex: 5,
        }}
      />
    </div>
  );
}