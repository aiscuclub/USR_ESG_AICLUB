import { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'

const DOWNLOAD_PDF_LINK = '/aiclubusrwebsite/簡章.pdf'
const LEAVE_INFO_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSex6w7QHo3nrQQObKNm03gvcwPyUMrNgbIfAs2E4GJrkleryQ/viewform?usp=send_form'
const REGISTRATION_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSex6w7QHo3nrQQObKNm03gvcwPyUMrNgbIfAs2E4GJrkleryQ/viewform'

const NAV_ITEMS = [
  { label: '首頁',     id: 'hero' },
  { label: '活動介紹', id: 'about' },
  { label: '獎金資訊', id: 'prizes' },
  { label: '合作店家', id: 'stores' },
  { label: '增能工作坊', id: 'workshop' },
  { label: '競賽流程',   id: 'timeline' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <header className="fixed top-0 w-full z-50 transition-all duration-300">
        <div className="mx-3 mt-3 md:mx-auto md:max-w-7xl">
          <div
            className={`bg-white rounded-2xl transition-shadow duration-300 ${
              scrolled ? 'shadow-lg shadow-black/8' : 'shadow-md shadow-black/5'
            }`}
          >
            <div className="px-5 h-16 flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center gap-2.5 hover:opacity-75 transition-opacity"
              >
                <img
                  src="/aiclubusrwebsite/logo.jpg"
                  alt="永續消費體驗企劃書提案競賽"
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-gray-100 shrink-0"
                />
                <span className="flex flex-col leading-tight text-left" style={{ fontFamily: 'var(--f-serif)' }}>
                  <span className="text-xs md:text-sm font-bold text-gray-800 tracking-wide">艋舺永續消費體驗</span>
                  <span className="text-xs md:text-sm font-bold text-gray-800 tracking-wide">企劃書提案競賽</span>
                </span>
              </button>


              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1.5">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="px-3 py-2 text-base font-semibold text-gray-600 hover:text-primary
                               transition-colors rounded-xl hover:bg-primary/6 tracking-wide"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* 下載簡章 */}
                <a
                  href={DOWNLOAD_PDF_LINK}
                  className="ml-1 px-4 py-2 border border-gray-300 text-gray-700 hover:text-primary hover:border-primary text-base font-bold rounded-xl transition-all hover:scale-105 flex items-center gap-1"
                >
                  <FileDown className="w-4 h-4" />
                  下載簡章
                </a>

                {/* 留下資料 */}
                <a
                  href={LEAVE_INFO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-base font-bold rounded-xl transition-all hover:scale-105 shadow-sm shadow-emerald-500/20 tracking-wide"
                >
                  留下資料
                </a>

                {/* 立即報名 */}
                <a
                  href={REGISTRATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white text-base font-bold rounded-xl hover:bg-primary-dark transition-all hover:scale-105 shadow-sm shadow-primary/20 tracking-wide"
                >
                  遞件報名
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="開啟選單"
              >
                <Menu className="w-6 h-6" />
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

          <div className="flex flex-col px-6 py-12 min-h-full justify-between">
            <div>
              <div className="mb-6 flex justify-center">
                <img
                  src="/aiclubusrwebsite/logo.jpg"
                  alt="永續消費體驗企劃書提案競賽"
                  className="w-20 h-20 rounded-full object-cover shadow-lg"
                />
              </div>
              <p className="text-center text-xs text-gray-500 mb-6 tracking-[0.2em] uppercase font-bold leading-relaxed px-4">
                2026 艋舺永續消費體驗企劃書提案競賽
              </p>
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full flex items-center justify-between px-5 py-3 rounded-xl
                               text-left transition-all active:scale-[0.98] text-gray-800 hover:bg-gray-100 font-semibold"
                  >
                    <span className="text-base">{item.label}</span>
                    <span className="text-gray-300 font-light">›</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-8 space-y-3">
              {/* 下載簡章 */}
              <a
                href={DOWNLOAD_PDF_LINK}
                className="w-full py-3 border border-gray-300 text-gray-700 font-bold rounded-xl
                           flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-base"
              >
                <FileDown className="w-5 h-5 text-gray-500" />
                下載簡章
              </a>

              {/* 留下資料 */}
              <a
                href={LEAVE_INFO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-500 text-white font-bold rounded-xl
                           flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all text-base
                           shadow-md shadow-emerald-500/10 text-center"
              >
                留下資料
              </a>

              {/* 立即報名 */}
              <a
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-primary text-white font-bold rounded-xl
                           flex items-center justify-center gap-2 hover:bg-primary-dark transition-all text-base
                           shadow-md shadow-primary/10 text-center"
              >
                遞件報名
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
