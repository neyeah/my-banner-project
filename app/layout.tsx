import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Banner App',
  description: 'Created with Next and TypeScript',
  generator: 'Next.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
