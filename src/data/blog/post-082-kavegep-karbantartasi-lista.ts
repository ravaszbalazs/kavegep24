import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kavegep-karbantartasi-lista',
  title: 'Kávégép karbantartási lista',
  slug: 'kavegep-karbantartasi-lista',
  excerpt:
    'Készítettünk egy irodai kávégép karbantartási ellenőrző listát – napi, heti, havi, negyedéves és éves feladatokkal.<br>Tartsa be, és tovább él a kávégépe!',
  content: `
    <h2>Irodai kávégép karbantartási ellenőrző lista</h2>
    <p>Készítettünk egy listát, amely által talán <b>hosszabb élettartamú lesz az irodai kávégépük</b>.</p>

    <h2>Napi feladatok</h2>
    <ul>
      <li>Csepegtetőtálca kiürítése és átöblítése</li>
      <li>Zaccfiók kiürítése</li>
      <li>Tejtartály és habosító átöblítése</li>
      <li>Automatikus öblítőprogram lefuttatása</li>
    </ul>

    <h2>Heti feladatok</h2>
    <ul>
      <li>Kivehető alkatrészek (víztartály, szűrő, főzőegység) <b>langyos vízzel tisztítása</b></li>
      <li>Külső felületek letörlése nedves, puha ronggyal</li>
    </ul>

    <h2>Havi feladatok</h2>
    <ul>
      <li>Vízszűrő ellenőrzése, szükség esetén cseréje</li>
      <li><b>Zsíroldó tablettás tisztítás</b> a kávéolaj lerakódás ellen</li>
    </ul>

    <h2>Negyedéves feladatok</h2>
    <ul>
      <li><b>Vízkőtelenítés</b> gyártó által javasolt szerrel</li>
      <li>Általános állapotellenőrzés</li>
    </ul>

    <h2>Éves feladatok</h2>
    <ul>
      <li><b>Szakértői szerviz és alapos átvizsgálás</b></li>
      <li>Kopó alkatrészek cseréje szükség szerint</li>
    </ul>

    <h2>Szerviz segítség</h2>
    <p>Ha az éves szervizhez vagy bármilyen karbantartási feladathoz segítségre van szüksége, forduljon hozzánk bizalommal!<br>
    <b>Szerviz:</b> <a href="https://kavegep24.hu" target="_blank" rel="noopener noreferrer">kavegep24.hu</a></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2025-08-22',
  updatedAt: '2025-08-22',
  thumbnail: '/images/kave-082-kavegep24.webp',
  ogImage: '/images/blog/og-kavegep-karbantartasi-lista.jpg',
  categories: ['karbantartas', 'tippek'],
  tags: ['kávégép karbantartás', 'karbantartási lista', 'irodai kávégép', 'kávégép ellenőrző lista', 'kávégép ápolás'],
  featured: false,
  published: true,
  seo: {
    title: 'Kávégép karbantartási lista – Napi, heti, havi és éves teendők | Kávégép24',
    description:
      'Irodai kávégép karbantartási ellenőrző lista – napi, heti, havi, negyedéves és éves feladatokkal. Tartsa be, és tovább él a kávégépe!',
    keywords:
      'kávégép karbantartási lista, irodai kávégép karbantartás, kávégép ellenőrző lista, kávégép ápolás feladatok, kávégép napi tisztítás',
  },
};

export default post;
