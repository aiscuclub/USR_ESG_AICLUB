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
  website?: string
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
      '忠義號便當源自1922年，是萬華在地的百年老味道。秉持「忠於原味，義氣待客」的精神，四代傳承經典台式便當，以招牌大雞腿、古早味炸排骨為主打，搭配每日用心準備的菜色。從熟悉滋味到視覺與餐點升級，忠義號希望讓每一位走進來的客人，都能吃到一份實在、滿足又有人情味的便當。',
    address: '台北市萬華區和平西路三段120號（龍山商場1F）',
    specialties: ['炸雞腿', '古早味炸排骨', '紅燒牛腩', '馬頭魚便當', '滷肉飯'],
    logo: storeLogo('zhongyi'),
    photos: storePhotos('zhongyi', 5),
    website: 'https://www.facebook.com/chungyiho1975?locale=zh_TW',
  },
  {
    id: 'chuanye',
    name: '川業肉圓',
    category: '在地小吃',
    tags: ['傳統小吃', '肉圓', '古早味'],
    description:
      '川業是一家創立於1910年致力於傳承與創新結合的傳統美食品牌，專注於手工製作紅麴及紅糟肉圓。位於歷史悠久的萬華，我們承襲了百年的古早味秘方，並在製作過程中注入現代創新的技術，為顧客提供獨特的美食體驗。川業堅持選用新鮮的食材，並自釀紅麴，確保每一口都能感受到食材的原味與紅麴的香氣。憑藉著好口碑與親切的服務，我們成為了本地人與遊客心中的美食首選。來到川業，您不僅能品嚐到傳統的美味，更能感受到家的溫暖與濃厚的人情味。',
    address: '台北市萬華區廣州街165號',
    specialties: ['手工肉圓', '特調醬汁肉圓', '清蒸肉圓', '綜合小菜'],
    logo: storeLogo('chuanye'),
    photos: storePhotos('chuanye', 5),
    website: 'https://linktr.ee/chuanyeh1910',
  },
  {
    id: 'erhe',
    name: '二和珍傳統餅鋪',
    category: '傳統糕點',
    tags: ['漢餅', '手工糕點', '喜餅'],
    description:
      '二和珍傳統餅鋪是萬華地區知名的傳統漢餅老舖，傳承數代的手工技藝，以純天然食材製作各式傳統糕餅。舉凡囍餅、鳳梨酥、綠豆糕等皆為拿手品項，是許多萬華家庭辦理婚喪喜慶的首選，也是延續在地飲食文化記憶的重要場所。',
    address: '台北市萬華區康定路308號',
    specialties: ['傳統漢餅', '手工鳳梨酥', '綠豆糕', '喜餅禮盒', '中秋月餅'],
    logo: `${BASE}/erhe/logo.webp`,
    photos: storePhotos('erhe', 3),
  },
  {
    id: 'yunshui',
    name: '雲水食堂',
    category: '健康料理',
    tags: ['健康飲食', '蔬食', '輕食'],
    description:
      '榮獲2025台北國際牛肉麵節金牌獎，承襲父親手藝，嚴選頂級牛腱心，以牛骨與自製牛油慢火熬湯，湯頭清爽醇厚。手工麵條不含防腐劑，自製小菜，呈現湯頭溫潤與牛腱心醇香軟嫩。用心守護「家的味道」，傳遞萬華人情味。',
    address: '台北市萬華區',
    specialties: ['時令蔬食定食', '在地小農沙拉', '友善農業便當', '季節湯品', '低糖養生甜點'],
    logo: storeLogo('yunshui'),
    photos: storePhotos('yunshui', 6),
  },
  {
    id: 'cura',
    name: 'CURA PIZZA',
    category: '創意餐飲',
    tags: ['義式披薩', '創意料理', '年輕品牌'],
    description:
      '歷時一甲子的老宅， 座落於昔稱加蚋的百年街區。 這裡曾是一間 照顧鄰舍的西藥房。 ⸻ 遠赴拿坡里學藝歸來的職人， 承襲祖輩待人的溫暖， 秉著醫食同源的信念， 以披薩延續人與土地的情感。 ⸻ 22小時以上低溫發酵麵團， 搭配義大利傳統石窯烘烤， 用最古老的方式， 烤出最真誠的味道。 ⸻ 願每一位來到這裡的人， 都能被好好接待， 被溫暖照顧。 彼此照顧｜激發愛心｜勉勵行善',
    address: '台北市萬華區東園街68-9號',
    specialties: ['九層塔蛤蜊披薩', '三杯杏鮑菇披薩', '麻油雞薄餅', '台式佐餐飲料', '創意前菜'],
    logo: storeLogo('cura'),
    photos: storePhotos('cura', 5),
    website: 'LINE ID : @curapizza',
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
    photos: storePhotos('zuozuo', 3),
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
    photos: storePhotos('shangguan', 2),
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
    photos: storePhotos('budian', 2),
  },
  {
    id: 'yifeizi',
    name: '一肥仔',
    category: '在地美食',
    tags: ['滷味', '台式', '古早味'],
    description:
      '一肥仔是萬華街頭巷尾廣受喜愛的在地美食小店，以家傳配方熬製的滷汁為靈魂，豆干、海帶、豬耳朵等各式滷味入味而不過鹹，是許多萬華居民的日常饑點。店名親切接地氣，呈現了艋舺庶民飲食的溫暖日常。',
    address: '台北市萬華區貴陽街二段230-1號',
    specialties: ['家傳滷豆干', '滷海帶', '滷豬耳朵', '古早滷味拼盤', '滷蛋'],
    logo: storeLogo('yifeizi'),
    photos: storePhotos('yifeizi', 5),
  },
  {
    id: 'yixin',
    name: '一鑫鵝肉',
    category: '傳統料理',
    tags: ['鵝肉', '台式料理', '家常菜'],
    description:
      '一鑫鵝肉是萬華在地老饕必訪的傳統料理館，以新鮮鵝肉為主角，清燙保留原汁原味，搭配特調薑蔥醬，皮薄肉嫩、鮮甜無比。同時供應各式台式家常菜與熱炒，是一間充滿人情味、價格親民的庶民食堂，完整體現艋舺飲食文化的溫暖本色。',
    address: '台北市萬華區廣州街95-1號',
    specialties: ['清燙鵝肉切盤', '薑蔥鵝肉飯', '鵝血湯', '台式熱炒', '鵝肉麵線'],
    logo: storeLogo('yixin'),
    photos: storePhotos('yixin', 2),
  },
  {
    id: 'jia-la',
    name: '家辣麻辣鴨血',
    category: '特色小吃',
    tags: ['麻辣', '鴨血', '川式'],
    description:
      '一般小吃店不敢用的青花椒、紅花椒， 我們用，一斤要價將近一千塊。 滷味、辣油、餛飩，全部自己做。 麻辣湯頭、牛肉湯頭，食品安全檢驗，產品都符合標準，就是要讓客人吃的安心。',
    address: '台北市萬華區',
    specialties: ['招牌麻辣鴨血', '麻辣豆腐', '麻辣毛肚', '特製麻辣湯', '川味小菜'],
    logo: storeLogo('jia-la'),
    photos: storePhotos('jia-la', 4),
    website: 'https://www.instagram.com/jiala_beefnoodle?igsh=czBtdHowYXo4amQ2&utm_source=qr',
  },
  {
    id: 'weixing',
    name: '唯星蛋糕',
    category: '甜點烘焙',
    tags: ['蛋糕', '烘焙', '客製化'],
    description:
      '唯星是一家隱身於萬華巷弄的甜點店， 我們專注於製作融合台灣在地食材的法式蛋糕， 用一塊塊甜點，傳遞土地的滋味與生活的溫度。從布列塔尼的酥香出發， 我們加入台灣的山珍海味：烏魚子、櫻花蝦，讓法式酥餅多了一份在地的風土與深度。我們也擅長以台灣水果入味， 草莓、芒果、鳳梨、蘋果，每一種果香， 都被製作成布列塔尼蛋糕與達克瓦茲， 成為旅人心中最幸福的記憶。 此外，我們將台灣茶的細緻香氣融入沙布蕾餅乾， 四季春、紅烏龍、金萱、紅茶， 茶香在餅乾中緩緩釋放，成為日常最溫柔的陪伴。我們相信，甜點不只是味覺的享受， 更是情感的載體，是能在心裡留下風景的味道。邀您在萬華老城探險， 對著唯星許願：布列塔尼不遠， 一塊蛋糕，就能讓夢想與味蕾連線。',
    address: '台北市萬華區',
    specialties: ['戚風蛋糕', '台灣鮮乳生乳捲', '客製化造型蛋糕', '常溫無添加磅蛋糕', '每日限定甜點'],
    logo: storeLogo('weixing'),
    photos: storePhotos('weixing', 3),
    website: 'https://www.starwaycake.com',
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
