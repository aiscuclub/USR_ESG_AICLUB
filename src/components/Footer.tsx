export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 px-4 select-none">
      <div className="max-w-xl mx-auto text-center flex flex-col gap-2.5 text-sm tracking-wide">
        <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">永續消費體驗企劃書提案競賽</p>
        <h4 className="text-white font-bold text-base md:text-lg tracking-wide" style={{ fontFamily: 'var(--f-serif)' }}>
          艋舺永續消費體驗企劃書提案競賽
        </h4>
        <p className="text-white/60 text-xs font-medium">2026 企劃書提案競賽</p>
        <p className="text-white/30 text-[0.75rem] mt-4 font-light">
          © 2026 東吳大學人本AI研究中心　All rights reserved.
        </p>
      </div>
    </footer>
  )
}
