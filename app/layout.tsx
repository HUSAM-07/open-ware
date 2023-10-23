import type { Metadata } from 'next'


import './globals.css'
import navbar from '@/components/navbar'
import footer from '@/components/footer'


export const metadata: Metadata = {
  title: 'OpenWare',
  description: 'An open-source softwares and app directory website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <navbar />
        <main>
          {children}
          </main>
        <footer />
      </body>
    </html>
  )
}
