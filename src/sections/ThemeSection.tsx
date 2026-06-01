import AnimatedTitle from '../components/AnimatedTitle'

const THEMES = [
  {
    title: '高齡者友善飲食設計',
    desc: '軟質餐食、營養規劃、無障礙動線，打造長者友善的用餐空間。',
    color: 'bg-amber-50/60 border-amber-200/60',
  },
  {
    title: '青年族群品牌再造',
    desc: '聚會餐飲、紓壓或健身飲食，吸引年輕世代走進萬華。',
    color: 'bg-purple-50/60 border-purple-200/60',
  },
  {
    title: '健康與永續食材應用',
    desc: '在地小農、低碳飲食、惜食行動、青銀共好餐飲，推動食農友好。',
    color: 'bg-green-50/60 border-green-200/60',
  },
  {
    title: 'AI 與數據分析導入',
    desc: '顧客數據分析、需求分群、數位轉型工具應用，讓科技走進萬華。',
    color: 'bg-blue-50/60 border-blue-200/60',
  },
  {
    title: 'ESG 行動方案與數位行銷',
    desc: '商圈 ESG 策略規劃，結合社群與數位行銷，拓展品牌影響力。',
    color: 'bg-teal-50/60 border-teal-200/60',
  },
]

export default function ThemeSection() {
  return (
    <section id="theme" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label text-primary/60 text-xs tracking-[0.15em] scroll-anim mb-4">
            02
          </div>
          <AnimatedTitle
            text="競賽主題"
            highlight="主題"
            highlightClass="text-primary"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
          />
        </div>

        {/* Year axis badges — 3 separate tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 scroll-anim">
          <span className="px-5 py-2.5 bg-primary text-white rounded-full font-bold shadow-md shadow-primary/25 tracking-wide">
            在地飲食文化
          </span>
          <span className="px-5 py-2.5 bg-amber-500 text-white rounded-full font-bold shadow-md shadow-amber-500/25 tracking-wide">
            青銀友善
          </span>
          <span className="px-5 py-2.5 bg-secondary text-white rounded-full font-bold shadow-md shadow-secondary/25 tracking-wide">
            綠色飲食
          </span>
        </div>

        {/* Theme Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {THEMES.map((theme, i) => {
            return (
              <div
                key={theme.title}
                className={`scroll-anim stagger-${i + 1} card-hover p-8 rounded-3xl border ${theme.color} relative overflow-hidden group`}
              >
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'var(--f-serif)' }}>
                    {theme.title}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed">{theme.desc}</p>
                </div>
              </div>
            )
          })}

          {/* Participation info card */}
          <div className="scroll-anim stagger-6 p-8 rounded-3xl bg-gray-950 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="relative">
              <p className="text-white/50 text-xs tracking-[0.3em] uppercase font-semibold mb-2">企劃方向</p>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--f-serif)' }}>
                可針對單一主題，或結合多項元素
              </h3>
              <p className="text-white/65 text-sm font-medium leading-relaxed">
                參賽隊伍可聚焦單一方向深入發展，亦可跨主題整合，提出具創意、可行性與 ESG 理念整合的具體方案。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
