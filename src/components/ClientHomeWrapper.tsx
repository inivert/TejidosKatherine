'use client'

import ClientOnly from './ClientOnly'
import HomeContent from './HomeContent'

export default function ClientHomeWrapper() {
  return (
    <ClientOnly>
      <HomeContent />
    </ClientOnly>
  )
}
