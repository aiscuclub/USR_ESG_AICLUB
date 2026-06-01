import AnimatedTitle from '../components/AnimatedTitle'

// SDGs most relevant to this competition
const SDGS = [
  { num: 2,  label: '消除飢餓',         color: 'bg-[#DDA63A]' },
  { num: 3,  label: '良好健康與福祉',   color: 'bg-[#4C9F38]' },
  { num: 4,  label: '優質教育',         color: 'bg-[#C5192D]' },
  { num: 8,  label: '尊嚴就業與經濟成長', color: 'bg-[#A21942]' },
  { num: 10, label: '減少不平等',       color: 'bg-[#DD1367]' },
  { num: 11, label: '永續城市與社區',   color: 'bg-[#FD9D24]' },
  { num: 12, label: '責任消費與生產',   color: 'bg-[#BF8B2E]' },
  { num: 13, label: '氣候行動',         color: 'bg-[#3F7E44]' },
  { num: 17, label: '夥伴關係',         color: 'bg-[#19486A]' },
]

export default function SDGsSection() {
  return (
    <section id="sdgs" className="py-20 md:py-28 px-4 bg-bg-warm">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight" style={{ fontFamily: 'var(--f-serif)' }}>
            聯合國永續發展目標
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto scroll-anim font-medium leading-relaxed">
            亦鼓勵參賽隊伍將提案方向與
            <strong className="text-primary font-black">聯合國永續發展目標 (SDGs)</strong>
            相鏈結，展現提案的全球視野與社會影響力。
          </p>
        </div>

        {/* SDG Color Blocks */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 mb-10 scroll-anim">
          {SDGS.map((sdg) => (
            <div
              key={sdg.num}
              className={`${sdg.color} rounded-2xl p-3 text-white text-center aspect-square flex flex-col items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-default`}
            >
              <p className="text-2xl font-black leading-none">{sdg.num}</p>
              <p className="text-[0.55rem] font-bold mt-1.5 leading-tight opacity-90">{sdg.label}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: '在地飲食文化',
              sdgNums: '2, 11',
              desc: '連結消除飢餓 (SDG2)、永續城市 (SDG11)，以飲食文化保存推動社區凝聚。',
              color: 'border-amber-200 bg-amber-50',
              badge: 'bg-amber-100 text-amber-700',
            },
            {
              title: '青銀友善',
              sdgNums: '3, 10',
              desc: '連結良好健康 (SDG3)、減少不平等 (SDG10)，促進跨世代共融的飲食設計。',
              color: 'border-pink-200 bg-pink-50',
              badge: 'bg-pink-100 text-pink-700',
            },
            {
              title: '綠色飲食',
              sdgNums: '12, 13',
              desc: '連結責任消費 (SDG12)、氣候行動 (SDG13)，推動低碳飲食與永續食材應用。',
              color: 'border-green-200 bg-green-50',
              badge: 'bg-green-100 text-green-700',
            },
          ].map((item, i) => (
            <div key={item.title} className={`scroll-anim stagger-${i + 1} p-6 rounded-3xl border ${item.color}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-black px-3 py-1 rounded-full tracking-wider ${item.badge}`}>
                  SDGs {item.sdgNums}
                </span>
              </div>
              <h3 className="font-black text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
