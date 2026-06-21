import AnimatedTitle from '../components/AnimatedTitle'

const ORGANIZERS = [
  {
    type: '指導單位',
    color: 'border-blue-200 bg-blue-50/50',
    badge: 'bg-blue-100 text-blue-700',
    orgs: [
      '台北市政府產業發展局',
      '台北市萬華街區發展協會',
    ],
  },
  {
    type: '主辦單位',
    color: 'border-primary/20 bg-green-50/50',
    badge: 'bg-primary/10 text-primary',
    orgs: [
      '東吳大學人工智慧應用社',
      '東吳大學人本AI研究中心',
      '東吳大學商學院',
      '東吳大學社會責任實踐計畫「艋舺商圈永續共創與數位加值」',
    ],
  },
  {
    type: '協辦單位',
    color: 'border-secondary/20 bg-orange-50/50',
    badge: 'bg-secondary/10 text-secondary',
    orgs: [
      '東吳大學ESG永續發展研究中心',
      '東吳大學尤努斯社會企業中心',
      '數解人意科技股份有限公司',
    ],
  },
]

export default function OrganizersSection() {
  return (
    <section id="organizers" className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedTitle
            text="指導、主辦與協辦單位"
            highlight="協辦單位"
            highlightClass="text-primary"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
          />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto scroll-anim font-medium leading-relaxed">
            感謝各單位的支持與協助，共同推動艋舺商圈永續發展
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ORGANIZERS.map((org, i) => (
            <div key={org.type} className={`scroll-anim stagger-${i+1} p-7 rounded-3xl border-2 ${org.color}`}>
              <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-[0.2em] uppercase ${org.badge}`}>
                {org.type}
              </span>
              <ul className="space-y-3">
                {org.orgs.map((name) => (
                  <li key={name} className="flex items-start gap-3 text-gray-700 text-sm font-semibold leading-snug">
                    <span className="text-primary mt-1 shrink-0 font-bold">—</span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 text-center scroll-anim">
          <div className="inline-block px-8 py-6 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="text-gray-600 text-sm font-semibold mb-4">
              如有任何問題，歡迎聯繫主辦單位
            </p>
            <div className="flex flex-col gap-3">
              {/* Teacher Contact */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span className="text-gray-800 text-sm font-bold tracking-wide">
                  東吳大學尤努斯社會企業中心 葛俊佑主任
                </span>
                <span className="hidden sm:block text-gray-300">｜</span>
                <a
                  href="mailto:chunyouko@scu.edu.tw"
                  className="text-primary text-sm font-bold tracking-wide hover:underline"
                >
                  chunyouko@scu.edu.tw
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
