'use client'

import { useSpring, animated } from '@react-spring/web'

const Navigation = () => {
  const titleSpring = useSpring({
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
    config: { tension: 300, friction: 20 }
  })

  const menuSpring = useSpring({
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
    config: { tension: 300, friction: 20 }
  })

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <animated.h1 
            style={titleSpring}
            className="text-xl md:text-2xl font-bold text-custom-pink hover:text-pink-500 transition-colors"
          >
            <a href="/">Bordados y Tejidos Katherine</a>
          </animated.h1>
          <animated.div 
            style={menuSpring}
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
          </animated.div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
