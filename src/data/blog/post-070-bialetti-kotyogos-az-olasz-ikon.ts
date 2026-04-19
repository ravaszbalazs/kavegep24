import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'bialetti-kotyogos-az-olasz-ikon',
  title: 'Bialetti kotyogós – az olasz ikon',
  slug: 'bialetti-kotyogos-az-olasz-ikon',
  excerpt:
    'A Bialetti kávéfőző egyike a világ legismertebb kotyogós kávéfőzőinek.<br>Hogyan vált egy 1933-as olasz találmányból globális ikon?',
  content: `
    <h2>Az olasz kávézás szimbóluma</h2>
    <p>A Bialetti kávéfőző egyike a <b>világ legismertebb kotyogós kávéfőzőinek</b>.<br>
    A találmányt Alfonso Bialetti olasz feltaláló készítette el <b>1933-ban</b>.<br>
    Az eredeti modellt <b>„Moka Express"</b> néven hozta piacra, és azonnal népszerűvé vált Olaszországban.</p>

    <h2>Hogyan hódította meg a világot?</h2>
    <p>A kávéfőző terjedése a <b>második világháború után</b> kezdődött el, amikor az olasz migránsok szerte a világban elvitték magukkal ezt a tradicionális készüléket.<br>
    A Bialetti kávéfőző lassan, de biztosan hódította meg a világot, és ma már <b>szinte mindenhol megtalálható</b> a kávékedvelők otthonában.<br>
    Praktikus és megbízható tervezésének köszönhetően az egyik <b>ikonikus eszközévé vált a kávékészítésnek</b>.</p>

    <h2>Otthon és a kávézóban</h2>
    <p>A Bialetti kotyogós kávéfőző otthoni megoldásra <b>kiváló választás</b> – egyszerű, tartós és autentikus olasz kávéélményt nyújt.<br>
    A közösségi élményt és a barista-minőségű kávét azonban mégis csak a kávézók világa adja meg igazán.</p>

    <h2>Nézze meg bemutatótermünkben!</h2>
    <p>Ha személyesen szeretné megtekinteni kínálatunkat, látogasson el hozzánk!</p>

    <p><b>Cím:</b> 1221 Budapest, Kossuth Lajos u. 93.<br>
    <b>Tel.:</b> <a href="tel:+36205111070">0620 511 1070</a><br>
    <b>Útvonaltervező:</b> <a href="https://maps.app.goo.gl/fPMU4a5q3Vt4Qx5V9" target="_blank" rel="noopener noreferrer">Google Maps</a></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2024-04-30',
  updatedAt: '2024-04-30',
  thumbnail: '/images/kave-070-kavegep24.webp',
  ogImage: '/images/blog/og-bialetti-kotyogos-az-olasz-ikon.jpg',
  categories: ['kavekultura'],
  tags: ['Bialetti', 'kotyogós kávéfőző', 'Moka Express', 'olasz kávé', 'Alfonso Bialetti'],
  featured: false,
  published: true,
  seo: {
    title: 'Bialetti kotyogós – az olasz ikon | Kávégép24',
    description:
      'A Bialetti Moka Express 1933 óta a kávékészítés ikonja. Hogyan vált Alfonso Bialetti találmányából globális jelkép? Ismerje meg az olasz kotyogós kávéfőző történetét.',
    keywords:
      'Bialetti kotyogós, Moka Express, Bialetti kávéfőző, olasz kotyogós, Alfonso Bialetti, kotyogós kávéfőző ikon',
  },
};

export default post;
