import { GraduationCap, ClipboardList, FileText, Mic } from 'lucide-react'

const SCORES = [
  { label: '企劃書架構完整性', desc: '問題、目標、策略、執行與基本分析', pct: 20, color: 'bg-blue-500' },
  { label: 'ESG 議題整合程度', desc: '在地文化、高齡/青年需求、綠色飲食、食農教育', pct: 25, color: 'bg-green-500' },
  { label: '提案創新與數位應用', desc: '數據分析與數位行銷之運用', pct: 25, color: 'bg-purple-500' },
  { label: '實務可行性與落地效益', desc: '方案可行性、市場評估、執行效益', pct: 30, color: 'bg-primary' },
]

export default function RulesSection() {
  return (
    <section id="rules" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* 副標題 */}
        <div className="flex items-center gap-3 mb-12 scroll-anim">
          <div className="h-px flex-1 bg-gray-200" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight px-2" style={{ fontFamily: 'var(--f-serif)' }}>
            競賽辦法
          </h3>
          <div className="h-px flex-1 bg-gray-200" />
        </div>


        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="scroll-anim-left p-8 rounded-3xl bg-primary/5 border border-primary/15">
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-black text-primary">參賽資格</h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-medium">
              {['全國大專院校及高中學生（含當年畢業者）','可跨校、跨系組隊參加','每隊 2 至 5 人','需邀請一位指導老師提供專業輔導'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary font-black mt-0.5 shrink-0">—</span>{item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <span className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl">大專院校組</span>
              <span className="px-4 py-2 bg-secondary text-white text-sm font-bold rounded-xl">高中組</span>
            </div>
          </div>

          <div className="scroll-anim-right p-8 rounded-3xl bg-secondary/5 border border-secondary/15">
            <div className="flex items-center gap-3 mb-5">
              <ClipboardList className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-black text-secondary">競賽方式</h3>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed mb-4">
              每隊參賽者需從「合作店家」名單中挑選一家店作為提案對象，針對該店設計完整行銷企劃案。
            </p>
            <p className="text-gray-600 font-medium leading-relaxed">
              企劃內容可涵蓋品牌再造、永續飲食、數位轉型、顧客體驗等方向，以<strong className="font-black">書面企劃與簡報</strong>方式呈現。
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8 mt-20 scroll-anim">
          <div className="h-px flex-1 bg-gray-200" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight px-2" style={{ fontFamily: 'var(--f-serif)' }}>
            競賽流程
          </h3>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <div className="space-y-6 mb-20">
          {[
            { phase: '初賽', type: '書面審查', Icon: FileText, badge: 'bg-blue-500', color: 'border-blue-300 bg-blue-50',
              items: ['繳交企劃書（A4 10–15頁，含市場分析、提案與ESG關聯性、經濟效益評估等）','完整繳交者，每位隊員及指導老師皆提供參賽證明','選出若干隊伍進入決賽'] },
            { phase: '決賽', type: '簡報發表', Icon: Mic, badge: 'bg-primary', color: 'border-primary/30 bg-green-50',
              items: ['繳交修改後完整企劃書（A4 10–20頁）及簡報檔（PPT）','口頭簡報 10 分鐘，另安排專家評審現場提問','完整繳交者，每位隊員及指導老師致贈活動紀念品','得獎者頒發獎狀；未得獎者頒發入選決賽證明'] },
          ].map((step, i) => (
            <div key={step.phase} className={`scroll-anim stagger-${i+1} p-7 rounded-3xl border-2 ${step.color}`}>
              <div className="flex items-center gap-4 mb-4">
                <span className={`w-10 h-10 rounded-full ${step.badge} text-white flex items-center justify-center font-black text-sm`}>0{i+1}</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">{step.type}</p>
                  <h4 className="text-lg font-black text-gray-800">{step.phase}</h4>
                </div>
                <step.Icon className="ml-auto w-6 h-6 text-gray-400" />
              </div>
              <ul className="space-y-2">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 font-medium text-sm">
                    <span className="text-primary mt-0.5 font-black shrink-0">—</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="scroll-anim p-8 rounded-3xl bg-gray-950 text-white">
          <h3 className="text-xl font-black mb-8 text-center tracking-wide">評分標準</h3>
          <div className="space-y-6">
            {SCORES.map((score) => (
              <div key={score.label}>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="font-bold text-white">{score.label}</p>
                    <p className="text-xs text-white/50 mt-0.5 font-medium">{score.desc}</p>
                  </div>
                  <span className="text-2xl font-black text-white/85 ml-4 shrink-0">{score.pct}%</span>
                </div>
                <div className="score-bar-track">
                  <div className={`score-bar-fill ${score.color}`} style={{ width: `${score.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
