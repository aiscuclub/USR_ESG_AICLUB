import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: '首頁',     id: 'hero' },
  { label: '活動介紹', id: 'about' },
  { label: '競賽主題', id: 'theme' },
  { label: '獎金資訊', id: 'prizes' },
  { label: '合作店家', id: 'stores' },
  { label: '增能工作坊', id: 'workshop' },
  { label: '時程表',   id: 'timeline' },
  { label: '立即報名', id: 'register', isButton: true },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [collapsed, setCollapsed]   = useState(false)
  const [lastY, setLastY]           = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      if (y > lastY && y > 200) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-400 ${
          collapsed ? '-translate-y-[calc(100%+4px)]' : 'translate-y-0'
        }`}
      >
        <div className="mx-3 mt-3 md:mx-auto md:max-w-6xl">
          <div
            className={`bg-white rounded-2xl transition-shadow duration-300 ${
              scrolled ? 'shadow-lg shadow-black/8' : 'shadow-md shadow-black/5'
            }`}
          >
            <div className="px-5 h-16 flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center gap-3 hover:opacity-75 transition-opacity"
              >
                <img
                  src="/aiclubusrwebsite/logo.jpg"
                  alt="艋舺ESG競賽"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <span className="hidden sm:block text-sm font-bold text-gray-800 tracking-wide" style={{ fontFamily: 'var(--f-serif)' }}>
                  艋舺ESG競賽
                </span>
              </button>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {NAV_ITEMS.filter(i => !i.isButton).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary
                               transition-colors rounded-xl hover:bg-primary/6 tracking-wide"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe0_Jry0jSMZXgxY_g9apOG52u-GoWVuzyz3V_uZ7-_oyy9hw/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl
                             hover:bg-primary-dark transition-all hover:scale-105
                             shadow-sm shadow-primary/30 tracking-wide"
                >
                  立即報名
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="開啟選單"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute inset-3 bg-white rounded-3xl shadow-2xl transition-all duration-300 overflow-auto ${
            mobileOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-900 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col justify-center px-8 py-16 h-full">
            <div className="mb-10 flex justify-center">
              <img
                src="/aiclubusrwebsite/logo.jpg"
                alt="艋舺ESG競賽"
                className="w-20 h-20 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-center text-xs text-gray-400 mb-8 tracking-[0.3em] uppercase font-semibold">
              2026 艋舺商圈 ESG 永續消費競賽
            </p>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.isButton ? 'timeline' : item.id)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl
                              text-left transition-all active:scale-[0.98] ${
                    item.isButton
                      ? 'bg-primary text-white hover:bg-primary-dark font-black'
                      : 'text-gray-800 hover:bg-gray-100 font-semibold'
                  }`}
                >
                  <span className="text-lg">{item.label}</span>
                  <span className="text-gray-300 font-light">›</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
