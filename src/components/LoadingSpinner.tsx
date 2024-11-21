'use client'

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-custom-pink border-t-transparent"></div>
      <div className="mt-4 text-center text-gray-600">Cargando...</div>
    </div>
  </div>
)

export default LoadingSpinner
