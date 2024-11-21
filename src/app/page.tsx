import { Suspense } from 'react'
import ClientHomeWrapper from '../components/ClientHomeWrapper'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Suspense fallback={<LoadingSpinner />}>
        <ClientHomeWrapper />
      </Suspense>
    </div>
  )
}
