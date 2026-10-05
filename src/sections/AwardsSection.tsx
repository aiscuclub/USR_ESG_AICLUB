import { Trophy, Medal, Award, Sparkles, FileText } from 'lucide-react'
import AnimatedTitle from '../components/AnimatedTitle'

const AWARDS_PDF_LINK = `${import.meta.env.BASE_URL}決賽暨特別獎得獎名單公告.pdf`

interface Winner {
  award: string
  store: string
  school: string
  members: string[]
  advisors: string[]
}

interface Group {
  name: string
  podium: Winner[]
  merits: Winner[]
  specials?: Winner[]
}

// 資料來源：public/決賽暨特別獎得獎名單公告.pdf（2026.10.5 公告）
// 隊伍成員以隊長列首
const GROUPS: Group[] = [
  {
    name: '大專院校組',
    podium: [
      { award: '第一名', store: 'CURA PIZZA', school: '東吳大學', members: ['賴O恩', '鐘O廷', '劉O心', '郭O媗'], advisors: ['東吳大學會計系 吳O蓁教授'] },
      { award: '第二名', store: 'CURA PIZZA', school: '國立臺北教育大學', members: ['黃O芩', '古O婕'], advisors: ['國立臺北教育大學教育經營與管理學系 魏O禎特聘教授'] },
      { award: '第三名', store: '布田食品', school: '國立臺北教育大學', members: ['朱O晴', '林O樺'], advisors: ['士東國民小學 蘇O伶老師'] },
    ],
    merits: [
      { award: '佳作', store: '二和珍傳統餅鋪', school: '東吳大學／政治大學', members: ['鄭O睿', '黃O琪', '陳O冲'], advisors: ['東吳大學會計系 林O華助理教授'] },
      { award: '佳作', store: '布田食品', school: '輔仁大學', members: ['陳O成', '李O'], advisors: ['張O綺助理教授'] },
      { award: '佳作', store: '忠義號', school: '東吳大學／臺灣師範大學／世新大學', members: ['高O瑄', '陳O安', '曾O庭', '林O君'], advisors: ['東吳大學資訊管理學系 高O易副教授'] },
      { award: '佳作', store: '雲水食堂', school: '東吳大學', members: ['蕭O娟', '郭O彤', '吳O嫺'], advisors: ['東吳大學會計系 莊O惠助理教授'] },
    ],
    specials: [
      { award: '創新行銷獎', store: '二和珍傳統餅鋪', school: '實踐大學', members: ['李O慈', '宋O岑'], advisors: ['實踐大學國際企業英語學士學位學程 林O丞教授'] },
      { award: '環境永續獎', store: 'CURA PIZZA', school: '東吳大學', members: ['林O伶', '張O加', '劉O宜'], advisors: ['東吳大學國貿系 張O文助理教授'] },
      { award: '數據分析應用獎', store: '坐坐吧', school: '東吳大學', members: ['蔡O庭', '徐O葳'], advisors: ['東吳大學資管系 許O銓副教授'] },
      { award: '數位行銷創意獎', store: '布田食品', school: '龍華科技大學／大同大學', members: ['陳O維', '彭O綸', '楊O圓', '呂O昇', '張O杰'], advisors: ['大同大學電機工程學系 錢O助理教授', '龍華科技大學資訊工程系 張O丞講師'] },
    ],
  },
  {
    name: '高中職組',
    podium: [
      { award: '第一名', store: '坐坐吧', school: '樂之學苑實驗教育機構', members: ['劉O惟', '陳O翔'], advisors: ['樂之學苑實驗教育機構 陳O蓉老師'] },
      { award: '第二名', store: 'CURA PIZZA', school: '臺北市立陽明高中／政大附中', members: ['張O順', '葉O恩'], advisors: ['臺北市立陽明高級中學 王O淵老師'] },
      { award: '第三名', store: '二和珍傳統餅鋪', school: '嘉科實中／嘉義高中', members: ['賴O豐', '林O衡'], advisors: ['嘉科實中 潘O均教務主任'] },
    ],
    merits: [
      { award: '佳作', store: '家辣麻辣鴨血', school: '松山工農／北一女中／華僑高中', members: ['范O瑜', '蔡O儒', '錢O涵'], advisors: ['松山高工電機科 張O興老師', '龍華科技大學資訊工程系 張O丞講師'] },
      { award: '佳作', store: '二和珍傳統餅鋪', school: '二信中學', members: ['張O鑫', '葉O旻'], advisors: ['二信中學商業經營科 吳O伊主任'] },
    ],
  },
]

const SPECIAL_COUNT = GROUPS.reduce((sum, g) => sum + (g.specials?.length ?? 0), 0)

const PODIUM_STYLES = [
  { en: '1ST PLACE', border: 'border-yellow-400/70', badge: 'bg-yellow-400 text-yellow-950', glow: 'shadow-yellow-500/15' },
  { en: '2ND PLACE', border: 'border-gray-300', badge: 'bg-gray-400 text-white', glow: 'shadow-gray-400/15' },
  { en: '3RD PLACE', border: 'border-amber-600/40', badge: 'bg-amber-600 text-white', glow: 'shadow-amber-600/15' },
]

function PodiumCard({ winner, index }: { winner: Winner; index: number }) {
  const style = PODIUM_STYLES[index]
  return (
    <div className={`w-full p-6 rounded-3xl bg-white border-2 ${style.border} shadow-lg ${style.glow} flex flex-col`}>
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-bold ${style.badge}`}>
          <Medal className="w-4 h-4 shrink-0" />
          {winner.award}
        </span>
        <span className="text-[0.6rem] font-bold tracking-[0.3em] text-gray-300">{style.en}</span>
      </div>
      <p className="text-xs text-gray-400 font-bold tracking-wider mb-1">提案店家</p>
      <p className="text-xl font-bold text-gray-900 mb-5 break-words">{winner.store}</p>
      <dl className="space-y-2 text-sm">
        <div className="flex gap-3">
          <dt className="shrink-0 w-16 text-gray-400 font-bold">學校</dt>
          <dd className="min-w-0 text-gray-700 font-medium break-words">{winner.school}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="shrink-0 w-16 text-gray-400 font-bold">隊伍成員</dt>
          <dd className="min-w-0 text-gray-700 font-medium break-words">{winner.members.join('、')}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="shrink-0 w-16 text-gray-400 font-bold">指導老師</dt>
          <dd className="min-w-0 text-gray-700 font-medium break-words">
            {winner.advisors.map((a) => <span key={a} className="block">{a}</span>)}
          </dd>
        </div>
      </dl>
    </div>
  )
}

function AwardChip({ award, special }: { award: string; special: boolean }) {
  return special ? (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg whitespace-nowrap bg-accent/20 text-yellow-900 text-sm font-bold">
      <Sparkles className="w-3.5 h-3.5 shrink-0" />
      {award}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg whitespace-nowrap bg-primary/8 text-primary-dark text-sm font-bold">
      <Award className="w-3.5 h-3.5 shrink-0" />
      {award}
    </span>
  )
}

function WinnerList({ groupName, winners, special }: { groupName: string; winners: Winner[]; special: boolean }) {
  return (
    <>
      {/* 桌面版：表格 */}
      <div className="hidden lg:block rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr className={special ? 'bg-accent/15' : 'bg-primary/8'}>
              <th className="w-[17%] px-4 py-3.5 text-sm font-bold text-gray-700">獎項</th>
              <th className="w-[16%] px-4 py-3.5 text-sm font-bold text-gray-700">提案店家</th>
              <th className="w-[19%] px-4 py-3.5 text-sm font-bold text-gray-700">學校</th>
              <th className="w-[20%] px-4 py-3.5 text-sm font-bold text-gray-700">隊伍成員</th>
              <th className="w-[28%] px-4 py-3.5 text-sm font-bold text-gray-700">指導老師</th>
            </tr>
          </thead>
          <tbody>
            {winners.map((w) => (
              <tr key={`${groupName}-${w.award}-${w.members[0]}`} className="border-t border-gray-100 even:bg-gray-50/60">
                <td className="px-4 py-3.5 align-top">
                  <AwardChip award={w.award} special={special} />
                </td>
                <td className="px-4 py-3.5 align-top text-sm font-bold text-gray-900 break-words">{w.store}</td>
                <td className="px-4 py-3.5 align-top text-sm text-gray-600 font-medium break-words">{w.school}</td>
                <td className="px-4 py-3.5 align-top text-sm text-gray-600 font-medium break-words">
                  {w.members.join('、')}
                </td>
                <td className="px-4 py-3.5 align-top text-sm text-gray-600 font-medium break-words">
                  {w.advisors.map((a) => <span key={a} className="block">{a}</span>)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 手機版：卡片 */}
      <div className="lg:hidden grid md:grid-cols-2 gap-3">
        {winners.map((w) => (
          <div
            key={`${groupName}-m-${w.award}-${w.members[0]}`}
            className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <AwardChip award={w.award} special={special} />
              <span className="min-w-0 pt-1 font-bold text-gray-900 text-right break-words">{w.store}</span>
            </div>
            <dl className="space-y-2 text-sm">
              <div className="flex gap-3">
                <dt className="shrink-0 w-16 text-gray-400 font-bold">學校</dt>
                <dd className="min-w-0 text-gray-700 font-medium break-words">{w.school}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="shrink-0 w-16 text-gray-400 font-bold">隊伍成員</dt>
                <dd className="min-w-0 text-gray-700 font-medium break-words">{w.members.join('、')}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="shrink-0 w-16 text-gray-400 font-bold">指導老師</dt>
                <dd className="min-w-0 text-gray-700 font-medium break-words">
                  {w.advisors.map((a) => <span key={a} className="block">{a}</span>)}
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </>
  )
}

export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 md:py-28 px-4 bg-bg-warm">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label text-primary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-4">
            2026.10.05 / AWARDS
          </div>
          <AnimatedTitle
            text="得獎名單公告"
            highlight="得獎名單"
            highlightClass="text-primary"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
          />
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto scroll-anim font-medium leading-relaxed">
            2026「艋舺商圈 ESG 永續消費體驗企劃書提案競賽」決賽暨特別獎得獎名單
          </p>
        </div>

        {/* 公告摘要 */}
        <div className="mb-14 scroll-anim">
          <div className="p-6 md:p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/25">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-accent shrink-0" />
              <div>
                <p className="text-white/60 text-xs tracking-[0.3em] uppercase font-bold">Announcement</p>
                <p className="font-bold text-lg">決賽暨特別獎得獎名單公告</p>
              </div>
            </div>
            <p className="text-white/85 text-sm md:text-base font-medium leading-relaxed">
              決賽暨頒獎典禮已於 2026 年 10 月 3 日圓滿落幕。經產、官、學界評審團審慎評選，大專院校組及高中職組得獎名單公告如下；{''}
              另為肯定各隊在不同面向的亮點表現，經評審團另行決議，增設四項特別獎。
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {GROUPS.map((g) => (
                <span
                  key={g.name}
                  className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/95 text-sm font-bold"
                >
                  {g.name}　前三名 ＋ 佳作 {g.merits.length} 隊
                </span>
              ))}
              <span className="px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-bold">
                特別獎 {SPECIAL_COUNT} 隊
              </span>
            </div>
          </div>
        </div>

        {/* 各組得獎隊伍 */}
        <div className="space-y-16">
          {GROUPS.map((group) => (
            <div key={group.name}>
              <div className="flex items-center gap-3 mb-6 scroll-anim">
                <span className="w-1.5 h-7 rounded-full bg-primary shrink-0" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{group.name}</h3>
              </div>

              {/* 前三名 */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
                {group.podium.map((w, i) => (
                  <div
                    key={`${group.name}-${w.award}`}
                    className={`scroll-anim stagger-${i + 1} flex ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                  >
                    <PodiumCard winner={w} index={i} />
                  </div>
                ))}
              </div>

              {/* 佳作 */}
              <div className="scroll-anim">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900">佳作</h4>
                  <span className="text-sm font-bold text-primary">{group.merits.length} 隊</span>
                  <span className="text-xs text-gray-400 font-medium">（排列不分名次）</span>
                </div>
                <WinnerList groupName={group.name} winners={group.merits} special={false} />
              </div>

              {/* 特別獎 */}
              {group.specials && (
                <div className="mt-10 scroll-anim">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">特別獎</h4>
                    <span className="text-sm font-bold text-secondary">{group.specials.length} 隊</span>
                    <span className="text-xs text-gray-400 font-medium">（經評審團另行決議增設）</span>
                  </div>
                  <WinnerList groupName={group.name} winners={group.specials} special />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 賀詞 + PDF */}
        <div className="mt-16 text-center scroll-anim">
          <p className="text-gray-700 font-bold text-lg md:text-xl mb-3">恭喜所有得獎團隊！</p>
          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            感謝每一位參賽同學、指導老師，以及艋舺商圈在地業者的熱情參與與支持。{''}
            期盼青年的創意持續走入街區、落實於店家，與艋舺共同邁向永續共榮。
          </p>
          <a
            href={AWARDS_PDF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-bold
                       rounded-xl hover:bg-primary-dark transition-all hover:scale-105
                       shadow-sm shadow-primary/20 tracking-wide max-w-full"
          >
            <FileText className="w-5 h-5 shrink-0" />
            查看完整得獎名單公告
          </a>
          <p className="mt-4 text-gray-400 text-xs font-medium leading-relaxed max-w-lg mx-auto">
            以上名單依公告 PDF 整理，若有出入請以官方公告 PDF 內容為準。
          </p>
        </div>

      </div>
    </section>
  )
}
