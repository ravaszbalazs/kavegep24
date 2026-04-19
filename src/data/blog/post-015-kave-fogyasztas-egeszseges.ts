import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kave-fogyasztas-egeszseges',
  title: 'A kávéfogyasztás egészséges – Mit mondanak a kutatások?',
  slug: 'kave-fogyasztas-egeszseges',
  excerpt:
    'Két új tanulmány szerint a rendszeres kávéfogyasztás hosszabb élettartamhoz vezethet.<br>Több mint 685 000 embert vizsgáltak, és az eredmények meglepőek.',
  content: `
    <p>A kávé fogyasztása hosszabb élettartamhoz vezethet, két új tanulmány szerint.</p>

    <h2>A megállapítások</h2>
    <p>A megállapítások újra felidézték a kérdést a kávé egészségügyi hatásairól.<br>
    Egy kávé fogyasztással kapcsolatos tanulmány szerint, amelyben <b>több mint 500 000 embert vizsgáltak 10 európai országban</b>, az megállapította, hogy aki több kávét ivott, annak jelentősen csökkent a halálozási kockázata.</p>

    <p>A második tanulmány újszerűbb volt, mivel az <b>nem fehér populációkra összpontosított</b>.<br>
    Több mint 185 000 afrikai-amerikai, indián, hawaii, japán-amerikai, latinos felmérése után a kutatók azt találták, hogy a kávé növeli a különböző területen élők élettartamát.</p>

    <h2>A kávé tehát jó neked, mert egészséges</h2>
    <p>Azok a személyek, akik <b>naponta két-négy pohárral ittak kávét</b>, azok 18%-al alacsonyabban voltak az átlagos halálozáshoz képest, mint azok, akik nem fogyasztottak kávét.<br>
    Ezek a megállapítások összhangban vannak a több fehérségi populációkat vizsgáló korábbi tanulmányokkal, mondta <b>Veronica Wendy Setiawan</b>, a preventív orvoslás professzora, az USC Keck School of Medicine-ben, aki a nem fehér populációra vonatkozó tanulmányt vezette.</p>

    <p><em>„Mivel ezek a nagyon változatos lakosságok mindegyikük különböző életmóddal rendelkezik, nagyon eltérő étkezési szokásaik és eltérő érzékenységük van – és még mindig találunk hasonló mintákat"</em> – mondta Setiawan.</p>

    <p>Az új tanulmány azt mutatja, hogy a kávé és a hosszú élettartam közötti kapcsolat <b>erősebb biológiai lehetőséggel rendelkezik</b>, és megállapította, hogy a halálozás fordítottan összefügg a szívbetegségek, a rák, a légzőszervi megbetegedések, a stroke, a cukorbetegség és a vesebetegség fogyasztásával.</p>

    <p>Az európai országokban végzett kutatás azt mutatta, hogy a kávé és a <b>májbetegség, a férfiak öngyilkossága, a nők rákos megbetegedése, az emésztőrendszeri betegségek és a keringési betegségek</b> fordított összefüggést mutatnak ki.<br>
    Azok, akik naponta három vagy több csészét ittak, kisebb kockázatot jelentettek az összes halálesetre, mint azok, akik nem isznak kávét.</p>

    <p>Mindkét tanulmányt az <b>Annals of Internal Medicine</b> publikálta.</p>

    <h2>A biológiai előnyök</h2>
    <p>A kávé <b>összetett vegyületek keveréke</b>, amelyek közül néhányat a laboratóriumokban kiderült, hogy pozitív biológiai hatással bírnak.</p>

    <p>Tanulmányok kimutatták, hogy bizonyos vegyületek <b>gyulladás csökkentő hatással rendelkeznek</b>, amelyek segíthetnek csökkenteni a Parkinson-kórhoz hasonló betegségek kockázatát.</p>

    <p>Az európai vizsgálatban az emberek, akik kávét fogyasztottak, <b>alacsonyabb gyulladásos szintet, egészségesebb és jobb glükóz kontrollt</b> mutattak azokhoz képest, akik nem fogyasztottak kávét.<br>
    Viszont még mindig nem tisztázott, hogy mely speciális vegyületek nyújtanak egészségügyi előnyöket pontosan.</p>

    <p>Mindkét tanulmány a dohányosokat nemdohányzókról választotta el, mivel a dohányzásról ismert, hogy csökkenti az élettartamot, és különböző halálozásokhoz kapcsolódik.<br>
    Azonban azt tapasztalták, hogy a <b>dohányosoknak is fordított hatása volt a halálozásra</b>.</p>

    <h2>A jó kávéhoz jó kávégép is szükséges</h2>
    <p>Ha te is szeretnél egy olyan kávégépet, amellyel <b>finom és egészséges kávét</b> tudsz inni,<br>
    akkor keress meg minket, mert van egy jó ajánlatunk számodra!</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-10-16',
  thumbnail: '/images/kave-015-kavegep24.webp',
  ogImage: '/images/blog/og-kave-fogyasztas-egeszseges.jpg',
  categories: ['kavekultura', 'egeszseg'],
  tags: ['kávé egészség', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: 'A kávéfogyasztás egészséges – Mit mondanak a kutatások? | Kávégép24',
    description:
      'Két új tudományos tanulmány szerint a napi 2–4 csésze kávé 18%-kal csökkentheti a halálozási kockázatot. 685 000 embert vizsgáltak – az eredmények meggyőzőek.',
    keywords:
      'kávé egészséges, kávéfogyasztás egészség, kávé halálozási kockázat, kávé kutatás, kávé előnyei, egészséges kávézás, kávé élettartam',
  },
};

export default post;
