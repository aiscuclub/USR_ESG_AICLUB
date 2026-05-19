import { Users, Leaf, BarChart3, Cpu, TrendingUp } from 'lucide-react'
import AnimatedTitle from '../components/AnimatedTitle'

const THEMES = [
  {
    num: '01',
    icon: Users,
    title: '高齡者友善飲食設計',
    desc: '軟質餐食、營養規劃、無障礙動線，打造長者友善的用餐空間。',
    tag: 'Age-Friendly',
    color: 'bg-amber-50 border-amber-200',
    tagColor: 'bg-amber-100 text-amber-700',
    numColor: 'text-amber-300',
    iconColor: 'text-amber-600',
  },
  {
    num: '02',
    icon: TrendingUp,
    title: '青年族群品牌再造',
    desc: '聚會餐飲、紓壓或健身飲食，吸引年輕世代走進萬華。',
    tag: 'Youth Brand',
    color: 'bg-purple-50 border-purple-200',
    tagColor: 'bg-purple-100 text-purple-700',
    numColor: 'text-purple-300',
    iconColor: 'text-purple-600',
  },
  {
    num: '03',
    icon: Leaf,
    title: '健康與永續食材應用',
    desc: '在地小農、低碳飲食、惜食行動、青銀共好餐飲，推動食農友好。',
    tag: 'Sustainable',
    color: 'bg-green-50 border-green-200',
    tagColor: 'bg-green-100 text-green-700',
    numColor: 'text-green-300',
    iconColor: 'text-green-600',
  },
  {
    num: '04',
    icon: Cpu,
    title: 'AI 與數據分析導入',
    desc: '顧客數據分析、需求分群、數位轉型工具應用，讓科技走進萬華。',
    tag: 'AI × Digital',
    color: 'bg-blue-50 border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
    numColor: 'text-blue-300',
    iconColor: 'text-blue-600',
  },
  {
    num: '05',
    icon: BarChart3,
    title: 'ESG 行動方案與數位行銷',
    desc: '商圈 ESG 策略規劃，結合社群與數位行銷，拓展品牌影響力。',
    tag: 'ESG Strategy',
    color: 'bg-teal-50 border-teal-200',
    tagColor: 'bg-teal-100 text-teal-700',
    numColor: 'text-teal-300',
    iconColor: 'text-teal-600',
  },
]

export default function ThemeSection() {
  return (
    <section id="theme" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label text-primary/60 text-xs tracking-[0.15em] scroll-anim mb-4">
            02 / 競賽主題
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
            const Icon = theme.icon
            return (
              <div
                key={theme.title}
                className={`scroll-anim stagger-${i + 1} card-hover p-7 rounded-3xl border ${theme.color} relative overflow-hidden group`}
              >
                {/* Watermark number */}
                <div className={`absolute -right-1 -top-1 text-8xl font-black ${theme.numColor} opacity-25 select-none leading-none`}>
                  {theme.num}
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-6 h-6 ${theme.iconColor}`} />
                    <span className={`text-xs font-bold px-3 py-1 rounded-full tracking-wide ${theme.tagColor}`}>
                      {theme.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-gray-800 mb-2">{theme.title}</h3>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed">{theme.desc}</p>
                </div>
              </div>
            )
          })}

          {/* Participation info card */}
          <div className="scroll-anim stagger-6 p-7 rounded-3xl bg-gray-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="relative">
              <p className="text-white/50 text-xs tracking-[0.3em] uppercase font-semibold mb-3">企劃方向</p>
              <h3 className="text-xl font-black mb-3">可針對單一主題，或結合多項元素</h3>
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
