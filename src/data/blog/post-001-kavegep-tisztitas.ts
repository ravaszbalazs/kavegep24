import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kavegep-tisztitas-utmutato',
  title: 'Kávégép tisztítás lépésről lépésre – Teljes útmutató 2024',
  slug: 'kavegep-tisztitas-utmutato',
  excerpt:
    'A kávégép rendszeres tisztítása elengedhetetlen a tökéletes kávéízhez és a gép hosszú élettartamához.<br>Összegyűjtöttük a legfontosabb lépéseket.',
  content: `
    <h2>Miért fontos a kávégép rendszeres tisztítása?</h2>
    <p>A kávéolaj idővel lerakódik a gép belsejében, és <b>keserű, kellemetlen ízű kávét</b> eredményez.<br>
    A vízkő pedig csökkenti a fűtőelem hatékonyságát és rövidíti a gép élettartamát.</p>

    <h2>Mire lesz szükségünk?</h2>
    <ul>
      <li>Kávégép tisztítótabletták</li>
      <li>Vízkőoldó folyadék vagy citromsav</li>
      <li>Puha kendő</li>
      <li>Meleg víz</li>
    </ul>

    <h2>A tisztítás lépései</h2>
    <h3>1. Napi tisztítás</h3>
    <p>Minden használat után törölje le a tejhabosítót és öblítse ki a csepptálcát.<br>
    A kávékifolyót is érdemes naponta átöblíteni.</p>

    <h3>2. Heti tisztítás</h3>
    <p>Hetente egyszer futtasson tisztítási programot tisztítótablettával.<br>
    A legtöbb modern kávégép jelzi, mikor esedékes a tisztítás.</p>

    <h3>3. Vízkőtelenítés</h3>
    <p>A vízkőtelenítés gyakorisága a víz keménységétől függ.<br>
    Általában <b>1–3 havonta</b> javasolt elvégezni.</p>

    <h2>Összefoglalás</h2>
    <p>A rendszeres tisztítás nem csupán a kávé ízét javítja, hanem <b>meghosszabbítja a kávégép élettartamát</b> is.<br>
    Ha bizonytalan a tisztítási folyamatban, forduljon hozzánk szervizszolgáltatásért!</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2024-03-15',
  updatedAt: '2024-06-01',
  thumbnail: '/images/kave-002-kavegep24.webp',
  ogImage: '/images/kave-002-kavegep24.webp',
  categories: ['tippek'],
  tags: ['kávégép szerviz', 'irodai kávégép'],
  featured: true,
  published: true,
  seo: {
    title: 'Kávégép tisztítás útmutató – Lépésről lépésre | Kávégép24',
    description:
      'Hogyan tisztítsuk a kávégépet? Lépésről lépésre útmutató a napi, heti és havi kávégép tisztításhoz. Szakértői tippek a Kávégép24-től.',
    keywords: 'kávégép tisztítás, kávégép vízkőtelenítés, kávégép karbantartás, kávégép tisztítótabletták',
  },
};

export default post;
