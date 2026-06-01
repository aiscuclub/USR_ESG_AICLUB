import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ThemeSection from './sections/ThemeSection'
import SDGsSection from './sections/SDGsSection'
import PrizesSection from './sections/PrizesSection'
import StoresSection from './sections/StoresSection'
import RulesSection from './sections/RulesSection'
import WorkshopSection from './sections/WorkshopSection'
import TimelineSection from './sections/TimelineSection'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import './index.css'

export default function App() {
  useScrollAnimation()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'))
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-bg-warm">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RulesSection />
        <ThemeSection />
        <SDGsSection />       {/* 新增：SDGs 相關議題 */}
        <PrizesSection />     {/* 移至 Theme 之後 */}
        <StoresSection />
        <WorkshopSection />   {/* 新增：增能工作坊 */}
        <TimelineSection />
      </main>
      <Footer />
    </div>
  )
}
