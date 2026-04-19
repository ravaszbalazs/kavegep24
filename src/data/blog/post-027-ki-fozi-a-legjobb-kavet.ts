import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'ki-fozi-a-legjobb-kavet',
  title: 'Ki főzi a legjobb kávét Magyarországon?',
  slug: 'ki-fozi-a-legjobb-kavet',
  excerpt:
    'Nincs jó válasz arra, hogy ki főzi Magyarország legjobb kávéját.<br>Különböző szempontokat kellene figyelembe venni – de van egy egyszerű recept, ami mindenkit meggyőz.',
  content: `
    <p>Nincs jó válasz arra, hogy ki főzi Magyarország legjobb kávéját.<br>
    Különböző szempontokat kellene figyelembe venni, és akkor talán megkapnánk a választ.</p>

    <p>A kávé <b>mindenkinek mást és mást jelent</b>.<br>
    Vannak baristák, akik éveket gyakorolnak és mégsem tudják kamatoztatni a tudásukat.<br>
    A verseny annyira kiélezett, hogy a legjobbak is elvérezhetnek bármikor.</p>

    <h2>Ezért választottuk az automata kávégépeket</h2>
    <p>A gyári beállítások segítségével, <b>szaktudás nélkül</b> készíthetünk egy csodálatos cappuccinót vagy egy tökéletes espressót.<br>
    Így elmondhatjuk magunkról: <em>én főzöm a legjobb kávét Magyarországon.</em></p>

    <p>A recept egyszerű:<br>
    <b>Minőségi Jura vagy WMF kávégép</b> és egy igazi olasz pörkölt kávé.<br>
    Mi ebben tudunk segíteni.</p>

    <p>Mindkettővel rendelkezünk – ezáltal <b>irodai környezetben is élvezhetjük</b> a kávéházak hangulatos világát.</p>

    <p>Amennyiben szeretne egy jó kávégépet és egy igazi olasz kávét, <b>keressen minket!</b><br>
    <b>+36 20 511 1070</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2018-01-29',
  thumbnail: '/images/kave-027-kavegep24.webp',
  ogImage: '/images/blog/og-ki-fozi-a-legjobb-kavet.jpg',
  categories: ['kavekultura', 'kavegepek'],
  tags: ['Jura kávégép', 'WMF kávégép', 'espresso'],
  featured: false,
  published: true,
  seo: {
    title: 'Ki főzi a legjobb kávét Magyarországon? | Kávégép24',
    description:
      'Éveket gyakorló baristák vagy egy automata kávégép? Megmutatjuk, hogyan főzhetsz szaktudás nélkül tökéletes espressót és cappuccinót Jura vagy WMF géppel.',
    keywords:
      'legjobb kávé Magyarország, ki főzi a legjobb kávét, automata kávégép, Jura kávégép, WMF kávégép, tökéletes espresso, cappuccino recept',
  },
};

export default post;
