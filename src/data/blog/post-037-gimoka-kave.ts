import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'gimoka-kave',
  title: 'Gimoka kávé – és ami mögötte van',
  slug: 'gimoka-kave',
  excerpt:
    'Az 1980-as évek elején Ivan Padelli kávészenvedélyének és csodálatos üzleti érzékének köszönhetően létrejött a Gimoka Gruppo vállalat.<br>Ma Olaszország második legnagyobb kávégyára.',
  content: `
    <p>Az 1980-as évek elején <b>Ivan Padelli</b> kávészenvedélyének és csodálatos üzleti érzékének köszönhetően létrejött a <b>Gimoka Gruppo</b> vállalat.<br>
    A jól strukturáltság és a szenvedély folyamatos piaci térnyerést eredményezett.</p>

    <h2>A Gimoka Gruppo</h2>
    <p>A Gimoka Gruppo egy olyan kávégyártásra szakosodott nagyvállalat, amely az <b>értékesítési láncot teljes egészében felügyeli</b>:<br>
    a zöld kávé előállításától kezdve a pörkölésen és a csomagoláson keresztül, egészen az értékesítésig.</p>

    <p>Filozófiájuk és kávészenvedélyük a csészében ér véget.<br>
    Jelenleg a <b>második legnagyobb kávégyár Olaszországban</b>.<br>
    Több mint <b>20 000 tonna zöldkávét</b> dolgoznak fel évente.<br>
    Jelen vannak a Horeca, Vending és az otthoni kávéfogyasztás területén egyaránt.</p>

    <h2>A Gimoka Gruppo portfóliója</h2>
    <ul>
      <li>Gimoka Coffee Instinct</li>
      <li>Caffé SI</li>
      <li>Espresso Italia</li>
      <li>Gran Caffè Garibaldi</li>
      <li>Evasioni Creme Fredde</li>
    </ul>

    <p>Eme sokoldalúság eredménye, hogy <b>az átlagos minőségtől a High-End kávéig</b> minden megtalálható a cég termékei között.</p>

    <h2>Folyamatos fejlődés és kapszulás termékek</h2>
    <p>A Gimoka Gruppo folyamatosan fejlődő technológiai know-how-val rendelkezik, amely képes kielégíteni a fejlődő piac változatos igényeit.</p>

    <p>Ma már nem csak a pörkölt szemes kávét és az őrölt kávét keresik az ügyfelek.<br>
    Egyre elterjedtebbek a különböző kapszulás technológiák is – erre a változásra a Gimoka Gruppo azonnal reagált.</p>

    <ul>
      <li><b>Nespresso kompatibilis kapszula?</b> Nem gond.</li>
      <li><b>Dolce Gusto gép?</b> Megoldott az is.</li>
      <li><b>Instant kávé?</b> Természetesen van rá megoldás.</li>
      <li><b>Koffeinmentes?</b> Arra is született megoldás.</li>
    </ul>

    <h2>Magyarországon: kedvenckaved.hu</h2>
    <p>Magyarországon is széles választékkal van jelen a Gimoka.<br>
    Állandó és megbízható partnerünk a <b>kedvenckaved.hu</b> – egy könnyen áttekinthető, felhasználóbarát portál.<br>
    Ebben a webshopban szinte minden megtalálható, amire egy kávéfanatikusnak szüksége lehet.<br>
    <b>Koffeinben nincs hiány.</b></p>

    <p>Büszkék vagyunk, hogy a sokéves együttműködésünk eredményeként <b>több tízezer vásárlói igényt</b> tudtunk kiszolgálni.</p>

    <p>Amennyiben további kérdésed lenne, <b>hívj minket bizalommal!</b><br>
    <b>+36 20 511 1070</b><br>
    <b>info@kavegep24.hu</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2019-09-30',
  thumbnail: '/images/kave-037-kavegep24.webp',
  ogImage: '/images/blog/og-gimoka-kave.jpg',
  categories: ['kavekultura'],
  tags: ['kavekultura', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: 'Gimoka kávé – Olaszország második legnagyobb kávégyára | Kávégép24',
    description:
      'A Gimoka Gruppo évente 20 000 tonna zöldkávét dolgoz fel – Olaszország második legnagyobb kávégyára. Szemes, őrölt, kapszulás és instant kávék széles választéka.',
    keywords:
      'Gimoka kávé, Gimoka Gruppo, olasz kávé, szemes kávé, kapszulás kávé, Nespresso kompatibilis kapszula, Dolce Gusto kávé, kávé nagykereskedés',
  },
};

export default post;
