import React, { useEffect, useRef, useState } from 'react'

// LandingPage component — uses Tailwind utility classes only.
// Includes Google Fonts via <link> elements rendered inside the component.
export default function LandingPage() {
  const images = [
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1543332164-5d9f45d6f9f7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80'
  ]

  // Carousel refs/state
  const carouselRef = useRef(null)
  const slidesRef = useRef([])
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-advance one slide at a time; pause when isPaused or when page hidden
  useEffect(() => {
    let interval = null
    const start = () => {
      interval = setInterval(() => {
        setActiveIndex((s) => (s + 1) % images.length)
      }, 3500)
    }

    if (!isPaused) start()

    const onVisibility = () => {
      if (document.hidden) {
        clearInterval(interval)
      } else if (!isPaused) {
        clearInterval(interval)
        start()
      }
    }

    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [isPaused, images.length])

  // When activeIndex changes, scroll that slide into center
  useEffect(() => {
    const node = slidesRef.current[activeIndex]
    if (node && carouselRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [activeIndex])

  // no modal here; menu is a dedicated page

  return (
    <div className="min-h-screen bg-[#2f4f3f] text-[#f5f5dc] flex flex-col">
      {/* Google Fonts — injected here so this single component includes its font imports */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Inter:wght@300;400;600&display=swap"
      />

      <header className="relative flex-1 flex items-center justify-center px-6">
        {/* Top-right navigation bar */}
        <nav aria-label="Primary" className="absolute top-6 right-6 sm:top-8 sm:right-8">
          <ul className="flex items-center gap-6 text-sm sm:text-base md:text-lg">
            {['FAQ', 'Contact', 'Gift Cards'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[#c9a236] hover:text-[#e6c76e] hover:underline transition-colors duration-150"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="uppercase tracking-wider">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="max-w-5xl w-full flex flex-col items-center text-center gap-8 py-20">
          {/* Logo + Heading */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-transparent">
              {/* simple hand-drawn house SVG placeholder */}
              <svg
                width="56"
                height="56"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="stroke-current text-[#f5f5dc]"
              >
                <path
                  d="M8 28 L32 8 L56 28"
                  stroke="#f5f5dc"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <rect
                  x="14"
                  y="28"
                  width="36"
                  height="26"
                  rx="3"
                  stroke="#f5f5dc"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path d="M34 40v8" stroke="#f5f5dc" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M26 40v8" stroke="#f5f5dc" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl leading-tight"
              style={{ fontFamily: '"Inter", cursive' }}
            >
              Globake
            </h1>
          </div>

          {/* (Navigation moved to the top-right) */}

          {/* Menu removed: dedicated menu page and modal were deleted per request */}

          {/* Address + Hours */}
          <div
            className="text-sm sm:text-base text-[#f5f5dc]/90 mt-2"
            style={{ fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
          >
            <p className="font-medium">1047 Bedford Ave, Brooklyn</p>
            <p className="mt-1 text-sm opacity-90">Wednesday–Monday 8AM–4PM (Closed Tuesday)</p>
          </div>
        </main>
      </header>

      {/* Carousel: scroll one image at a time, pause on hover/focus, enlarge on hover */}
      <section className="w-full px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="sr-only">Gallery</h2>

          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="overflow-x-auto scroll-smooth -mx-2"
            style={{ WebkitOverflowScrolling: 'touch' }}
            tabIndex={0}
            aria-label="Bakery photo carousel"
          >
            <div className="flex items-center gap-4 px-2 py-6">
              {images.map((src, i) => {
                const isActive = i === activeIndex
                const isAdjacent = i === (activeIndex - 1 + images.length) % images.length || i === (activeIndex + 1) % images.length
                return (
                  <div
                    key={i}
                    ref={(el) => (slidesRef.current[i] = el)}
                    className={`flex-none px-2 transition-transform duration-500 ${
                      isActive ? 'scale-105 z-20' : isAdjacent ? 'scale-95 z-10' : 'scale-90 z-0'
                    }`} 
                    style={{ width: '60%', maxWidth: '520px' }}
                  >
                    <figure className="overflow-hidden rounded-lg bg-[#2b473a]">
                      <img
                        src={src}
                        alt={`Bakery item ${i + 1}`}
                        className={`w-full object-cover transition-transform duration-500 ${isActive ? 'transform scale-110' : ''}`}
                        style={{ height: '360px' }}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
