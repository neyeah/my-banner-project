"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Define the banner configuration interface
interface BannerConfig {
  title: string
  subtitle: string
  backgroundColor: string
  textColor: string
  overlayOpacity: number
  fontSize: number
  imageIndex: number
  showMountains: boolean
  showSun: boolean
  animationSpeed?: number
}

// Define the component props interface
interface BannerProps {
  config: BannerConfig
}

// Define particle type
interface Particle {
  id: number
  left: string
  top: string
  duration: number
}

// Local placeholder images that work without configuration
const bannerImages = [
  "https://res.cloudinary.com/dxhx45ing/image/upload/v1742311690/pexels-photo-546819_wsgr9d.jpg",
  "https://res.cloudinary.com/dxhx45ing/image/upload/v1742311776/pexels-photo-326502_mfuywt.jpg",
  "https://res.cloudinary.com/dxhx45ing/image/upload/v1739539793/weld-hot-soldering-radio-welder-73833_xxktzj.jpg",
  "https://res.cloudinary.com/dxhx45ing/image/upload/v1739800941/pexels-photo-7743261_w4rajm.jpg",
]

export default function Banner({ config }: BannerProps) {
  const {
    title,
    subtitle,
    backgroundColor,
    textColor,
    overlayOpacity,
    fontSize,
    imageIndex,
    showMountains,
    showSun,
    animationSpeed = 2,
  } = config

  // State to track client-side rendering
  const [isClient, setIsClient] = useState(false)

  // State for particles
  const [particles, setParticles] = useState<Particle[]>([])

  // Generate particles only on the client side
  useEffect(() => {
    setIsClient(true)

    // Generate random particles
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: animationSpeed + Math.random() * 2,
    }))

    setParticles(newParticles)
  }, [animationSpeed])

  // Calculate font sizes based on the slider value
  const titleSize = `${1.5 + fontSize * 0.5}rem`
  const subtitleSize = `${1 + fontSize * 0.25}rem`

  // Animation speed factor
  const speedFactor = 6 - animationSpeed

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${bannerImages[imageIndex % bannerImages.length]})`,
        }}
      />

      {/* Color Overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundColor: backgroundColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Decorative Elements */}
      {showMountains && (
        <motion.div
          className="absolute bottom-0 w-full h-[20%]"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <svg viewBox="0 0 1440 320" className="w-full h-full">
            <path
              fill="#ffffff"
              fillOpacity="0.3"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      )}

      {showSun && (
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 rounded-full"
          style={{ backgroundColor: textColor }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: speedFactor,
          }}
        />
      )}

      {/* Floating Particles - Only rendered on client side */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: textColor,
                opacity: 0.3,
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: particle.duration,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="font-bold mb-4 max-w-4xl"
          style={{
            color: textColor,
            fontSize: titleSize,
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="max-w-2xl"
          style={{
            color: textColor,
            fontSize: subtitleSize,
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  )
}

