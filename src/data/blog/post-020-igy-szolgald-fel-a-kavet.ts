import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'igy-szolgald-fel-a-kavet',
  title: 'Így szolgáld fel a kávét! – Egyszerű trükk a lenyűgöző tálaláshoz',
  slug: 'igy-szolgald-fel-a-kavet',
  excerpt:
    'Sok esetben a látvány az, ami miatt megkívánunk egy finom ételt vagy italt.<br>Te is könnyen jó benyomást tehetsz a vendégeidre – mutatjuk, hogyan!',
  content: `
    <p>Sok esetben a <b>látvány az, ami miatt megkívánunk</b> egy finom ételt vagy italt.<br>
    Ezt tudják jól a vendéglátós szakmában.<br>
    Az étel elkészítésére fordított idő nem egy esetben a <b>tálalásra van szánva</b>.</p>

    <p>Te is könnyedén jó benyomást tehetsz a vendégeidre, ha szánsz egy kis időt a tálalásra.<br>
    Az alábbi videó megmutatja, hogy egy <b>Cappuccinot milyen egyszerű trükkel</b> tudsz feldobni.</p>

    <div class="not-prose my-8">
      <div class="relative w-full" style="padding-bottom: 56.25%;">
        <iframe
          class="absolute inset-0 w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/jYq1pHJYQmw"
          title="Így tálald fel a kávét – Cappuccino tálalási trükk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <p>Egy kis odafigyeléssel és kreativitással a mindennapi kávézás is <b>különleges élménnyé</b> válhat.<br>
    Ha minőségi kávégépet bérelnél, amivel ilyen szép kávékat készíthetsz, <b>hívj bátran!</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-11-02',
  thumbnail: '/images/kave-020-kavegep24.webp',
  ogImage: '/images/blog/og-igy-szolgald-fel-a-kavet.jpg',
  categories: ['kavekultura'],
  tags: ['kavekultura', 'cappuccino'],
  featured: false,
  published: true,
  seo: {
    title: 'Így szolgáld fel a kávét! – Egyszerű tálalási trükk | Kávégép24',
    description:
      'Egy egyszerű trükkel lenyűgözheted a vendégeidet a cappuccino tálalásával. Nézd meg a videót és te is profi módra tálalhatod a kávét!',
    keywords:
      'kávé tálalás, cappuccino tálalás, latte art, kávé trükk, kávézás otthon, kávé felszolgálás, cappuccino díszítés',
  },
};

export default post;
