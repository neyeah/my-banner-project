"use client"

import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
interface ControlPanelProps {
  config: BannerConfig
  updateConfig: (newConfig: Partial<BannerConfig>) => void
}

export default function ControlPanel({ config, updateConfig }: ControlPanelProps) {
  // Handle text changes
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig({ [e.target.name]: e.target.value })
  }

  // Handle color changes
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig({ [e.target.name]: e.target.value })
  }

  // Handle slider changes
  const handleSliderChange = (name: string, value: number[]) => {
    updateConfig({ [name]: value[0] })
  }

  // Handle switch changes
  const handleSwitchChange = (name: string, checked: boolean) => {
    updateConfig({ [name]: checked })
  }

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    updateConfig({ [name]: Number.parseInt(value) })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Banner Controls</CardTitle>
        <CardDescription>Customize your banner in real-time with these controls</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
            <TabsTrigger value="effects">Effects</TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Banner Title</Label>
              <Input
                id="title"
                name="title"
                value={config.title}
                onChange={handleTextChange}
                placeholder="Enter banner title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subtitle">Banner Subtitle</Label>
              <Input
                id="subtitle"
                name="subtitle"
                value={config.subtitle}
                onChange={handleTextChange}
                placeholder="Enter banner subtitle"
              />
            </div>

            <div className="space-y-2">
              <Label>Font Size: {config.fontSize.toFixed(1)}</Label>
              <Slider
                defaultValue={[config.fontSize]}
                min={1}
                max={5}
                step={0.1}
                onValueChange={(value) => handleSliderChange("fontSize", value)}
              />
            </div>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="backgroundColor">Background Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="backgroundColor"
                    name="backgroundColor"
                    type="color"
                    value={config.backgroundColor}
                    onChange={handleColorChange}
                    className="w-12 h-10 p-1"
                  />
                  <Input
                    value={config.backgroundColor}
                    onChange={handleColorChange}
                    name="backgroundColor"
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="textColor">Text Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="textColor"
                    name="textColor"
                    type="color"
                    value={config.textColor}
                    onChange={handleColorChange}
                    className="w-12 h-10 p-1"
                  />
                  <Input value={config.textColor} onChange={handleColorChange} name="textColor" className="flex-1" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Overlay Opacity: {config.overlayOpacity.toFixed(1)}</Label>
              <Slider
                defaultValue={[config.overlayOpacity]}
                min={0}
                max={1}
                step={0.1}
                onValueChange={(value) => handleSliderChange("overlayOpacity", value)}
              />
            </div>
          </TabsContent>

          {/* Image Tab */}
          <TabsContent value="image" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="imageSelect">Background Image</Label>
              <Select
                value={config.imageIndex.toString()}
                onValueChange={(value) => handleSelectChange("imageIndex", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an image" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Code</SelectItem>
                  <SelectItem value="1">Design</SelectItem>
                  <SelectItem value="2">Create</SelectItem>
                  <SelectItem value="3">Innovate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          {/* Effects Tab */}
          <TabsContent value="effects" className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="showMountains">Show Mountains</Label>
              <Switch
                id="showMountains"
                checked={config.showMountains}
                onCheckedChange={(checked) => handleSwitchChange("showMountains", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="showSun">Show Sun</Label>
              <Switch
                id="showSun"
                checked={config.showSun}
                onCheckedChange={(checked) => handleSwitchChange("showSun", checked)}
              />
            </div>

            {config.animationSpeed !== undefined && (
              <div className="space-y-2">
                <Label>Animation Speed: {config.animationSpeed.toFixed(1)}</Label>
                <Slider
                  defaultValue={[config.animationSpeed]}
                  min={1}
                  max={5}
                  step={0.1}
                  onValueChange={(value) => handleSliderChange("animationSpeed", value)}
                />
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

