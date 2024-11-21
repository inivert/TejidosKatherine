import ClientOnly from '../components/ClientOnly'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'

export default function Home() {
  return (
    <>
      <ClientOnly>
        <Navigation />
      </ClientOnly>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <ClientOnly>
          <HomeContent />
        </ClientOnly>
      </main>
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </>
  )
}
