import AnimatedTitle from '../components/AnimatedTitle'

const REGISTRATION_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSe0_Jry0jSMZXgxY_g9apOG52u-GoWVuzyz3V_uZ7-_oyy9hw/viewform?usp=publish-editor'

const MILESTONES = [
  { date: '即日起', label: '開放報名', desc: '競賽正式開放報名，請盡早組隊', active: true },
  { date: '7 月 2 日', label: '說明會與工作坊', desc: '自由報名參加，獲得更多競賽資訊與指導', active: false },
  { date: '8 月 2 日', label: '初賽資料繳件截止', desc: '書面企劃書（A4 10–15頁）完整繳交', active: false },
  { date: '8 月 13 日', label: '決賽入選名單公告', desc: '初賽結果公告，晉級隊伍名單發布', active: false },
  { date: '9 月 10 日', label: '決賽資料繳件截止', desc: '修改後企劃書（A4 10–20頁）及簡報檔 PPT', active: false },
  { date: '10 月 3 日', label: '決賽暨頒獎典禮', desc: '口頭簡報、評審提問、得獎公佈與頒獎', active: false },
]

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 md:py-32 px-4 bg-bg-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-label text-primary/60 text-xs tracking-[0.15em] scroll-anim mb-4">
            05 / TIMELINE
          </div>
          <AnimatedTitle
            text="競賽流程"
            highlight="流程"
            highlightClass="text-primary"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
          />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto scroll-anim font-medium">
            競賽流程與關鍵截止日期一覽
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-8">
            {MILESTONES.map((m, i) => (
              <div
                key={m.date}
                className={`scroll-anim stagger-${Math.min(i+1,6)} relative flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`inline-block p-5 rounded-2xl ${
                    m.active ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'matte-glass'
                  }`}>
                    <p className={`text-xs font-bold tracking-wide mb-1 ${m.active ? 'text-white/75' : 'text-primary'}`}>
                      {m.date}
                    </p>
                    <h3 className={`font-bold mb-1 ${m.active ? 'text-white' : 'text-gray-800'}`}>{m.label}</h3>
                    <p className={`text-sm font-medium ${m.active ? 'text-white/70' : 'text-gray-500'}`}>{m.desc}</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-white items-center justify-center z-10">
                  {m.active && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center scroll-anim">
          <div className="inline-block p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/30">
            <p className="text-white/75 text-sm font-bold mb-2 tracking-wider uppercase">初賽報名截止</p>
            <p className="text-4xl font-bold mb-1">8 月 2 日</p>
            <p className="text-white/65 text-sm font-medium mb-6">把握報名機會，展現青年創意</p>
            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 tracking-wide"
            >
              遞件報名
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

