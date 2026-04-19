import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kaves-receptek',
  title: 'Kávés receptek',
  slug: 'kaves-receptek',
  excerpt:
    'A kávé sokkal több lehet, mint egy egyszerű reggeli ital.<br>Nézzünk meg néhány izgalmas kávés receptet – shaktól az Espresso Martinin át a kávés kekszekig!',
  content: `
    <h2>A kávé – izgalmas kulináris élmény</h2>
    <p>A kávé a világ egyik legnépszerűbb itala.<br>
    Sokan az ébredésüket és az energiafeltöltésüket erre az italra alapozzák minden reggel.<br>
    Azonban a kávé ennél sokkal több lehet, mint egy egyszerű ital – a különféle változatai és elkészítési módjai <b>izgalmas kulináris élményt</b> nyújthatnak.<br>
    Ha szeretnéd kicsit felturbózni a kávézás élményét, nézzünk meg néhány kávés receptet!</p>

    <h2>1. Kávé shake</h2>
    <p>Ez a recept egy igazi hideg, kávés desszert.<br>
    <b>Hozzávalók:</b></p>
    <ul>
      <li>2 gombóc vanília fagylalt</li>
      <li>2 dl hideg erős kávé</li>
      <li>½ dl tejszín</li>
      <li>egy kis cukor</li>
    </ul>
    <p>Minden hozzávalót tegyünk egy turmixgépbe, és keverjük, amíg sűrű, krémes anyaggá nem válik.<br>
    A végeredmény egy <b>selymes, finom és kávés ízű shake</b> lesz.</p>

    <h2>2. Caramel macchiato</h2>
    <p>A caramel macchiato egy nagy népszerűségnek örvendő, nagyon ízletes kávés ital.<br>
    <b>Hozzávalók:</b></p>
    <ul>
      <li>2 dl tej</li>
      <li>1 evőkanál karamell szirup</li>
      <li>2 dl erős kávé</li>
      <li>egy kis habtejszín</li>
    </ul>
    <p>Forrósítsuk fel egy serpenyőben a tejet a karamell sziruppal – de ne forraljuk fel.<br>
    Öntsük az elkészült kávénkra.<br>
    A habtejszínt keverjük össze egy evőkanál karamell sziruppal, majd tegyük az ital tetejére.</p>

    <h2>3. Espresso Martini</h2>
    <p>Ha egy klasszikus koktélt szeretnél készíteni kávés ízesítéssel, az <b>Espresso Martini</b> éppen neked való.<br>
    <b>Hozzávalók:</b></p>
    <ul>
      <li>3 cl kávélikőr</li>
      <li>2 cl vodka</li>
      <li>1 frissen készített eszpresszó</li>
      <li>jégkockák</li>
    </ul>
    <p>Tegyük az összes hozzávalót egy koktélshakerbe, majd jól rázzuk össze.<br>
    Szűrjük le, töltsük martinipohárba, és díszítsük néhány kávészemmel.</p>

    <h2>4. Kávés kekszek</h2>
    <p>Az édesszájúaknak ajánlott a kávés kekszek receptje.<br>
    <b>Hozzávalók:</b></p>
    <ul>
      <li>1 csésze liszt</li>
      <li>½ csésze cukor</li>
      <li>2 evőkanál őrölt kávé</li>
      <li>½ csésze vaj</li>
      <li>1 tojás</li>
      <li>egy csipet só</li>
    </ul>
    <p>Egy nagy tálban keverjük össze a lisztet, cukrot, kávét és a sót.<br>
    A vajat melegítsük fel egy serpenyőben, amíg sima és krémes állagú nem lesz.<br>
    Keverjük hozzá a tojást, és apránként adagoljuk a kávés keveréket is.<br>
    Tegyük hűtőbe, hogy a tészta megkeményedjen.<br>
    A kész tésztából formáljunk kis golyókat, tegyük sütőbe, és süssük <b>15 percig</b>, vagy amíg aranybarnák lesznek.</p>

    <h2>Összefoglalás</h2>
    <p>A kávés receptek számos lehetőséget nyújtanak a kávézás élményének feldobására.<br>
    Legyen szó hideg vagy meleg italokról, édességekről vagy koktélokról, <b>a kávé biztosan nem fog csalódást okozni</b>.<br>
    Hajrá, próbáld ki ezeket a recepteket!</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2023-11-18',
  updatedAt: '2023-11-18',
  thumbnail: '/images/kave-059-kavegep24.webp',
  ogImage: '/images/blog/og-kaves-receptek.jpg',
  categories: ['tippek', 'eletmod'],
  tags: ['kávés receptek', 'kávé shake', 'caramel macchiato', 'espresso martini', 'kávés keksz', 'kávé ital'],
  featured: false,
  published: true,
  seo: {
    title: 'Kávés receptek – Shake, Caramel Macchiato, Espresso Martini és keksz | Kávégép24',
    description:
      'Kávés receptek kezdőknek és haladóknak: kávé shake, caramel macchiato, espresso martini és kávés kekszek. Turbózd fel a kávézás élményét!',
    keywords:
      'kávés receptek, kávé shake recept, caramel macchiato recept, espresso martini recept, kávés keksz recept, kávé desszert',
  },
};

export default post;
