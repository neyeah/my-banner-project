"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const travelImages = [
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920&text=Beach+Paradise",
  "/placeholder.svg?height=1080&width=1920&text=Mountain+Adventure",
  "/placeholder.svg?height=1080&width=1920&text=City+Exploration",
]

export default function Banner({ config }) {
  const { title, subtitle, backgroundColor, textColor, overlayOpacity, fontSize, imageIndex, showMountains, showSun } =
    config

  // Calculate font sizes based on the slider value
  const titleSize = `${1.5 + fontSize * 0.5}rem`
  const subtitleSize = `${1 + fontSize * 0.25}rem`

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={travelImages[imageIndex] || "/placeholder.svg"}
        alt="Travel destination"
        fill
        priority
        className="object-cover"
      />

      {/* Color Overlay */}
      <div
        className="absolute inset-0"
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
            duration: 4,
          }}
        />
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

