import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

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
        className={`${inter.className} min-h-screen bg-white antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
