import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import FinalistsSection from './sections/FinalistsSection'
import AboutSection from './sections/AboutSection'
import SDGsSection from './sections/SDGsSection'
import PrizesSection from './sections/PrizesSection'
import StoresSection from './sections/StoresSection'
import RulesSection from './sections/RulesSection'
import WorkshopSection from './sections/WorkshopSection'
import TimelineSection from './sections/TimelineSection'
import OrganizersSection from './sections/OrganizersSection'
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
        <FinalistsSection />  {/* 新增：決賽入選名單公告 */}
        <AboutSection />
        <RulesSection />
        <SDGsSection />       {/* 新增：聯合國永續發展目標 (SDGs) */}
        <PrizesSection />     {/* 移至 Theme 之後 */}
        <StoresSection />
        <WorkshopSection />   {/* 新增：增能工作坊 */}
        <TimelineSection />
        <OrganizersSection />
      </main>
      <Footer />
    </div>
  )
}
