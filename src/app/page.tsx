import ClientOnly from '../components/ClientOnly'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientOnly>
        <Navigation />
        <main className="flex-grow">
          <HomeContent />
        </main>
        <Footer />
      </ClientOnly>
    </div>
  )
}
