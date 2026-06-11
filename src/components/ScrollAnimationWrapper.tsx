'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type AnimationType = 'fadeIn' | 'fadeInLeft' | 'fadeInRight' | 'fadeInUp' | 'fadeInDown' | 'scaleIn'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
}

const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function ScrollAnimationWrapper({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  className = '',
}: ScrollAnimationWrapperProps) {
  const selectedVariant = animationVariants[animation]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      variants={selectedVariant}
      className={className}
    >
      {children}
    </motion.div>
  )
}
