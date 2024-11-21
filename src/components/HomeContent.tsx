'use client'

import { useEffect, useRef, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const mockProjects = [
  {
    id: 1,
    title: 'Flores Tejidas',
    description: 'Hermosas flores tejidas a mano con diseños tradicionales guatemaltecos.',
    image: '/images/placeholder-1.svg',
  },
  {
    id: 2,
    title: 'Juguetes Artesanales',
    description: 'Juguetes únicos tejidos con amor y cuidado para los más pequeños.',
    image: '/images/placeholder-2.svg',
  },
  {
    id: 3,
    title: 'Decoraciones para el Hogar',
    description: 'Piezas decorativas que añaden un toque tradicional a cualquier espacio.',
    image: '/images/placeholder-3.svg',
  },
]

const projectVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      delay: i * 0.1,
      duration: 0.8
    }
  })
}

export default function HomeContent() {
  const typedRef = useRef<HTMLSpanElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])
  const typedInstanceRef = useRef<any>(null)

  useEffect(() => {
    let typed: any = null;
    
    const initTyped = async () => {
      if (!typedRef.current) return;
      
      try {
        const Typed = (await import('typed.js')).default;
        typed = new Typed(typedRef.current, {
          strings: [
            'Decoraciones tejidas',
            'Juguetes artesanales',
            'Flores hechas a mano',
          ],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true,
        });
        
        typedInstanceRef.current = typed;
      } catch (error) {
        console.error('Error initializing Typed.js:', error);
      }
    };

    initTyped();

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Hero Section */}
        <motion.section 
          style={{ y }}
          className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-custom-pink/20 to-custom-khaki/20"
        >
          <div className="container-custom text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Arte Tejido Guatemalteco
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 h-8"
            >
              <span ref={typedRef}></span>
            </motion.div>
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="btn-primary inline-block text-sm md:text-base"
            >
              Solicitar Diseño Personalizado
            </motion.a>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section id="proyectos" className="py-16 md:py-24 projects-section">
          <div className="container-custom px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16"
            >
              Nuestros Proyectos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {mockProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  custom={i}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={projectVariants}
                  className="project-card bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      priority
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16"
            >
              Contacto
            </motion.h2>
            <div className="max-w-md mx-auto">
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
                autoComplete="on"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-pink focus:border-transparent text-sm md:text-base transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-pink focus:border-transparent text-sm md:text-base transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    autoComplete="off"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-pink focus:border-transparent text-sm md:text-base transition-all duration-200"
                    required
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full btn-primary text-sm md:text-base py-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                </motion.button>
              </motion.form>

              <div className="mt-12 text-center">
                <p className="text-sm md:text-base text-gray-600 mb-6">O contáctanos directamente por WhatsApp:</p>
                <motion.a
                  href="https://wa.me/+502XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                  Contactar por WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  )
}
