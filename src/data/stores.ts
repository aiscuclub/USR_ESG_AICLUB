/**
 * 合作店家資料
 *
 * 📁 圖片替換方式：
 *   將您的圖片放入 public/images/stores/<storeId>/ 資料夾
 *   命名規則：
 *     logo.jpg          (商標，建議 400x400px)
 *     photo-1.jpg       (店面/餐點照片)
 *     photo-2.jpg
 *     photo-3.jpg
 *     photo-4.jpg
 *     photo-5.jpg
 *
 *   範例：忠義號 → public/images/stores/zhongyi/logo.jpg
 *                    public/images/stores/zhongyi/photo-1.jpg ... photo-5.jpg
 */

export interface Store {
  id: string
  name: string
  category: string
  tags: string[]
  description: string
  address: string
  specialties: string[]
  logo: string
  photos: string[]
}

const BASE = '/aiclubusrwebsite/images/stores'
const PLACEHOLDER = '/aiclubusrwebsite/images/placeholder-store.jpg'

function storePhotos(id: string, count: number = 5): string[] {
  if (count === 0) return []
  return Array.from({ length: count }, (_, i) => `${BASE}/${id}/photo-${i + 1}.jpg`)
}


function storeLogo(id: string): string {
  return `${BASE}/${id}/logo.jpg`
}

export const STORES_DATA: Store[] = [
  {
    id: 'zhongyi',
    name: '忠義號',
    category: '傳統美食',
    tags: ['百年老店', '在地古早味', '便當'],
    description:
      '忠義號前身「玉味香」創立於 1922 年，歷經百年傳承，是萬華龍山商場內的招牌老字號便當店。曾獲前總統蔣經國先生蒞臨品嚐，店名由第三代老闆為紀念兄長而改為「忠義號」。每日清晨於環南市場採購，提供逾十種主菜與二十種以上現炒配菜，炸雞腿、炸排骨、紅燒牛腩皆是人氣招牌。',
    address: '台北市萬華區和平西路三段120號（龍山商場1F）',
    specialties: ['炸雞腿', '古早味炸排骨', '紅燒牛腩', '馬頭魚便當', '滷肉飯'],
    logo: storeLogo('zhongyi'),
    photos: storePhotos('zhongyi', 5),
  },
  {
    id: 'chuanye',
    name: '川業肉圓',
    category: '在地小吃',
    tags: ['傳統小吃', '肉圓', '古早味'],
    description:
      '川業肉圓是萬華商圈歷史悠久的傳統小吃店，以古法手工製作的肉圓為特色，外皮 Q 彈、內餡紮實飽滿，搭配特調醬汁，是在地人從小吃到大的懷念滋味。堅持使用每日新鮮豬肉，不添加防腐劑，是體現艋舺在地飲食文化的代表性店家。',
    address: '台北市萬華區',
    specialties: ['手工肉圓', '特調醬汁肉圓', '清蒸肉圓', '綜合小菜'],
    logo: storeLogo('chuanye'),
    photos: storePhotos('chuanye', 5),
  },
  {
    id: 'erhe',
    name: '二和珍傳統餅鋪',
    category: '傳統糕點',
    tags: ['漢餅', '手工糕點', '喜餅'],
    description:
      '二和珍傳統餅鋪是萬華地區知名的傳統漢餅老舖，傳承數代的手工技藝，以純天然食材製作各式傳統糕餅。舉凡囍餅、鳳梨酥、綠豆糕等皆為拿手品項，是許多萬華家庭辦理婚喪喜慶的首選，也是延續在地飲食文化記憶的重要場所。',
    address: '台北市萬華區',
    specialties: ['傳統漢餅', '手工鳳梨酥', '綠豆糕', '喜餅禮盒', '中秋月餅'],
    logo: storeLogo('erhe'),
    photos: storePhotos('erhe', 0),
  },
  {
    id: 'yunshui',
    name: '雲水食堂',
    category: '健康料理',
    tags: ['健康飲食', '蔬食', '輕食'],
    description:
      '雲水食堂以「回歸自然、友善土地」為理念，推崇在地小農食材，提供以蔬食為主的健康輕食料理。菜單隨時令更換，降低食物里程，落實綠色飲食精神。舒適的用餐環境亦適合各年齡層，特別為高齡族群設計軟質、易消化的友善餐點，體現青銀共融的飲食主張。',
    address: '台北市萬華區',
    specialties: ['時令蔬食定食', '在地小農沙拉', '友善農業便當', '季節湯品', '低糖養生甜點'],
    logo: storeLogo('yunshui'),
    photos: storePhotos('yunshui', 0),
  },
  {
    id: 'cura',
    name: 'CURA PIZZA',
    category: '創意餐飲',
    tags: ['義式披薩', '創意料理', '年輕品牌'],
    description:
      'CURA PIZZA 將義式薄餅工藝與台灣在地食材融合，創造出獨特的「台灣味披薩」，如九層塔蛤蜊、麻油雞、三杯杏鮑菇等口味，吸引大批年輕族群與外籍旅客慕名而來。品牌以「CURA（義大利文：用心）」為名，致力於為傳統商圈帶入創新活力。',
    address: '台北市萬華區',
    specialties: ['九層塔蛤蜊披薩', '三杯杏鮑菇披薩', '麻油雞薄餅', '台式佐餐飲料', '創意前菜'],
    logo: storeLogo('cura'),
    photos: storePhotos('cura', 5),
  },
  {
    id: 'zuozuo',
    name: '坐坐吧',
    category: '休閒飲食',
    tags: ['下午茶', '咖啡', '輕食'],
    description:
      '坐坐吧是萬華商圈的生活風格咖啡館，以「讓萬華人有個好好坐下來的地方」為初衷，提供精品咖啡、手工甜點與輕食，打造溫暖舒適的社區聚落。店內常舉辦在地文化展覽與小型社群活動，成為青年與長輩交流的友善空間。',
    address: '台北市萬華區',
    specialties: ['精品單品咖啡', '手工司康', '艋舺特調茶飲', '在地食材輕食', '每日手工甜點'],
    logo: storeLogo('zuozuo'),
    photos: storePhotos('zuozuo', 0),
  },
  {
    id: 'shangguan',
    name: '上官木桶和牛海鮮火鍋',
    category: '精緻火鍋',
    tags: ['和牛', '海鮮', '精緻鍋物'],
    description:
      '上官木桶火鍋以嚴選和牛與新鮮海鮮為主角，搭配職人精心熬製的高湯，提供奢華而精緻的個人鍋物體驗。店內環境設計沉穩典雅，同時提供高齡友善座位設計與無障礙服務，是商圈中結合高品質餐飲與人文關懷的代表店家。',
    address: '台北市萬華區',
    specialties: ['頂級和牛鍋', '龍蝦海鮮鍋', '招牌木桶高湯', '季節時蔬拼盤', '手工甜點'],
    logo: storeLogo('shangguan'),
    photos: storePhotos('shangguan', 0),
  },
  {
    id: 'budian',
    name: '布田食品 艋舺老爐火花生糖',
    category: '傳統糖果',
    tags: ['花生糖', '古早味', '伴手禮'],
    description:
      '布田食品以「艋舺老爐火花生糖」聞名，傳承三代的古法炒製工藝，使用雲林花生與麥芽糖熬製，香氣濃郁、口感酥脆。是萬華商圈最具代表性的傳統糖果名店，也是外地旅客必帶的艋舺伴手禮，完整保存了艋舺飲食文化的甜蜜記憶。',
    address: '台北市萬華區',
    specialties: ['老爐火花生糖', '芝麻糖', '古早味牛軋糖', '節慶禮盒', '特製手工糖片'],
    logo: storeLogo('budian'),
    photos: storePhotos('budian', 0),
  },
  {
    id: 'yifeizi',
    name: '一肥仔',
    category: '在地美食',
    tags: ['滷味', '台式', '古早味'],
    description:
      '一肥仔是萬華街頭巷尾廣受喜愛的在地美食小店，以家傳配方熬製的滷汁為靈魂，豆干、海帶、豬耳朵等各式滷味入味而不過鹹，是許多萬華居民的日常饑點。店名親切接地氣，呈現了艋舺庶民飲食的溫暖日常。',
    address: '台北市萬華區',
    specialties: ['家傳滷豆干', '滷海帶', '滷豬耳朵', '古早滷味拼盤', '滷蛋'],
    logo: storeLogo('yifeizi'),
    photos: storePhotos('yifeizi', 0),
  },
  {
    id: 'yixin',
    name: '一鑫鵝肉',
    category: '傳統料理',
    tags: ['鵝肉', '台式料理', '家常菜'],
    description:
      '一鑫鵝肉是萬華在地老饕必訪的傳統料理館，以新鮮鵝肉為主角，清燙保留原汁原味，搭配特調薑蔥醬，皮薄肉嫩、鮮甜無比。同時供應各式台式家常菜與熱炒，是一間充滿人情味、價格親民的庶民食堂，完整體現艋舺飲食文化的溫暖本色。',
    address: '台北市萬華區',
    specialties: ['清燙鵝肉切盤', '薑蔥鵝肉飯', '鵝血湯', '台式熱炒', '鵝肉麵線'],
    logo: storeLogo('yixin'),
    photos: storePhotos('yixin', 0),
  },
  {
    id: 'jia-la',
    name: '家辣麻辣鴨血',
    category: '特色小吃',
    tags: ['麻辣', '鴨血', '川式'],
    description:
      '家辣麻辣鴨血專攻川式麻辣口味，以獨門配方燉製的麻辣湯底香麻夠勁，鴨血嫩滑鮮美，豆腐、毛肚等配料豐富多元。店家重視食材新鮮度，每日限量供應，是萬華商圈中年輕族群與美食愛好者趨之若鶩的人氣排隊名店。',
    address: '台北市萬華區',
    specialties: ['招牌麻辣鴨血', '麻辣豆腐', '麻辣毛肚', '特製麻辣湯', '川味小菜'],
    logo: storeLogo('jia-la'),
    photos: storePhotos('jia-la', 4),
  },
  {
    id: 'weixing',
    name: '唯星蛋糕',
    category: '甜點烘焙',
    tags: ['蛋糕', '烘焙', '客製化'],
    description:
      '唯星蛋糕是萬華地區深受好評的手工烘焙坊，以無添加、天然食材為堅持，提供戚風蛋糕、生乳捲、客製化造型蛋糕等多元品項。採用在地雞蛋與台灣鮮乳，支持食農教育與本土食材，是艋舺商圈中兼具永續理念與精緻口感的甜點代表。',
    address: '台北市萬華區',
    specialties: ['戚風蛋糕', '台灣鮮乳生乳捲', '客製化造型蛋糕', '常溫無添加磅蛋糕', '每日限定甜點'],
    logo: storeLogo('weixing'),
    photos: storePhotos('weixing', 3),
  },
]

export const CATEGORY_COLORS: Record<string, string> = {
  '傳統美食': 'bg-orange-100 text-orange-700',
  '在地小吃': 'bg-red-100 text-red-700',
  '傳統糕點': 'bg-yellow-100 text-yellow-800',
  '健康料理': 'bg-green-100 text-green-700',
  '創意餐飲': 'bg-purple-100 text-purple-700',
  '休閒飲食': 'bg-blue-100 text-blue-700',
  '精緻火鍋': 'bg-rose-100 text-rose-700',
  '傳統糖果': 'bg-amber-100 text-amber-700',
  '在地美食': 'bg-teal-100 text-teal-700',
  '傳統料理': 'bg-indigo-100 text-indigo-700',
  '特色小吃': 'bg-pink-100 text-pink-700',
  '甜點烘焙': 'bg-fuchsia-100 text-fuchsia-700',
}
