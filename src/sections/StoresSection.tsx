import { useState } from 'react'
import { X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { STORES_DATA, CATEGORY_COLORS, type Store } from '../data/stores'
import AnimatedTitle from '../components/AnimatedTitle'

const PLACEHOLDER = '/aiclubusrwebsite/images/placeholder-store.jpg'

// ── 照片輪播元件 ──────────────────────────────────────────
function PhotoCarousel({ photos, name }: { photos: string[]; name: string }) {
  const [idx, setIdx] = useState(0)

  // 如果沒有照片，顯示「準備中」純素色底
  if (!photos || photos.length === 0) {
    return (
      <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden select-none flex flex-col items-center justify-center gap-2">
        <span className="text-sm font-semibold tracking-widest text-gray-400">準備中</span>
      </div>
    )
  }

  // 如果只有 1 張照片，顯示單張照片（無互動按鈕）
  if (photos.length === 1) {
    return (
      <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden select-none">
        <img
          src={photos[0]}
          alt={`${name} 照片`}
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER }}
        />
      </div>
    )
  }

  const prev = () => setIdx((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setIdx((i) => (i + 1) % photos.length)

  return (
    <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden select-none group">
      <img
        src={photos[idx]}
        alt={`${name} 照片 ${idx + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
        onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER }}
      />

      {/* 左右箭頭 */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                   bg-black/40 text-white opacity-0 group-hover:opacity-100
                   transition-opacity hover:bg-black/60"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                   bg-black/40 text-white opacity-0 group-hover:opacity-100
                   transition-opacity hover:bg-black/60"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* 圓點指示器 */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* 照片計數 */}
      <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/40 rounded-full
                      text-white text-xs font-medium">
        {idx + 1} / {photos.length}
      </div>
    </div>
  )
}


// ── 店家 Modal ────────────────────────────────────────────
function StoreModal({ store, onClose }: { store: Store; onClose: () => void }) {
  const catColor = CATEGORY_COLORS[store.category] ?? 'bg-gray-100 text-gray-600'

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal 容器 */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
                   bg-white rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100
                     hover:bg-gray-200 transition-colors text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 照片輪播 */}
        <div className="p-4 pb-0">
          <PhotoCarousel photos={store.photos} name={store.name} />
        </div>

        {/* 內容 */}
        <div className="p-6">
          {/* 標頭 */}
          <div className="flex items-start gap-4 mb-4">
            {/* Logo */}
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gray-100 shrink-0 bg-gray-50 flex items-center justify-center">
              <img
                src={store.logo}
                alt={`${store.name} Logo`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.target as HTMLImageElement
                  t.style.display = 'none'
                  t.parentElement!.innerHTML =
                    `<span class="text-xs font-bold text-gray-400 tracking-wider">準備中</span>`
                }}
              />
            </div>
            <div className="flex-1">
              <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-1.5 ${catColor}`}>
                {store.category}
              </span>
              <h2 className="text-2xl font-semibold text-gray-900">{store.name}</h2>
              {store.address && (
                <div className="flex items-center gap-1.5 mt-1 text-gray-500 text-sm">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{store.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* 標籤 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {store.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* 店家簡介 */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              店家介紹
            </h3>
            <p className="text-gray-700 leading-relaxed font-light text-sm">
              {store.description}
            </p>
          </div>

          {/* 招牌品項 */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              招牌品項
            </h3>
            <div className="flex flex-wrap gap-2">
              {store.specialties.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 bg-primary/8 text-primary text-xs rounded-xl font-medium border border-primary/15"
                >
                  ✦ {s}
                </span>
              ))}
            </div>
          </div>

          {/* 店家社群 / 網站連結 */}
          {store.website && (
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                相關連結 / 資訊
              </h3>
              {store.website.startsWith('http') ? (
                <a
                  href={store.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-white text-xs font-bold rounded-xl hover:bg-secondary/90 transition-all hover:scale-105 shadow-sm shadow-secondary/15"
                >
                  前往官網 / 社群 →
                </a>
              ) : (
                <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl border border-gray-200">
                  {store.website}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── 店家卡片 ──────────────────────────────────────────────
function StoreCard({ store, index, onClick }: { store: Store; index: number; onClick: () => void }) {
  const catColor = CATEGORY_COLORS[store.category] ?? 'bg-gray-100 text-gray-600'

  return (
    <button
      onClick={onClick}
      className={`scroll-anim stagger-${Math.min(index + 1, 6)}
                  w-full text-left card-hover matte-glass rounded-2xl
                  overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary/40`}
    >
      {/* 縮圖 */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        {store.photos && store.photos.length > 0 ? (
          <img
            src={store.photos[0]}
            alt={store.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER }}
          />
        ) : (
          <div className="w-full h-full bg-gray-100/90 flex flex-col items-center justify-center select-none">
            <span className="text-sm font-semibold tracking-widest text-gray-400">準備中</span>
          </div>
        )}
        {/* Logo 角標 */}
        <div className="absolute bottom-2 left-2 w-9 h-9 rounded-xl overflow-hidden
                        border-2 border-white shadow-md bg-white">
          <img
            src={store.logo}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              const t = e.target as HTMLImageElement
              t.style.display = 'none'
              if (t.parentElement) t.parentElement.style.display = 'none'
            }}
          />
        </div>
        {/* 序號 */}
        <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 text-white
                        text-xs font-semibold flex items-center justify-center">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* 文字資訊 */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${catColor}`}>
            {store.category}
          </span>
          <span className="text-xs text-gray-400">查看詳情 →</span>
        </div>
        <h3 className="font-semibold text-gray-800 group-hover:text-secondary transition-colors leading-snug">
          {store.name}
        </h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2 font-light leading-relaxed">
          {store.description.slice(0, 55)}…
        </p>
        {/* 底部高亮線 */}
        <div className="mt-3 h-0.5 w-0 bg-secondary rounded-full group-hover:w-full transition-all duration-500" />
      </div>
    </button>
  )
}

// ── 主 Section ────────────────────────────────────────────
export default function StoresSection() {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null)

  return (
    <>
      <section id="stores" className="py-20 md:py-28 px-4 bg-bg-warm">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="section-label text-secondary/60 text-xs tracking-[0.4em] uppercase scroll-anim mb-4">
            03 / STORES
          </div>
          <AnimatedTitle
            text="合作店家"
            highlight="店家"
            highlightClass="text-secondary"
            className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
          />
          <p className="mt-6 text-center text-gray-500 max-w-xl mx-auto mb-5 scroll-anim font-medium leading-relaxed">
            本次競賽設有 12 家合作店家，每隊需從名單中挑選一家作為提案對象，設計完整行銷企劃案。
          </p>
        </div>
          <div className="text-center mb-16 scroll-anim">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                             bg-secondary/10 text-secondary text-sm font-medium border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              點擊卡片查看詳細資訊・每隊選擇 1 家店進行提案
            </span>
          </div>

          {/* Store Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {STORES_DATA.map((store, i) => (
              <StoreCard
                key={store.id}
                store={store}
                index={i}
                onClick={() => setSelectedStore(store)}
              />
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-6 scroll-anim font-light">
            ＊各隊可自由選擇個案店家，單一店家可接受多組提案。
          </p>
        </div>
      </section>

      {/* Store Detail Modal */}
      {selectedStore && (
        <StoreModal store={selectedStore} onClose={() => setSelectedStore(null)} />
      )}
    </>
  )
}
