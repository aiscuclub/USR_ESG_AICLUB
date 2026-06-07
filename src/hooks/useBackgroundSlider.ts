import { useState, useEffect, useCallback } from 'react'

const IMAGES = [
  '/USR_ESG_AICLUB/images/hero-1.jpg',
  '/USR_ESG_AICLUB/images/hero-2.jpg',
  '/USR_ESG_AICLUB/images/hero-3.jpg',
]

const INTERVAL = 5000

export function useBackgroundSlider() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  const advance = useCallback(() => {
    setPrev((c) => c)
    setCurrent((c) => (c + 1) % IMAGES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL)
    return () => clearInterval(timer)
  }, [advance])

  return { images: IMAGES, current, prev }
}
