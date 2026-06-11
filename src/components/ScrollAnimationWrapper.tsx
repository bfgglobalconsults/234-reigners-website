'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ReactNode } from 'react'

type AnimationType = 'fadeIn' | 'fadeInLeft' | 'fadeInRight'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
}

export default function ScrollAnimationWrapper({
  children,
  animation = 'fadeIn',
  delay = 0,
  className = '',
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0'
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {}

  return (
    <div ref={ref} className={`${animationClass} ${className}`} style={delayStyle}>
      {children}
    </div>
  )
}
