import { Trophy, CalendarCheck, FileText, Mail, MapPin } from 'lucide-react'
import AnimatedTitle from '../components/AnimatedTitle'

const FINALIST_PDF_LINK = `${import.meta.env.BASE_URL}決賽入選名單公告.pdf`

interface Team {
  leader: string
  school: string
  members: string[]
  store: string
  advisors: string[]
}

interface Group {
  name: string
  note: string
  teams: Team[]
}

// 資料來源：public/決賽入選名單公告.pdf（2026.8.12 公告）
const GROUPS: Group[] = [
  {
    name: '大專院校組',
    note: '名單順序依隊長姓名排列',
    teams: [
      { leader: '朱O晴', school: '國立臺北教育大學', members: ['林O樺'], store: '布田食品', advisors: ['蘇O伶'] },
      { leader: '蕭O娟', school: '東吳大學', members: ['郭O彤', '吳O嫺'], store: '雲水食堂', advisors: ['莊O惠'] },
      { leader: '賴O恩', school: '東吳大學', members: ['鐘O廷', '劉O心', '郭O媗'], store: 'CURA PIZZA', advisors: ['吳O蓁'] },
      { leader: '鄭O睿', school: '政治大學／東吳大學', members: ['黃O琪', '陳O冲'], store: '二和珍傳統餅鋪', advisors: ['林O華'] },
      { leader: '陳O成', school: '輔仁大學', members: ['李O'], store: '布田食品', advisors: ['張O綺'] },
      { leader: '高O瑄', school: '東吳大學', members: ['陳O安', '曾O庭', '林O君'], store: '忠義號', advisors: ['高O易'] },
      { leader: '黃O芩', school: '國立臺北教育大學', members: ['古O婕'], store: 'CURA PIZZA', advisors: ['魏O禎'] },
    ],
  },
  {
    name: '高中職組',
    note: '名單順序依隊長姓名排列',
    teams: [
      { leader: '劉O惟', school: '樂之學苑\n實驗教育機構', members: ['陳O翔'], store: '坐坐吧', advisors: ['陳O蓉'] },
      { leader: '張O鑫', school: '二信中學', members: ['葉O旻'], store: '二和珍傳統餅鋪', advisors: ['吳O伊'] },
      { leader: '張O順', school: '台北市立陽明高級中學', members: ['葉O恩'], store: 'CURA PIZZA', advisors: ['王O淵'] },
      { leader: '范O瑜', school: '松山工農\n北一女中、華僑高中', members: ['蔡O儒', '錢O涵'], store: '家辣麻辣鴨血', advisors: ['張O興', '張O丞'] },
      { leader: '賴O豐', school: '嘉科實中', members: ['林O衡'], store: '二和珍傳統餅鋪', advisors: ['潘O均'] },
    ],
  },
]

const TOTAL_TEAMS = GROUPS.reduce((sum, g) => sum + g.teams.length, 0)

const NEXT_STEPS = [
  {
    icon: Mail,
    date: '8 月 15 日前',
    title: '寄送評審意見',
    desc: '主辦單位將寄送評審意見至報名聯絡信箱，請各隊據以修正。',
    color: 'text-primary',
    bg: 'bg-primary/8',
  },
  {
    icon: FileText,
    date: '9 月 10 日前',
    title: '繳交決賽資料',
    desc: '請於期限前繳交完整企劃書與簡報檔案。',
    color: 'text-secondary',
    bg: 'bg-secondary/8',
  },
  {
    icon: CalendarCheck,
    date: '10 月 3 日',
    title: '決賽暨頒獎典禮',
    desc: '於東吳大學城中校區舉行（近捷運小南門站），誠摯邀請所有參賽隊伍蒞臨。',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
]

export default function FinalistsSection() {
  return (
    <section id="finalists" className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label text-primary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-4">
            2026.08.12 / FINALISTS
          </div>
          <AnimatedTitle
            text="決賽入選名單"
            highlight="入選名單"
            highlightClass="text-primary"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
          />
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto scroll-anim font-medium leading-relaxed">
            恭喜以下 {TOTAL_TEAMS} 支隊伍晉級 2026「艋舺商圈 ESG 永續消費體驗企劃書提案競賽」決賽
          </p>
        </div>

        {/* 公告摘要 */}
        <div className="mb-10 scroll-anim">
          <div className="p-6 md:p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/25">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 opacity-80 shrink-0" />
              <div>
                <p className="text-white/60 text-xs tracking-[0.3em] uppercase font-bold">Announcement</p>
                <p className="font-bold text-lg">決賽入選名單公告</p>
              </div>
            </div>
            <p className="text-white/85 text-sm md:text-base font-medium leading-relaxed">
              本次競賽吸引全國大專院校及高中職學生踴躍組隊參與，經評審團審慎討論後，選出十二隊晉級決賽。
              本屆參賽隊伍眾多、提案品質令人驚豔，在此特別感謝每一位參賽同學與指導老師的用心投入。
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {GROUPS.map((g) => (
                <span
                  key={g.name}
                  className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/95 text-sm font-bold"
                >
                  {g.name} {g.teams.length} 隊
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 入選隊伍 */}
        <div className="space-y-10">
          {GROUPS.map((group) => (
            <div key={group.name} className="scroll-anim">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{group.name}</h3>
                <span className="text-sm font-bold text-primary">{group.teams.length} 隊</span>
                <span className="text-xs text-gray-400 font-medium">（{group.note}）</span>
              </div>

              {/* 桌面版：表格 */}
              <div className="hidden md:block rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full table-fixed border-collapse text-left">
                  <thead>
                    <tr className="bg-primary/8">
                      <th className="w-[14%] px-4 py-3.5 text-sm font-bold text-gray-700">隊長</th>
                      <th className="w-[24%] px-4 py-3.5 text-sm font-bold text-gray-700">學校</th>
                      <th className="w-[22%] px-4 py-3.5 text-sm font-bold text-gray-700">隊員</th>
                      <th className="w-[24%] px-4 py-3.5 text-sm font-bold text-gray-700">店家名稱</th>
                      <th className="w-[16%] px-4 py-3.5 text-sm font-bold text-gray-700">指導老師</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.teams.map((team) => (
                      <tr key={`${group.name}-${team.leader}`} className="border-t border-gray-100 even:bg-gray-50/60">
                        <td className="px-4 py-3.5 text-sm font-bold text-gray-900 break-words">{team.leader}</td>
                        <td className="px-4 py-3.5 text-sm text-gray-600 font-medium whitespace-pre-line break-words">
                          {team.school}
                        </td>
                        <td className="px-4 py-3.5 text-sm text-gray-600 font-medium break-words">
                          {team.members.join('、')}
                        </td>
                        <td className="px-4 py-3.5 break-words">
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-secondary/8 text-secondary-dark text-sm font-bold">
                            {team.store}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-sm text-gray-600 font-medium break-words">
                          {team.advisors.join('、')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 手機版：卡片 */}
              <div className="md:hidden space-y-3">
                {group.teams.map((team) => (
                  <div
                    key={`${group.name}-m-${team.leader}`}
                    className="p-5 rounded-2xl bg-gray-50 border border-gray-100"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400 font-bold tracking-wider mb-0.5">隊長</p>
                        <p className="font-bold text-gray-900 break-words">{team.leader}</p>
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-lg bg-secondary/8 text-secondary-dark text-xs font-bold text-right break-words">
                        {team.store}
                      </span>
                    </div>
                    <dl className="space-y-2 text-sm">
                      <div className="flex gap-3">
                        <dt className="shrink-0 w-16 text-gray-400 font-bold">學校</dt>
                        <dd className="min-w-0 text-gray-700 font-medium whitespace-pre-line break-words">
                          {team.school}
                        </dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="shrink-0 w-16 text-gray-400 font-bold">隊員</dt>
                        <dd className="min-w-0 text-gray-700 font-medium break-words">{team.members.join('、')}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="shrink-0 w-16 text-gray-400 font-bold">指導老師</dt>
                        <dd className="min-w-0 text-gray-700 font-medium break-words">{team.advisors.join('、')}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 後續流程 */}
        <div className="mt-14 grid md:grid-cols-3 gap-4 scroll-anim">
          {NEXT_STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.title} className={`p-5 rounded-2xl ${step.bg}`}>
                <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-xl bg-white shadow-sm">
                  <Icon className={`w-5 h-5 ${step.color}`} />
                </div>
                <p className={`text-xs font-bold tracking-wide mb-1 ${step.color}`}>{step.date}</p>
                <h4 className="font-bold text-gray-800 mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>

        {/* 決賽地點 + PDF */}
        <div className="mt-10 text-center scroll-anim">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            決賽暨頒獎典禮：10 月 3 日．東吳大學城中校區（近捷運小南門站）
          </div>
          <div>
            <a
              href={FINALIST_PDF_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-bold
                         rounded-xl hover:bg-primary-dark transition-all hover:scale-105
                         shadow-sm shadow-primary/20 tracking-wide max-w-full"
            >
              <FileText className="w-5 h-5 shrink-0" />
              查看完整決賽入選名單
            </a>
          </div>
          <p className="mt-4 text-gray-400 text-xs font-medium leading-relaxed max-w-lg mx-auto">
            以上名單依公告 PDF 整理，若有出入請以官方公告 PDF 內容為準。
          </p>
        </div>

      </div>
    </section>
  )
}
