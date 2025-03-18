"use client"

import { useState } from "react"
import Banner from "@/components/Banner"
import ControlPanel from "@/components/ControlPanel"

export default function Home() {
  const [bannerConfig, setBannerConfig] = useState({
    title: "Exploring the World of Web Development",
    subtitle: "Creating interactive experiences that solve real problems",
    backgroundColor: "#1e40af",
    textColor: "#ffffff",
    overlayOpacity: 0.7,
    fontSize: 3,
    imageIndex: 0,
    showMountains: true,
    showSun: true,
    animationSpeed: 2,
  })

  // Update banner config in real-time
  const updateBannerConfig = (newConfig) => {
    setBannerConfig((prev) => ({ ...prev, ...newConfig }))
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Banner config={bannerConfig} />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Customize Your Banner</h2>
        <ControlPanel config={bannerConfig} updateConfig={updateBannerConfig} />
      </div>
    </main>
  )
}

