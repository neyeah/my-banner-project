"use client"

import { useState } from "react"
import Banner from "@/components/banner"
import ControlPanel from "@/components/control-panel"

export default function Home() {
  const [bannerConfig, setBannerConfig] = useState({
    title: "Exploring Beautiful Destinations",
    subtitle: "Travel opens your mind to new experiences and cultures",
    backgroundColor: "#1e40af",
    textColor: "#ffffff",
    overlayOpacity: 0.6,
    fontSize: 3,
    imageIndex: 0,
    showMountains: true,
    showSun: true,
  })

  // Update banner config in real-time
  const updateBannerConfig = (newConfig) => {
    setBannerConfig((prev) => ({ ...prev, ...newConfig }))
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Banner config={bannerConfig} />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Customize Your Travel Banner</h2>
        <ControlPanel config={bannerConfig} updateConfig={updateBannerConfig} />
      </div>
    </main>
  )
}

