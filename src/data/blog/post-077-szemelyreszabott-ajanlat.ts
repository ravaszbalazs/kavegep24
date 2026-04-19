import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'szemelyreszabott-ajanlat',
  title: 'Személyreszabott ajánlat',
  slug: 'szemelyreszabott-ajanlat',
  excerpt:
    'Köszönjük az érdeklődését!<br>Ahhoz, hogy a leginkább személyre szabott ajánlatot tudjuk adni, kérjük válaszoljon néhány kérdésre – még aznap elküldjük az ajánlatot!',
  content: `
    <h2>Köszönjük az érdeklődését!</h2>

    <video controls preload="metadata" style="width:100%;border-radius:8px;margin-bottom:1.5rem;">
      <source src="https://kavegep24.hu/wp-content/uploads/2025/01/kavegep24-tomoritett.mp4" type="video/mp4" />
      Az Ön böngészője nem támogatja a videó lejátszást.
    </video>

    <p>Ahhoz, hogy a <b>leginkább személyre szabott ajánlatot</b> tudjuk adni, kérjük válaszoljon néhány kérdésre!</p>

    <h2>Kérdések az ajánlathoz</h2>

    <h3>1. Mi a legfontosabb szempont a kávégép bérlés esetén?</h3>
    <p>Ár, minőség, márka, rugalmasság – vagy valami más?<br>
    Segítsen megérteni, mi számít Önnek a legjobban.</p>

    <h3>2. Mi kell ahhoz, hogy megnyerjük az ajánlatot?</h3>
    <p>Mit kellene teljesítenünk, hogy Ön minket válasszon?<br>
    Őszinte visszajelzése segít abban, hogy a lehető legjobb megoldást kínáljuk.</p>

    <h3>3. Mi fontos Önnek?</h3>
    <p>Például:</p>
    <ul>
      <li>Fontos-e a <b>határidő</b>?</li>
      <li>Sürgető, hogy megoldást találjon – vagy ráér később is?</li>
      <li>A <b>márka</b> fontosabb, vagy a <b>garancia</b>?</li>
    </ul>

    <h2>Küldje el válaszait – még aznap ajánlatot adunk!</h2>
    <p>Kérem válaszát emailben küldje el nekünk, és <b>még aznap egy személyre szabott ajánlatot</b> küldünk.<br>
    <b>Email:</b> <a href="mailto:info@kavegep24.hu">info@kavegep24.hu</a></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2025-01-02',
  updatedAt: '2025-01-02',
  thumbnail: '/images/kave-077-kavegep24.webp',
  ogImage: '/images/blog/og-szemelyreszabott-ajanlat.jpg',
  categories: ['kavegep-berles'],
  tags: ['személyre szabott ajánlat', 'kávégép bérlés ajánlat', 'kávégép ajánlatkérés', 'kavegep-berles'],
  featured: false,
  published: true,
  seo: {
    title: 'Személyreszabott kávégép bérlési ajánlat | Kávégép24',
    description:
      'Kérjen személyre szabott kávégép bérlési ajánlatot! Válaszoljon néhány kérdésre, és még aznap elküldjük az Önre szabott ajánlatot. info@kavegep24.hu',
    keywords:
      'kávégép bérlés ajánlat, személyre szabott ajánlat kávégép, kávégép ajánlatkérés, kávégép bérlés személyre szabva',
  },
};

export default post;
