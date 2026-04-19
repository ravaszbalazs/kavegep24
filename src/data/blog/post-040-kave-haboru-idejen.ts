import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kave-haboru-idejen',
  title: 'Kávé háború idején – Hogyan nyerte meg a kávé az amerikai polgárháborút?',
  slug: 'kave-haboru-idejen',
  excerpt:
    'A kávé a békés hétköznapjaink megbízható generátora.<br>De mi a helyzet, ha polgárháború közepén találjuk magunkat? Egy anekdota szerint a déli hadsereg kávékrízise döntötte el a háborút.',
  content: `
    <p>A kávé a békés hétköznapjaink megbízható generátora.<br>
    De mi a helyzet akkor, ha olyan nem mindennapi körülmények között találjuk magunkat, mint egy polgárháború?</p>

    <p>Valószínűsítem, hogy a katonaságban is a kávéfőző a legkeményebben dolgozó egység – hisz a jó katona is kávén él, és az <b>amerikai katonák mindig is a kávé megszállottai voltak</b>.</p>

    <h2>A kávékrízis, ami eldöntötte a háborút</h2>
    <p>A 19. században, az <b>amerikai polgárháború</b> idején, a koffein lételeme volt a hadseregnek – mindkettőnek.<br>
    Egy anekdota szerint a déli hadsereg kávékrízise vezetett el végül oda, hogy <b>az északi csapatok nyerték meg a háborút</b>.</p>

    <p>Amikor az északi unionisták <b>blokád alá zárták a déli konföderációs államokat</b>, a déli egységek egyre nehezebben tudták beszerezni a kávét.<br>
    A blokád ugyanis azt jelentette, hogy elzártak tőlük szinte minden élelem- és gyógyszer-utánpótlást – a gyalogosaik egyáltalán nem jutottak kávéhoz.</p>

    <p>A déliek mindent megtettek, hogy pótolják a kávébabot, beleértve olyan bizarr helyettesítőket is, mint:</p>
    <ul>
      <li>pörkölt makk</li>
      <li>sörárpa</li>
      <li>szárazbab</li>
      <li>gyapotmag</li>
      <li>burgonyahéj</li>
      <li>cikóriagyökér</li>
    </ul>

    <p>A katonák számára egyre világosabbá vált, hogy ezeken a helyettesítőkön nem fognak túlélni, és hogy <b>kávéhoz csak az északiakon keresztül tudnak hozzájutni</b>.</p>

    <h2>A polgárháborús naplókban a kávé volt a leggyakrabban leírt szó</h2>
    <p>Ha visszanézzük a katonai feljegyzéseket, szembetűnik, hogy egyre inkább hangot adtak elégedetlenségüknek.<br>
    A családnak írt leveleikben a beszámoló nagy része arról szólt, hogy <b>milyen volt az aznapi kávé</b>, vagy azon keseregtek, hogy elfogyott a kávé, vagy reménykedve írtak arról, hogy mihamarabb kávéhoz fognak jutni.</p>

    <p>Sokkal többször írták le azt, hogy <em>kávé</em>, mint azt, hogy <em>golyó, háború, ágyú</em> vagy <em>anya</em>.</p>

    <h2>Puskatusba épített daráló</h2>
    <p>Az 1860-as években az amerikai <b>Sharps Rifle Company</b> – a vállalat, ami puskákkal látta el a hadsereget – kitalált egy karabélyt, aminek a markolatába <b>egy kis darálót építettek</b>.<br>
    Az új fegyvert eredetileg a lovas egységnek szánták: azt a célt szolgálta volna, hogy a katonák a lovaik számára gabonát őröljenek vele.</p>

    <p>A daráló erre a célra tökéletesen használhatatlannak bizonyult – ám a katonák rögtön feltalálták magukat, és <b>kávédarálóként kezdték el használni</b>.</p>

    <h2>Mississippi sáros vizéből főzött kávé</h2>
    <p>Háborús időszakban az ivóvízhez sem volt mindig egyszerű hozzájutni.<br>
    A katonák rákényszerültek arra, hogy <b>esővízből, tócsákból, vagy a Mississippi sáros vizéből</b> főzzék a mindennapi kávéjukat.</p>

    <h2>Az északi tiszteknek is feltűnt a koffein hatása</h2>
    <p>Az unionista tisztek igyekeztek biztosítani, hogy embereik <b>legalább egy csésze kávét kaphassanak</b> a csaták előtti reggeleken.<br>
    Az gyakran a csaták után is ott várta a katonákat – de volt olyan tiszt, aki szigorú utasításba adta, hogy a <b>kulacsokban víz helyett kávét</b> vigyenek magukkal.</p>

    <p>Egyes egységekben <b>kávéfutár fiúkat béreltek fel</b>, hogy a kritikus pontokon szolgáló katonák folyamatosan el legyenek látva koffeinnel.</p>

    <p>Csoda hát, hogy észak végül győzedelmeskedett?</p>

    <p>Ha tetszett a cikk, kérlek oszd meg ismerőseiddel!<br>
    Ha pedig egy megbízható kávégépre van szükséged – <b>keress minket, mi gondoskodunk a napi adagodról!</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2020-07-13',
  thumbnail: '/images/kave-040-kavegep24.webp',
  ogImage: '/images/blog/og-kave-haboru-idejen.jpg',
  categories: ['kavekultura'],
  tags: ['kávé történelem', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: 'Kávé háború idején – Hogyan nyerte meg a kávé az amerikai polgárháborút? | Kávégép24',
    description:
      'A polgárháborús naplókban a „kávé" szó többször szerepelt, mint „golyó" vagy „háború". A déli hadsereg kávékrízise döntötte el az észak-dél háborút? Döbbenetes történelmi tények.',
    keywords:
      'kávé háborúban, amerikai polgárháború kávé, kávé történelem, Sharps Rifle kávédaráló, koffein háborúban, kávé katonák, polgárháborús kávé',
  },
};

export default post;
