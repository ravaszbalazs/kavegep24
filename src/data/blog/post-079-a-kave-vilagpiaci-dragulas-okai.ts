import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'a-kave-vilagpiaci-dragulas-okai',
  title: 'A kávé világpiaci drágulás okai',
  slug: 'a-kave-vilagpiaci-dragulas-okai',
  excerpt:
    'Az elmúlt két évben a kávé ára akár 70%-kal is megemelkedett a világpiacon.<br>Mi áll az áremelkedés mögött – és mire számíthatunk 2025-ben?',
  content: `
    <h2>A kávé világpiaci drágulása: mi áll az áremelkedés mögött?</h2>
    <p>Az elmúlt két évben a kávé ára <b>jelentősen megugrott a világpiacon</b>.<br>
    A 2022 óta tapasztalható drágulás egyes becslések szerint <b>akár 70%-os</b> is lehet, és a tendencia tovább folytatódhat 2025-ben.<br>
    A kávéárak emelkedése nem véletlen, hanem több gazdasági és természeti tényező együttes hatásának következménye.</p>

    <h2>Időjárási viszontagságok és éghajlatváltozás</h2>
    <p>A kávé egyik legnagyobb termelője <b>Brazília</b>, amely az Arabica kávé globális ellátásának jelentős részét adja.<br>
    Az elmúlt években azonban az országban extrém időjárási körülmények uralkodtak: fagyok, aszályok és heves esőzések is sújtották a termést.<br>
    Hasonló problémák jelentkeztek <b>Vietnámban</b>, a világ egyik legnagyobb Robusta kávétermelőjénél, ahol az aszály miatt csökkent a terméshozam.<br>
    Az éghajlatváltozás következtében a termelői országok egyre nehezebben tudják biztosítani a stabil ellátást, ami <b>jelentősen hozzájárul az árak növekedéséhez</b>.</p>

    <h2>Gazdasági tényezők és infláció</h2>
    <p>A világpiaci infláció és az emelkedő szállítási költségek is jelentősen befolyásolják a kávé árát.<br>
    Az <b>energiaárak növekedése</b> drágábbá tette a kávétermelést és szállítást.<br>
    Emellett a <b>munkaerőhiány és a megemelkedett bérköltségek</b> szintén növelték a termelési kiadásokat.</p>

    <h2>Növekvő kereslet</h2>
    <p>A kávéfogyasztás világszerte növekszik, különösen <b>Ázsiában</b>, ahol egyre többen fedezik fel a kávézás kultúráját.<br>
    A növekvő kereslet és a csökkenő termelés <b>együttesen tovább növeli az árakat</b>.</p>

    <h2>Összefoglalás</h2>
    <p>Ezek a tényezők összességében azt vetítik előre, hogy a kávé ára <b>továbbra is magas maradhat</b> a következő években.<br>
    Ha minőségi kávét és kávégépet keres elérhető feltételekkel, forduljon hozzánk – segítünk megtalálni a legjobb megoldást!</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2025-02-19',
  updatedAt: '2025-02-19',
  thumbnail: '/images/kave-079-kavegep24.webp',
  ogImage: '/images/blog/og-a-kave-vilagpiaci-dragulas-okai.jpg',
  categories: ['kavekultura'],
  tags: ['kávé drágulás', 'kávé világpiac', 'kávé ár 2025', 'klímaváltozás kávé', 'kávé infláció'],
  featured: false,
  published: true,
  seo: {
    title: 'A kávé világpiaci drágulás okai – Miért drágul a kávé? | Kávégép24',
    description:
      'Miért drágul a kávé? Időjárási viszontagságok, infláció, növekvő kereslet – összegyűjtöttük a kávé világpiaci áremelkedésének fő okait 2025-ben.',
    keywords:
      'kávé drágulás okai, kávé ár emelkedés, kávé világpiac 2025, miért drága a kávé, kávé infláció, Arabica Robusta ár',
  },
};

export default post;
