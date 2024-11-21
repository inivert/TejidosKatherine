import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

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
      <body 
        className={`${inter.className} antialiased overscroll-none`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
