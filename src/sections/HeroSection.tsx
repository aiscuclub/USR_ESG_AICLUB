import { useEffect, useRef } from 'react'
import { ChevronDown, FileDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useBackgroundSlider } from '../hooks/useBackgroundSlider'

gsap.registerPlugin(ScrollTrigger)

const DOWNLOAD_PDF_LINK = '/aiclubusrwebsite/簡章.pdf'
const LEAVE_INFO_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSex6w7QHo3nrQQObKNm03gvcwPyUMrNgbIfAs2E4GJrkleryQ/viewform?usp=send_form'
const REGISTRATION_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSex6w7QHo3nrQQObKNm03gvcwPyUMrNgbIfAs2E4GJrkleryQ/viewform'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  const { images, current } = useBackgroundSlider()

  const heroRef  = useRef<HTMLElement>(null)
  const textRef  = useRef<HTMLDivElement>(null)
  const btnRef   = useRef<HTMLDivElement>(null)
  const logoRef  = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const text = textRef.current
    if (!hero || !text) return

    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isTablet : '(min-width: 768px) and (max-width: 1023px)',
        isMobile : '(max-width: 767px)',
      },
      (context) => {
        const { isDesktop, isTablet } = context.conditions as {
          isDesktop: boolean; isTablet: boolean
        }

        // Subtle scale — parallax feel rather than full zoom
        const scaleAmount = isDesktop ? 1.08 : isTablet ? 1.06 : 1.04

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            pin: true,
            pinSpacing: true,
            start: 'top top',
            end: '+=100vh',
            scrub: 0.8,
            anticipatePin: 1,
          },
        })

        // 0–15%: chrome UI fades away
        tl.to([logoRef.current, arrowRef.current], {
          opacity: 0, duration: 0.15, ease: 'power2.in',
        }, 0)
        tl.to(btnRef.current, {
          opacity: 0, y: -6, duration: 0.15, ease: 'power2.in',
        }, 0)

        // Background parallax: bg slightly shrinks as text stays
        tl.to('.hero-bg-slide.active', {
          scale: 0.97, ease: 'none', duration: 0.62,
        }, 0)

        // Text scales up subtly
        tl.fromTo(text, { scale: 1, opacity: 1 }, { scale: scaleAmount, ease: 'none', duration: 0.62 }, 0.10)

        // Fade text out
        tl.to(text, { opacity: 0, ease: 'power1.in', duration: 0.35 }, 0.65)

        return () => {
          ScrollTrigger.getAll().forEach(st => st.kill())
          tl.kill()
        }
      }
    )

    return () => mm.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Background — lighter overlay */}
      <div className="absolute inset-0 z-0">
        {images.map((src, i) => (
          <div
            key={src}
            className={`hero-bg-slide ${i === current ? 'active' : 'inactive'}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        {/* Updated gradient: from-black/30 via-black/18 to-black/50 */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/18 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">

        {/* Logo */}
        <div ref={logoRef} className="mb-5 md:mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl scale-150" />
            <img
              src="/aiclubusrwebsite/logo.jpg"
              alt="艋舺ESG競賽 Logo"
              className="relative w-20 h-20 md:w-28 md:h-28 rounded-full object-cover
                         shadow-2xl border-[3px] border-white/30 mx-auto animate-scale-in"
              style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
            />
          </div>
        </div>

        {/* GSAP scale target */}
        <div ref={textRef} className="hero-scroll-target">
          <div
            className="text-white/50 text-[0.6rem] tracking-[0.3em] mb-2 animate-fade-in"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards', fontFamily: 'var(--f-mono)' }}
          >
            2026 提案競賽
          </div>

          <h1
            className="hero-text-shadow text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
                       text-white tracking-tight leading-[1.15] mb-3 animate-fade-in-up"
            style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards', fontFamily: 'var(--f-serif)' }}
          >
            艋舺永續消費體驗
            <br />
            <span className="font-bold bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
              企劃書提案競賽
            </span>
          </h1>

          <p
            className="hero-text-shadow text-xs sm:text-sm md:text-base text-white/75
                       max-w-sm md:max-w-lg mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.55s', opacity: 0, animationFillMode: 'forwards' }}
          >
            2026年度主題：在地飲食文化・青銀友善・綠色飲食
          </p>
        </div>

        {/* CTA — single 立即報名 button only */}
        <div
          ref={btnRef}
          className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3.5 items-center animate-fade-in-up"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {/* 下載簡章 */}
          <a
            href={DOWNLOAD_PDF_LINK}
            className="w-full sm:w-auto px-6 py-3.5 matte-glass-dark text-white border border-white/20 rounded-2xl
                       hover:bg-white/12 hover:border-white/45 transition-all hover:scale-105 text-sm flex items-center justify-center gap-1.5"
          >
            <FileDown className="w-4 h-4 text-white/80" />
            下載簡章
          </a>

          {/* 留下資料 */}
          <a
            href={LEAVE_INFO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-emerald-500 text-white font-bold rounded-2xl
                       hover:bg-emerald-600 transition-all hover:scale-105
                       shadow-lg shadow-emerald-500/30 text-sm tracking-wide text-center"
          >
            留下資料－即時取得最新資訊
          </a>

          {/* 立即報名 */}
          <a
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-primary text-white font-bold rounded-2xl
                       hover:bg-primary-dark transition-all hover:scale-105
                       shadow-lg shadow-primary/40 text-sm tracking-wide text-center"
          >
            遞件報名
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <div
        ref={arrowRef}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce-arrow z-10"
      >
        <div className="flex flex-col items-center gap-1.5 text-white/35">
          <span className="text-[0.5rem] tracking-widest uppercase" style={{ fontFamily: 'var(--f-mono)' }}>Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 md:bottom-8 right-5 md:right-8 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/25'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
