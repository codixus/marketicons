import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { Features } from '@/components/features'
import { LogoSearch } from '@/components/logo-search'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Features />
      <LogoSearch />
      <Footer />
    </main>
  )
}