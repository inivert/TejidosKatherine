import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

config.autoAddCss = false

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tejidos Artesanales - Guatemala',
  description: 'Decoraciones tejidas, juguetes y flores artesanales de Guatemala',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body 
        className={`${inter.className} min-h-screen bg-gray-50 antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
