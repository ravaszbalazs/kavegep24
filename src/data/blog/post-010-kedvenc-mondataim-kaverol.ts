import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kedvenc-mondataim-a-kaverol',
  title: 'Kedvenc mondataim a kávéról – Van köztük elgondolkodtató is',
  slug: 'kedvenc-mondataim-a-kaverol',
  excerpt:
    'Néha egy jól megfogalmazott mondat is elég ahhoz, hogy megváltozzon a nézőpontunk.<br>Íme Kajor Roland kedvenc kávés idézetei.',
  content: `
    <p>Néha egy jól megfogalmazott mondat is elég ahhoz, hogy megváltozzon a nézőpontunk.<br>
    Ebben a rövid cikkben a kedvenceimet ismerheted meg.</p>

    <h2>Íme:</h2>

    <blockquote>
      <p>„A reggeli kávémat tej, cukor, és bármiféle emberi interakció nélkül szeretem elfogyasztani."</p>
    </blockquote>

    <blockquote>
      <p>„Nincs megoldhatatlan probléma, csak túl kevés kávé."</p>
    </blockquote>

    <blockquote>
      <p>„Abból tudhatod, hogy egy probléma eléggé súlyos, hogy nem lehet kávéval megoldani."</p>
    </blockquote>

    <blockquote>
      <p>„Jobban szeretlek, mint a kávét – de könyörgöm, ne kelljen bebizonyítanom."</p>
    </blockquote>

    <p>És végül <b>a kedvencem:</b></p>

    <blockquote>
      <p>„A kávé Isten ajándéka, ami azt jelenti, hogy én nem függő, csak hívő vagyok."</p>
    </blockquote>

    <p>Ha Te is nagy kávérajongó vagy, fordulj hozzám bizalommal –<br>
    segítek beszerezni a <b>legjobb kávékat és kávégépeket</b>.</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-09-22',
  thumbnail: '/images/kave-010-kavegep24.webp',
  ogImage: '/images/blog/og-kedvenc-mondataim-kaverol.jpg',
  categories: ['kavekultura'],
  tags: ['kavekultura'],
  featured: false,
  published: true,
  seo: {
    title: 'Kedvenc mondataim a kávéról – Vicces és elgondolkodtató idézetek | Kávégép24',
    description:
      'A legjobb kávés idézetek egy helyen – vicces, elgondolkodtató és szívmelengető mondatok minden igazi kávérajongónak. Kajor Roland kedvencei.',
    keywords:
      'kávé idézetek, kávés mondások, kávérajongó, kávé humor, legjobb kávés idézetek, kávékultúra',
  },
};

export default post;
