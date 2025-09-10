import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Austin Knobloch Portfolio',
  description: 'A product designer obsessed with how digital experiences work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



