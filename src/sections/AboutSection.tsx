import AnimatedTitle from '../components/AnimatedTitle'

const ESG_PILLARS = [
  {
    letter: 'E',
    title: '環境友善',
    desc: '綠色飲食、低碳食材、惜食行動，打造永續餐飲生態。',
    letterBg: 'bg-green-700',
  },
  {
    letter: 'S',
    title: '社會共好',
    desc: '青銀共融、高齡友善設計、在地小農連結，促進社會包容。',
    letterBg: 'bg-amber-700',
  },
  {
    letter: 'G',
    title: '治理創新',
    desc: 'AI 數據分析、數位轉型工具應用，推動商圈智慧治理。',
    letterBg: 'bg-gray-800',
  },
]

const THEME_ITEMS = [
  { title: '高齡者友善飲食設計', desc: '如軟質餐食、營養規劃、無障礙動線' },
  { title: '青年族群品牌再造', desc: '如聚會餐飲、紓壓或健身飲食' },
  { title: '健康與永續食材應用', desc: '如在地小農、低碳飲食、惜食行動、青銀共好餐飲' },
  { title: 'AI 與數據分析導入', desc: '如顧客數據分析、需求分群、數位轉型工具應用' },
  { title: 'ESG 行動方案與數位行銷策略', desc: '商圈 ESG 策略規劃結合數位行銷' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-bg-warm">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label text-primary/60 text-xs tracking-[0.15em] scroll-anim mb-4">
            01 / ABOUT
          </div>
          <AnimatedTitle
            text="活動介紹"
            highlight="介紹"
            highlightClass="text-primary"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
          />
          <p className="mt-6 text-center text-gray-500 max-w-2xl mx-auto scroll-anim leading-relaxed">
            結合商學教育、ESG 理念與在地文化，推動萬華商圈永續轉型
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          {/* Left: image */}
          <div className="scroll-anim">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/aiclubusrwebsite/images/hero-1.jpg"
                alt="萬華商圈"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs tracking-[0.25em] opacity-70 uppercase" style={{ fontFamily: 'var(--f-mono)' }}>Wanhua District</p>
                <p className="text-2xl font-bold mt-1" style={{ fontFamily: 'var(--f-serif)' }}>萬華・艋舺</p>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="scroll-anim space-y-5">
            <p className="text-gray-700 leading-relaxed text-lg">
              為呼應<strong className="text-primary font-bold">大學社會責任（USR）</strong>精神、強化商學 ESG 教育，並結合傳統商圈永續轉型需求，特舉辦「艋舺商圈ESG永續消費體驗企劃書提案競賽」。
            </p>
            <p className="text-gray-600 leading-relaxed">
              本競賽以萬華商圈為實作場域，廣邀全國大專院校及高中學生共同參與，以永續消費為核心，運用青年創新思維提出創意提案。
            </p>
            <p className="text-gray-600 leading-relaxed">
              透過青年創意與跨域思考，推廣艋舺在地飲食文化，發展兼顧<strong className="text-secondary font-bold">高齡友善、青年友善與環境友善</strong>的永續消費體驗。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { topLabel: '高中職組', bottomLabel: '大專院校組', icon: '🏫' },
                { num: '2–4', label: '參賽人數/隊' },
                { num: '20,000', label: '最高金獎（元）' },
                { num: '55,000', label: '總獎金（元）' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                  {'topLabel' in stat ? (
                    <div className="flex flex-col h-full justify-center gap-1.5 py-1">
                      <p className="text-sm md:text-base font-bold text-primary" style={{ fontFamily: 'var(--f-serif)' }}>{stat.topLabel}</p>
                      <p className="text-sm md:text-base font-bold text-primary" style={{ fontFamily: 'var(--f-serif)' }}>{stat.bottomLabel}</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--f-serif)' }}>{stat.num}</p>
                      <p className="text-xs text-gray-500 mt-1 tracking-wide" style={{ fontFamily: 'var(--f-mono)' }}>{stat.label}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ESG Pillars */}
        <div className="border border-gray-200 flex flex-col divide-y divide-gray-200 rounded-2xl overflow-hidden mb-24">
          {ESG_PILLARS.map((pillar) => (
            <div key={pillar.title} className="flex bg-white card-hover">
              <div
                className={`w-12 shrink-0 flex items-center justify-center font-bold text-lg text-white ${pillar.letterBg}`}
                style={{ fontFamily: 'var(--f-serif)' }}
              >
                {pillar.letter}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 競賽主題 sub-section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-10 mt-16 scroll-anim">
            <div className="h-px flex-1 bg-gray-200" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight px-2" style={{ fontFamily: 'var(--f-serif)' }}>
              競賽主題
            </h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl text-center mx-auto">
            每隊參賽者需從「合作店家」名單中挑選一家店作為提案對象，針對該店設計完整行銷企劃案。企劃內容可涵蓋品牌再造、永續飲食、數位轉型、顧客體驗等方向，並提出具創意、可行性與ESG理念整合的具體方案，以書面企劃與簡報方式呈現。
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {THEME_ITEMS.map((theme, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm card-hover">
                <p className="text-xs text-primary/60 font-bold tracking-[0.2em] mb-1" style={{ fontFamily: 'var(--f-mono)' }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'var(--f-serif)' }}>{theme.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{theme.desc}</p>
              </div>
            ))}
            {/* Last: 企劃方向說明 */}
            <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5 card-hover flex flex-col justify-center">
              <p className="text-xs text-primary font-bold tracking-[0.2em] mb-1" style={{ fontFamily: 'var(--f-mono)' }}>DIRECTION</p>
              <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'var(--f-serif)' }}>可針對單一主題或結合多項元素</h3>
              <p className="text-sm text-gray-500 leading-relaxed">參賽隊伍可聚焦單一方向深入發展，亦可跨主題整合提案。</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

