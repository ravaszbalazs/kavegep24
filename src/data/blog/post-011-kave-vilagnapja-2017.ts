import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kave-vilagnapja-2017',
  title: 'A kávé világnapja 2017 – Érdekességek a kávé ünnepéről',
  slug: 'kave-vilagnapja-2017',
  excerpt:
    'Október 1-je a kávé világnapja – a világ számos országában ünneplik ilyenkor a kávét.<br>Összegyűjtöttük a legérdekesebb tényeket, amiket talán te sem tudtál.',
  content: `
    <p>A világ számos országában ünneplik a kávét.<br>
    <b>Október 1-én</b> a kávézók és kávékereskedések különleges akciókkal kedveskednek a kávét kedvelő nagyközönségnek.</p>

    <h2>Tudtad?</h2>

    <ul>
      <li>A <b>kőolaj után a kávé a világkereskedelem legnagyobb értékben gazdát cserélő áruja</b>.</li>
      <li>A kávécserje termése <b>piros színű</b>, és a cseresznyére hasonlít.</li>
      <li>Több forradalom is <b>kávéházból indult ki</b>. (Pl: Pilvax – 1848)</li>
      <li>A <b>legnagyobb kávéfogyasztó országok</b>: az USA, Németország és Franciaország.</li>
      <li><b>956 ezer csésze kávé</b> fogy el percenként a világban.</li>
      <li>Japánban <b>1983-ban</b> rendezték meg az első kávénapot.</li>
      <li>Magyarországon <b>6. alkalommal</b> szerveznek rendezvényeket a kávé napja alkalmából.</li>
      <li>A <b>finnek 12,5 kg kávét</b> fogyasztanak évente fejenként.</li>
      <li>A <b>magyar lakosság ennek csak a töredékét</b> – mindössze <b>2,5 kg-ot</b> – fogyaszt évente.</li>
    </ul>

    <h2>Ünnepeljük együtt a kávét!</h2>
    <p>Ha te is szereted a kávét, és szeretnél <b>minőségi kávét és kávégépet</b> a mindennapi életedbe vagy vállalkozásodba,<br>
    fordulj hozzánk bizalommal – segítünk megtalálni a legjobb megoldást.</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-09-29',
  thumbnail: '/images/kave-011-kavegep24.webp',
  ogImage: '/images/blog/og-kave-vilagnapja-2017.jpg',
  categories: ['kavekultura'],
  tags: ['kavekultura', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: 'A kávé világnapja 2017 – 9 érdekesség, amit nem tudtál | Kávégép24',
    description:
      'Október 1-je a kávé világnapja. 9 meglepő tény a kávéról: a világ legnagyobb árucikke, 956 ezer csésze percenként, a finnek 12,5 kg-ot isznak évente. Te mennyit?',
    keywords:
      'kávé világnapja, október 1 kávé nap, kávé érdekességek, kávé tények, kávéfogyasztás világ, kávékultúra',
  },
};

export default post;
