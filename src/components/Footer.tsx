'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className="bg-white border-t border-gray-100">
    <div className="container-custom py-8">
      <div className="flex flex-col items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-8"
        >
          <a 
            href="https://wa.me/+502XXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-500 transition-colors text-2xl"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors text-2xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors text-2xl"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Bordados y Tejidos Katherine.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </div>
  </footer>
)

export default Footer
