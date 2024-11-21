'use client'

import { motion } from 'framer-motion'

const Navigation = () => (
  <header className="fixed top-0 left-0 right-0 z-50">
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold text-custom-pink hover:text-pink-500 transition-colors"
          >
            <a href="/" className="block">Bordados y Tejidos Katherine</a>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6 md:gap-8"
          >
            <a 
              href="#proyectos" 
              className="text-gray-600 hover:text-custom-pink transition-colors font-medium"
            >
              Proyectos
            </a>
            <a 
              href="#contacto" 
              className="text-gray-600 hover:text-custom-pink transition-colors font-medium"
            >
              Contacto
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  </header>
)

export default Navigation
