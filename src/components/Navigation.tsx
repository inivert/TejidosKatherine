'use client'

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
    <div className="container-custom py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-custom-pink">Bordados y Tejidos Katherine</h1>
        <div className="flex gap-6">
          <a href="#proyectos" className="text-gray-600 hover:text-custom-pink transition-colors">
            Proyectos
          </a>
          <a href="#contacto" className="text-gray-600 hover:text-custom-pink transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navigation
