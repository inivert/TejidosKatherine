'use client'

import dynamic from 'next/dynamic'
import LoadingSpinner from './LoadingSpinner'
import { Suspense } from 'react'

const HomeContent = dynamic(
  () => import('./HomeContent'),
  {
    loading: () => <LoadingSpinner />,
    ssr: true
  }
)

export default function ClientHomeWrapper() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeContent />
    </Suspense>
  )
}
