export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top: Logo + tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4">
            <img
              src="/aiclubusrwebsite/logo.jpg"
              alt="永續消費體驗企劃書提案競賽"
              className="w-14 h-14 rounded-full object-cover opacity-90"
            />
            <div>
              <p className="font-semibold text-white text-lg">艋舺永續消費體驗企劃書提案競賽</p>
              <p className="text-gray-400 text-sm mt-0.5">2026 企劃書提案競賽</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm text-gray-400">
            {[
              ['活動介紹', 'about'],
              ['競賽主題', 'theme'],
              ['合作店家', 'stores'],
              ['競賽辦法', 'rules'],
              ['重要時程', 'timeline'],
              ['獎金資訊', 'prizes'],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 東吳大學商學院 · 人本AI研究中心 · All rights reserved.</p>
          <div className="flex gap-6">
            <span>主辦：東吳大學商學院</span>
            <span>指導：台北市萬華街區發展協會</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
