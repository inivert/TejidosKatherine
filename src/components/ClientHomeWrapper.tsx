'use client'

import dynamic from 'next/dynamic'
import LoadingSpinner from './LoadingSpinner'

const HomeContent = dynamic(
  () => import('./HomeContent'),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
    suspense: true
  }
)

export default function ClientHomeWrapper() {
  return <HomeContent />
}
