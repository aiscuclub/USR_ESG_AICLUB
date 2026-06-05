import { BookOpen, Brain, Users, CalendarCheck } from 'lucide-react'
import AnimatedTitle from '../components/AnimatedTitle'

const FEATURES = [
  {
    icon: BookOpen,
    title: '企劃書撰寫',
    desc: '從零開始學習如何撰寫一份完整、有說服力的競賽企劃書。',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    icon: Brain,
    title: 'AI 工具運用',
    desc: '實際操作 AI 輔助分析工具，讓數據為你的提案說話。',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Users,
    title: '開放所有人報名',
    desc: '鼓勵沒有撰寫計畫書經驗的同學，歡迎你來！',
    color: 'text-secondary',
    bg: 'bg-secondary/8',
  },
]

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label text-primary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-4">
            04 / WORKSHOP
          </div>
          <AnimatedTitle
            text="增能工作坊"
            highlight="工作坊"
            highlightClass="text-primary"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
          />
          <p className="mt-5 text-gray-500 max-w-xl mx-auto scroll-anim font-medium leading-relaxed">
            鼓勵沒有撰寫計畫書經驗的同學——有想法就來！
          </p>
        </div>

        {/* Main card */}
        <div className="grid lg:grid-cols-5 gap-6 mb-10">

          {/* Date highlight */}
          <div className="lg:col-span-2 scroll-anim-left">
            <div className="h-full flex flex-col justify-center p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/25">
              <CalendarCheck className="w-10 h-10 mb-5 opacity-80" />
              <p className="text-white/60 text-xs tracking-[0.3em] uppercase font-bold mb-2">活動日期</p>
              <p className="text-5xl font-bold leading-tight mb-1">7/2</p>
              <p className="text-white/80 font-bold text-lg">說明會暨增能工作坊</p>
              
              <p className="text-white/80 text-sm font-medium mt-4 leading-relaxed">
                📅 形式：線上（Google Meet / Teams 直播）與線下同步進行，課程包含企劃書撰寫教學與 AI 工具運用。
              </p>
              <div className="mt-3 text-white/80 text-sm font-medium leading-relaxed">
                📍 地點：東吳大學城中校區 5117 教室
                <br />
                🏢 地址：台北市中正區貴陽街一段56號
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white/10 border border-white/15 text-white/95 text-sm font-medium leading-relaxed">
                <span className="text-accent font-bold">🌟 競賽加分機制</span>
                <p className="mt-1">報名參加工作坊者，將給予競賽加分！</p>
              </div>

              <div className="mt-6 flex gap-2 items-start text-white/75 text-xs leading-relaxed">
                <span className="text-accent text-sm">📩</span>
                <p>完成報名競賽或留下資料後，主辦方將透過 Email 寄送工作坊報名通知。</p>
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className="lg:col-span-3 space-y-4 scroll-anim-right">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className={`flex items-start gap-4 p-5 rounded-2xl ${f.bg}`}>
                  <div className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm`}>
                    <Icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              )
            })}

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                工作坊為自由報名，不影響正式競賽資格。無論是否參加工作坊，皆歡迎報名競賽。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
