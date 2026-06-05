import AnimatedTitle from '../components/AnimatedTitle'

const PRIZE_TIERS = [
  { rank: '金獎', rankEn: 'GOLD',   quota: '1名', dot: 'bg-yellow-400', border: 'border-yellow-500/40', glow: 'shadow-yellow-500/20' },
  { rank: '銀獎', rankEn: 'SILVER', quota: '1名', dot: 'bg-gray-400',   border: 'border-gray-400/40',   glow: 'shadow-gray-400/20'  },
  { rank: '銅獎', rankEn: 'BRONZE', quota: '1名', dot: 'bg-amber-600',  border: 'border-amber-600/40',  glow: 'shadow-amber-600/20' },
  { rank: '佳作', rankEn: 'MERIT',  quota: '2名', dot: 'bg-white/30',   border: 'border-white/20',       glow: '' },
]

const UNI_AMOUNTS   = ['20,000', '8,000', '3,000', '2,000']
const HS_AMOUNTS    = ['10,000', '5,000', '3,000', '1,000']

export default function PrizesSection() {
  return (
    <section id="prizes" className="py-20 md:py-32 px-4 bg-prize-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label text-white/35 text-xs tracking-[0.15em] scroll-anim mb-4">
            02 / PRIZES
          </div>
          <AnimatedTitle
            text="獎金資訊"
            highlight="資訊"
            highlightClass="text-accent"
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          />
          
          {/* Highlight badges */}
          <div className="flex flex-wrap justify-center gap-3.5 mt-8 mb-6 scroll-anim">
            <span className="px-4.5 py-2.5 rounded-2xl bg-white/10 text-accent border border-accent/30 text-sm font-bold shadow-lg shadow-accent/5">
              🏆 總獎金 NT$ 55,000 元
            </span>
            <span className="px-4.5 py-2.5 rounded-2xl bg-white/10 text-white border border-white/10 text-sm font-bold">
              👥 參賽人數 2-4 人 / 隊
            </span>
            <span className="px-4.5 py-2.5 rounded-2xl bg-white/10 text-white border border-white/10 text-sm font-bold">
              🥇 最高金獎 NT$ 20,000 元
            </span>
          </div>

          <p className="mt-4 text-white/50 max-w-xl mx-auto scroll-anim font-medium text-sm leading-relaxed">
            若未達得獎標準得從缺。完整繳交決賽資料之隊伍，每位隊員及指導老師皆致贈活動紀念品。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* University */}
          <div className="scroll-anim-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-white/10 text-white rounded-xl font-bold text-sm border border-white/15 tracking-wide">
                大專院校組
              </span>
            </div>
            <div className="space-y-3">
              {PRIZE_TIERS.map((tier, i) => (
                <div
                  key={tier.rank}
                  className={`scroll-anim stagger-${i+1} p-5 rounded-2xl border ${tier.border} bg-white/5 flex items-center justify-between shadow-lg ${tier.glow}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${tier.dot} shrink-0`} />
                    <div>
                      <p className="text-white/40 text-[0.6rem] font-bold tracking-[0.3em] uppercase">{tier.rankEn}</p>
                      <p className="text-white font-bold text-lg leading-tight">
                        {tier.rank} <span className="text-xs font-normal text-white/60 ml-1">({tier.quota})</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-accent font-bold text-2xl">NT$ {UNI_AMOUNTS[i]}</span>
                    <span className="text-white/40 text-xs ml-1 font-bold">元</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* High School */}
          <div className="scroll-anim-right">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-white/10 text-white rounded-xl font-bold text-sm border border-white/15 tracking-wide">
                高中組
              </span>
            </div>
            <div className="space-y-3">
              {PRIZE_TIERS.map((tier, i) => (
                <div
                  key={tier.rank}
                  className={`scroll-anim stagger-${i+1} p-5 rounded-2xl border ${tier.border} bg-white/5 flex items-center justify-between shadow-lg ${tier.glow}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${tier.dot} shrink-0`} />
                    <div>
                      <p className="text-white/40 text-[0.6rem] font-bold tracking-[0.3em] uppercase">{tier.rankEn}</p>
                      <p className="text-white font-bold text-lg leading-tight">
                        {tier.rank} <span className="text-xs font-normal text-white/60 ml-1">({tier.quota})</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-accent font-bold text-2xl">NT$ {HS_AMOUNTS[i]}</span>
                    <span className="text-white/40 text-xs ml-1 font-bold">元</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center scroll-anim">
          <p className="text-white font-bold text-sm tracking-wide">
            得獎隊伍頒發獎狀　·　入選決賽者頒發入選決賽證明　·　完整參賽者提供參賽證明
          </p>
        </div>
      </div>
    </section>
  )
}
