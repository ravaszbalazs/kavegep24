import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'eu-kaveimportja-nott',
  title: 'Az Európai Unió kávéimportja egy évtized alatt 7%-kal emelkedett',
  slug: 'eu-kaveimportja-nott',
  excerpt:
    'Az EU 2,9 millió tonna kávét importált 2020-ban – ez 7%-os növekedés 2010-hez képest.<br>A pörkölt kávé termelése 10%-kal nőtt, és a kelet-európai piacok robbanásszerű fejlődésen mennek át.',
  content: `
    <p>Az Európai Unió <b>2,9 millió tonna kávét</b> importált külföldről 2020-ban, ami <b>7%-os növekedés</b> a 2010-es szinthez képest.</p>

    <h2>Honnan jön az EU kávéja?</h2>
    <p>Az Eurostat jelentése szerint a 2020-ban az EU-n kívüli országokból importált kávé nagy része:</p>
    <ul>
      <li><b>Brazíliából</b> – 933 000 tonna</li>
      <li><b>Vietnamból</b> – 642 000 tonna</li>
    </ul>

    <p>A legnagyobb EU-n kívüli import elsősorban <b>Németországba és Olaszországba</b> érkezett, megelőzve Belgiumot, Spanyolországot és Franciaországot.</p>

    <p><em>Megjegyzés: az Eurostat kiemelte, hogy a brit piaci adatok nem szerepeltek a legutóbbi jelentésben, miután az Egyesült Királyság 2021 januárjában kilépett az EU-ból.</em></p>

    <h2>Pörkölt kávé termelése az EU-ban</h2>
    <p>2020-ban <b>több mint 1,9 millió tonna pörkölt kávét</b> állítottak elő az EU-ban, ami <b>10%-os növekedést</b> jelent 2010-hez képest.<br>
    Az EU kávétermelése közel <b>11 milliárd eurót</b> ért el, ami körülbelül <b>4,2 kg-ot jelent lakosonként</b> 2020-ban.</p>

    <p>A pörkölt kávé teljes uniós termelésének <b>89%-át</b> hat ország állította elő:<br>
    Olaszország, Németország, Franciaország, Hollandia, Spanyolország és Svédország.</p>

    <p>A vezető termelők:</p>
    <ul>
      <li><b>Olaszország</b> – 616 000 tonna</li>
      <li><b>Németország</b> – 571 000 tonna</li>
    </ul>

    <h2>Kelet-Európa robbanásszerű fejlődése</h2>
    <p>Annak ellenére, hogy az elmúlt évtizedben a nyugat-európai piacok uralták a kávéimportot és -termelést, a <b>kelet-európai piacok</b> az elkövetkező években jelentősen növelni fogják a kávéfogyasztást.</p>

    <p>2020-ban <b>Litvánia és Románia</b> volt Európa leggyorsabban növekvő márkás kávéházi piaca:</p>
    <ul>
      <li><b>Litvánia</b> – 34,8%-os növekedés, meghaladta a 180 üzletet</li>
      <li><b>Románia</b> – 29,8%-os növekedés, meghaladta a 600 üzletet</li>
    </ul>

    <p>A kávéfogyasztás Európában töretlenül növekszik – ha te is szeretnél minőségi kávét és kávégépet, <b>keress minket!</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2021-10-18',
  thumbnail: '/images/kave-044-kavegep24.webp',
  ogImage: '/images/blog/og-eu-kaveimportja-nott.jpg',
  categories: ['kavekultura'],
  tags: ['kávé trend', 'kavekultura'],
  featured: false,
  published: true,
  seo: {
    title: 'Az EU kávéimportja egy évtized alatt 7%-kal emelkedett | Kávégép24',
    description:
      'Az EU 2020-ban 2,9 millió tonna kávét importált – 7%-os növekedés. Pörkölt kávé termelése 10%-kal nőtt. Litvánia +34,8%, Románia +29,8% kávéházi piac növekedés.',
    keywords:
      'EU kávéimport, európai kávéfogyasztás, Eurostat kávé, kávétermelés Európa, Brazília kávéexport, Vietnam kávé, kelet-európai kávépiac, kávé statisztika',
  },
};

export default post;
