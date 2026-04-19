import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'erdekessegek-a-kaverol',
  title: 'Érdekességek a kávéról – 3 tény, amit nem tudtál mostanáig',
  slug: 'erdekessegek-a-kaverol',
  excerpt:
    'Javítja az edzésteljesítményt, serkenti a memóriát és védi a szívet.<br>3 olyan tény a kávéról, amit talán még nem tudtál.',
  content: `
    <h2>1. A kávétól jobban megy az edzés</h2>
    <p>Ha edzés előtt kb. <b>1 órával megiszol egy kávét</b>, a teljesítőképességed jelentősen javulni fog.<br>
    Persze ne vidd túlzásba – 2 kávétól nem leszel kétszer hatékonyabb, de egy kis <b>legális dopping</b> jól jöhet a nehezebb időszakokra.</p>

    <p><em>Érdekesség: Sylvester Stallone a Rocky 3. forgatási napjain napi 10 kávénál is többet ivott meg, mindezt alacsony szénhidrátbevitel mellett.<br>
    Nem ajánlom, hogy kipróbáld.</em></p>

    <h2>2. Javul a memóriád</h2>
    <p>Nem hinném, hogy Nikola Tesla érdemeiben közreműködött volna a kávéfogyasztás –<br>
    az viszont tény, hogy a benne lévő <b>koffein serkenti a memóriát</b>.<br>
    Ha olyan feladat előtt állsz, amikor nagy szükséged van a fejedre, dobj be egy kávét.</p>

    <h2>3. Védi a szíved</h2>
    <p>A kávé <b>csökkenti a stroke kockázatát</b>.<br>
    Persze ahány ember, annyira eltérőek is lehetünk – egyeztess a háziorvosoddal.<br>
    Ha a családodban sok a szívbeteg, ne kávéval próbáld javítani az átlag életkort.</p>

    <p>Ha minőségi kávégépet bérelnél és kiváló kávét szeretnél fogyasztani, <b>keress minket!</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2018-03-18',
  thumbnail: '/images/kave-029-kavegep24.webp',
  ogImage: '/images/blog/og-erdekessegek-a-kaverol.jpg',
  categories: ['kavekultura', 'egeszseg'],
  tags: ['kávé egészség', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: 'Érdekességek a kávéról – 3 tény, amit nem tudtál mostanáig | Kávégép24',
    description:
      'Tudtad, hogy a kávé javítja az edzésteljesítményt, serkenti a memóriát és csökkenti a stroke kockázatát? 3 meglepő és tudományosan alátámasztott tény a kávéról.',
    keywords:
      'kávé érdekességek, kávé edzés előtt, kávé memória, kávé stroke, koffein hatás, kávé egészség, kávé tények',
  },
};

export default post;
