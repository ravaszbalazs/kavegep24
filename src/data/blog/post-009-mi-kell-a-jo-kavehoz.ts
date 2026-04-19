import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'mi-kell-a-jo-kavehoz',
  title: 'Mi kell a jó kávéhoz?',
  slug: 'mi-kell-a-jo-kavehoz',
  excerpt:
    'Minőségi kávé, jó gép, tiszta víz és szaktudás – ez a négy alappillér.<br>De mi a helyzet az automata gépekkel és a barista szerepével? Megmutatjuk.',
  content: `
    <h2>Mi kell a jó kávéhoz?</h2>
    <p>A jó kávéhoz négy dolog kell:</p>
    <ul>
      <li><b>minőségi kávétermék</b></li>
      <li><b>jó kávégép</b></li>
      <li><b>jó minőségű víz</b></li>
      <li>és nem kevés <b>szaktudás</b> annak a részéről, aki a kávét készíti</li>
    </ul>

    <p>Amennyiben valaki automata gépet üzemeltet, az kihagyja a leggyengébb láncszemet a felsoroltakból.<br>
    Magát az embert – aki egyébként a kávékészítés <b>legfontosabb eleme</b>.</p>

    <p>Ha nincs szakértelem, türelem és odafigyelés, akkor a végtermék könnyen a kukában végzi.</p>

    <p>Ellenben az automata gépeknél a gyártó úgy állítja be a kávégépet, hogy az <b>állandó és kiváló minőségű terméket</b> készítsen a nap bármely pillanatában.</p>

    <h2>Mi kell a jó cappuccinóhoz?</h2>
    <p>Az automata gépek terén a közelmúlt <b>legnagyobb innovációja a tejhabosítófej kifejlesztése</b> volt.<br>
    Ennek segítségével egyetlen gombnyomással lehet cappuccinót, latte macchiatót készíteni anélkül, hogy a poharat el kellene mozdítani.</p>

    <p>Ezzel sok időt meg lehet spórolni – miközben készül a termék, más rendelést is elő lehet készíteni, vagy kivinni a vendégnek.</p>

    <h2>Feloldhatatlan ellentmondás?</h2>
    <p>Érdekes, de bizonyára nem feloldhatatlan ellentmondás:<br>
    az autentikus vendéglátóhelyi kávéfogyasztáshoz hozzátartozik ugyan a barista személye,<br>
    ám az egyre tökéletesebb kávéfőzők maguk is <b>egyre tökéletesebb kávékat</b> készítenek.</p>

    <h2>Egy kávégép lehet intelligens – de nem helyettesíti a baristát</h2>
    <p>Vannak helyek, ahová nem illik egy automata kávégép, és vannak helyek, ahová nem kell barista.</p>

    <ul>
      <li>A <b>klasszikus éttermekben és kávézókban</b> mindig karos gépet helyeznek ki – ennek tradíciója van.<br>
      Ezeken a helyeken rendszerint van egy szakember, aki használni tudja azt.<br>
      Talán épp ilyen célra találták ki a manuális gőzkarral ellátott automata gépeket.</li>

      <li><b>Gyorsétterembe, bisztróba, cukrászdába vagy pékségbe</b> – ahol „coffee to go"-ra is szükség van a kínálatban –<br>
      mindenféleképpen automata kávéfőzőt ajánlok.<br>
      Nemcsak a készítés folyamata gyorsabb, de <b>nyomon követhető a felhasználás</b> is.</li>
    </ul>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-09-21',
  thumbnail: '/images/kave-009-kavegep24.webp',
  ogImage: '/images/blog/og-mi-kell-a-jo-kavehoz.jpg',
  categories: ['kavekultura', 'tippek'],
  tags: ['kavekultura', 'espresso', 'cappuccino'],
  featured: false,
  published: true,
  seo: {
    title: 'Mi kell a jó kávéhoz? Gép, víz, kávé és szaktudás | Kávégép24',
    description:
      'A jó kávéhoz 4 dolog kell: minőségi kávé, megfelelő gép, jó víz és szaktudás. Mikor válasszunk automata gépet és mikor kell barista? Szakértői útmutató.',
    keywords:
      'jó kávé titka, mi kell a jó kávéhoz, automata kávégép vs barista, cappuccino készítés, tejhabosító, kávékészítés otthon',
  },
};

export default post;
