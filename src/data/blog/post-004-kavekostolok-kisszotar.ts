import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kavekostolok-kisszotar',
  title: 'Kávékóstolók kis-szótára',
  slug: 'kavekostolok-kisszotar',
  excerpt:
    'Testesség, zamat, aroma, utóíz – a kávékóstolás világa első ránézésre bonyolultnak tűnhet.<br>Ez a kis szótár segít eligazodni az ízek és kifejezések között.',
  content: `
    <p>A szótárban szereplő kifejezésekkel senkit sem szeretnék elriasztani.</p>
    <p>A kedvenc kávénk kiválasztásánál figyeljünk oda a <b>testesség, a zamat és az aroma összhangjára</b>.</p>
    <p>Kísérletezzünk bátran, és próbáljuk felfedezni az ízeket.</p>

    <h2>A kávékóstolás szótára</h2>

    <dl>
      <dt><b>Savas</b></dt>
      <dd>Kívánatos kávéminőség.<br>
      A száj első részében átható az íz, ami a minőség és a magasföldi eredet jele.<br>
      Ez lehet: <b>citrusos, gyümölcsös</b>.</dd>

      <dt><b>Aromás</b></dt>
      <dd>Kellemesen illatozó kávé.</dd>

      <dt><b>Utóíz</b></dt>
      <dd>A kávé lenyelése után a szájban maradó ízérzet.</dd>

      <dt><b>Hamu ízű</b></dt>
      <dd>A kávénak a kandallóban kihűlt hamuára emlékeztető íz.</dd>

      <dt><b>Zöldségleves íz</b></dt>
      <dd>Kelet-afrikai kávék íze, mely gyakran párosul enyhe citrus ízzel.</dd>

      <dt><b>Sajt íz</b></dt>
      <dd>Savanyú tejfölre emlékeztető, átható zamat.</dd>

      <dt><b>Csokoládé íz</b></dt>
      <dd>Ausztrál, etióp, új-guineai fajtákra jellemző.</dd>

      <dt><b>Tiszta</b></dt>
      <dd>Semmi mellékíz, nincs utóíz.<br>
      Pl: néhány Costa Rica-i kávé esetében.</dd>

      <dt><b>Föld íz</b></dt>
      <dd>Nedves, feketeföld ízét hordozó.<br>
      Gomba ízű, pince szagú.</dd>

      <dt><b>Gyümölcsös íz</b></dt>
      <dd>Jobb fajta Arabica kávék zamata.<br>
      Sokféle gyümölcsöt idéz: ribizli, bogyósgyümölcs, citrus.</dd>

      <dt><b>Selymes íz</b></dt>
      <dd>Bor ízzel keveredő utóíz a szájban.</dd>

      <dt><b>Fűszer íz</b></dt>
      <dd>Leginkább édeskés vagy borsos aroma.<br>
      Jávai vagy zimbabwei kávékban jellemző.</dd>
    </dl>

    <h2>A kávé több mint egy forróital</h2>
    <p>Sohase feledjük: <b>a kávé egy élvezeti termék</b>.<br>
    Amely magában hordozza a harmóniát, az aromát és a pillanat örömét.</p>

    <p>Tiszteljük meg magunkat azzal, hogy amikor kávét fogyasztunk, azt méltósággal tegyük.<br>
    Nem rohanva, megpihenve.</p>

    <p>Mindig legyen pár percünk, amikor félretéve a rohanó világunkat <b>egymásra és kávéra figyelünk</b>.</p>

    <p>Ez adja a kávé titokzatosságát és az imádatát.<br>
    Hiszen a kávé több annál, mint egy finom forróital.</p>

    <p><b>A kávé maga a történelem, mely vér és izzadság által jutott el a csészénkbe.</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-03-27',
  thumbnail: '/images/kave-004-kavegep24.webp',
  ogImage: '/images/blog/og-kavekostolok-kisszotar.jpg',
  categories: ['kavekultura', 'tippek'],
  tags: ['kavekultura', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: 'Kávékóstolók kis-szótára – Ízek és aromák | Kávégép24',
    description:
      'Savas, aromás, gyümölcsös, selymes – mit jelent a kávékóstolók szótárában? Ismerd meg a legfontosabb kávéíz-kifejezéseket és válaszd meg bátrabban a kedvenc kávédat.',
    keywords:
      'kávékóstolás, kávészótár, kávéízek, kávé aroma, kávé utóíz, specialty kávé, kávékultúra, arabica kávé ízei',
  },
};

export default post;
