import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: '6-teny-a-kaverol',
  title: '6 tény a kávéról, amit jó ha tudsz',
  slug: '6-teny-a-kaverol',
  excerpt:
    'Beethoven állítólag napi 60, Voltaire pedig 50 csésze kávét ivott – és mindkettő magas kort ért meg.<br>Lehet, hogy van összefüggés? Íme 6 tény, amiről jó ha tudsz.',
  content: `
    <p>Beethoven állítólag napi 60 kávét és Voltaire pedig 50 csésze kávét ivott, és <b>83 éves koráig élt</b>.<br>
    Lehet, hogy van összefüggés? Ezt nem tudhatjuk, de íme pár dolog, amiről jó ha tudsz.</p>

    <h2>1. Fokozza az agyi tevékenységet</h2>
    <p>Nem titok, hogy a kávé fokozza a <b>figyelmet, az éberséget és a koncentrációt</b>, de ez nem minden.<br>
    A hozzáadott cukornak köszönhetően egy kis zseni lehetsz egy rövid időre – a koffein és a glükóz kombinációja bizonyos <b>agyi szektorokat aktivál</b>.<br>
    Viszont vigyázz: soha ne igyál kávét üres gyomorra!</p>

    <h2>2. Erősíti az immunrendszert</h2>
    <p>Számos ország tudósa szerint a kávé <b>csökkenti a korai halálozás kockázatát</b>.<br>
    Minél több csésze kávét fogyasztasz naponta, annál kisebb a kockázat.<br>
    Ez azért van, mert a kávé megváltoztatja az immunrendszert, erősebbé és egészségesebbé teszi.<br>
    Javítja továbbá a <b>májat, a szívet és az emésztőrendszert</b>.</p>

    <p>Mégis próbálj meg ragaszkodni a <b>természetes, frissen őrölt kávéhoz</b>: az instant kávé kevesebb tápanyagot és több kémiai adalékanyagot tartalmaz, ami károsítja az emésztőszerveket.</p>

    <h2>3. Csillapítja a fejfájást</h2>
    <p>A természetes kávéban található koffein segíti a <b>fejfájás megszüntetését</b>.<br>
    Nincs olyan hatékony, mint egy gyógyszer, de azoknak, akik nem szeretnek gyógyszerekhez nyúlni, <b>alternatív megoldás</b> is lehet.</p>

    <h2>4. Csökkenti a stresszt és a depressziót</h2>
    <p>A kávé a <b>dopamin és a szerotonin</b> felszabadulásának köszönhetően anti-stressz hatású, ami jó hangulatot idéz elő.<br>
    Egy csésze, vagy éppen csak a kávé illata megnyugtathatja az idegeit.<br>
    Ráadásul a koffein a <b>központi idegrendszer egyik leggyakoribb stimulálója</b>.</p>

    <p>Érdekes módon csak a kávéban lévő koffeinnek van ilyen hatása – szemben a teával vagy a csokoládéval, amelyek koffein tartalma nem ösztönzi ugyanígy a központi idegrendszert.</p>

    <h2>5. Jobb memóriád lesz</h2>
    <p>A kávéból nyert stimulátorok nem csak a hangulatot és a termelékenységet növelik, hanem <b>javítják a memóriát</b> is.<br>
    Természetesen ez csak a rövid távú memóriával működik – de ez elég jó, mert az összes információt eredetileg rövid távú memóriaként tároljuk, és csak bizonyos körülmények után kerül a hosszú távú memóriába.</p>

    <h2>6. Alacsonyabb testsúly</h2>
    <p>Ha alacsony valakinek a hormonszintje, akkor a szervezet elkezdi a <b>zsírok tárolását</b>.<br>
    A kávé azonban emeli a hormonszintet – ezért van az, hogy ha valaki abbahagyja a kávéfogyasztást, megemelkedhet a testsúlya.</p>

    <p>Amennyiben minőségi kávégépet bérelnél és minőségi kávét szeretnél fogyasztani, <b>hívj bátran!</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-11-02',
  thumbnail: '/images/kave-019-kavegep24.webp',
  ogImage: '/images/blog/og-6-teny-a-kaverol.jpg',
  categories: ['kavekultura', 'egeszseg'],
  tags: ['kávé egészség', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: '6 tény a kávéról, amit jó ha tudsz | Kávégép24',
    description:
      'Fokozza az agyi tevékenységet, erősíti az immunrendszert, csökkenti a stresszt – 6 meglepő és tudományosan alátámasztott tény a kávéról, amit minden kávérajongónak tudnia kell.',
    keywords:
      'kávé tények, kávé egészséges, kávé hatása szervezetre, koffein hatás, kávé immunrendszer, kávé memória, kávé stressz depresszió, kávé fogyás',
  },
};

export default post;
