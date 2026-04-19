import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'nespresso-kapszulak-dronokkal',
  title: 'Nespresso kapszulákat drónokkal szállítják ki Izraelben',
  slug: 'nespresso-kapszulak-dronokkal',
  excerpt:
    'A Nespresso Israel kipróbálja a kávékapszulák drónszállítását.<br>A kísérlet első fázisában Tel-Aviv-Jaffa területén tesztelik a kiszállítást.',
  content: `
    <p>A <b>Nespresso Israel</b> kipróbálja a kávékapszulák drónszállítását.</p>

    <p>A kísérlet első fázisában <b>Tel-Aviv-Jaffa területén</b> tesztelik a kiszállítást.<br>
    Azért esett a választás erre a területre, mert Izrael második legnagyobb városa, illetve <b>Izrael legfontosabb kereskedelmi központja</b>.</p>

    <h2>A résztvevők</h2>
    <p>A kezdeményezést a következő cégekkel közösen hajtják végre:</p>
    <ul>
      <li><b>Airwayz AI</b> – szoftvercég</li>
      <li><b>SkylinX</b> – a drónok felszállási és leszállási helyének fejlesztője</li>
      <li><b>FlyTechIL</b> – a drónokat pilótázó légitechnológiai cég</li>
    </ul>
    <p>A szállítást a <b>Flying Cargo</b> logisztikai vállalat irányítja.</p>

    <h2>A cél</h2>
    <p>A közös fúzió célja a <b>drónszállítás kereskedelmi életképességének felmérése</b>, illetve a vásárlói élmény javítása.</p>

    <blockquote>
      <p>„A jövő már itt van. Tel Aviv-Jaffában megkezdünk egy kísérletet, amely kimért és helyes módon teszteli a drónok kereskedelmi célú használatának képességét városi térben."</p>
      <cite>– <b>Ron Huldai</b>, Tel Aviv polgármestere</cite>
    </blockquote>

    <h2>Nem egyedül a Nespresso próbálkozik</h2>
    <p>A Nespresso nem az egyetlen nagy kávéscég, amely kereskedelmi célokra próbálja ki a drónokat.<br>
    2017 szeptemberében a <b>Costa Coffee</b> tesztelte a drónszállítást Dubaiban, az Egyesült Arab Emírségekben.</p>

    <p>Úgy tűnik, a kávéipar élen jár a jövő logisztikai megoldásainak kipróbálásában.<br>
    Ha te is szeretnél <b>gyorsan és megbízhatóan</b> hozzájutni a minőségi kávéhoz – egyelőre drón nélkül, de annál gyorsabban szállítunk – <b>keress minket!</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2021-08-30',
  thumbnail: '/images/kave-041-kavegep24.webp',
  ogImage: '/images/blog/og-nespresso-kapszulak-dronokkal.jpg',
  categories: ['kavekultura'],
  tags: ['kávé trend', 'kavekultura'],
  featured: false,
  published: true,
  seo: {
    title: 'Nespresso kapszulákat drónokkal szállítják ki Izraelben | Kávégép24',
    description:
      'A Nespresso Israel Tel Aviv-Jaffában teszteli a kávékapszulák drónszállítását. Az Airwayz AI, SkylinX és FlyTechIL közreműködésével. A kávéipar a jövő logisztikájában élen jár.',
    keywords:
      'Nespresso drónszállítás, kávékapszula drón, Tel Aviv kávé, drón logisztika, kávé innováció, Costa Coffee drón, Nespresso Israel',
  },
};

export default post;
