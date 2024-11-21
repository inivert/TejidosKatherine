'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className="bg-gray-50 mt-20">
    <div className="container-custom py-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a 
            href="https://wa.me/+502XXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-500 transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          {new Date().getFullYear()} Bordados y Tejidos Katherine. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
