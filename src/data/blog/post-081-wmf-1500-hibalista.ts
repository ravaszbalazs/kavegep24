import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'wmf-1500-hibalista',
  title: 'WMF 1500 hibalista',
  slug: 'wmf-1500-hibalista',
  excerpt:
    'A WMF kávégépek megbízható készülékek, de előfordul, hogy hibaüzenetet írnak ki.<br>Összegyűjtöttük a WMF 1500 leggyakrabban előforduló hibakódjait és megoldásaikat.',
  content: `
    <h2>WMF 1500 hibakódok – mit jelent és mit tegyen?</h2>
    <p>A WMF kávégépek megbízható készülékek, de sajnos előfordul, hogy különböző hibaüzeneteket írnak ki.<br>
    Egy átlag felhasználó számára ezek a hibakódok nem sokat mondanak.<br>
    Kiemeltünk néhány <b>gyakran előforduló hibakódot</b> és azok megoldását.</p>

    <h3>F161 (9269) – Minimális áramlás főzés közben</h3>
    <p>Minimális áramlás főzés közben.<br>
    <b>Megoldás:</b> A főzőegységet tisztítsa meg.</p>

    <h3>F189 – Felfűtési idő túllépés</h3>
    <p>A gép nem érte el a szükséges hőmérsékletet az előírt időn belül.<br>
    <b>Megoldás:</b> Kapcsolja ki, majd kapcsolja be újra a készüléket.</p>

    <h3>9489 – Kézi bedobó nyitva</h3>
    <p><b>Megoldás:</b> Zárja be a kézi bedobót.</p>

    <h3>9517 – Daráló hiba (kettes daráló)</h3>
    <p>A kettes daráló hibát jelez.<br>
    <b>Megoldás:</b> Ellenőrizze a darálót, szükség esetén hívjon szakszervizünket.</p>

    <h3>9584 – Minimális áramlás vízkőtelenítés alatt</h3>
    <p>Vízkőtelenítés közben minimális vízáramlás érzékelhető.<br>
    <b>Megoldás:</b> Ellenőrizze a víztartályt és a vízellátást, majd indítsa újra a vízkőtelenítési folyamatot.</p>

    <h2>Nem boldogul a hibakóddal?</h2>
    <p>Ha a fenti megoldások nem segítenek, vagy más hibakódot lát, hívjon minket bizalommal!<br>
    <b>Szervizünk több mint 10 éve szervizel WMF kávégépeket.</b></p>

    <p><b>Tel.:</b> <a href="tel:+36205111070">0620 511 1070</a></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2025-04-14',
  updatedAt: '2025-04-14',
  thumbnail: '/images/kave-081-kavegep24.webp',
  ogImage: '/images/blog/og-wmf-1500-hibalista.jpg',
  categories: ['karbantartas'],
  tags: ['WMF 1500', 'WMF hibakód', 'WMF hiba', 'WMF szerviz', 'kávégép hibakód'],
  featured: false,
  published: true,
  seo: {
    title: 'WMF 1500 hibalista – Hibakódok és megoldások | Kávégép24',
    description:
      'WMF 1500 hibakódok magyarázata: F161, F189, 9489, 9517, 9584 – mit jelent és hogyan oldja meg? Ha nem boldogul, hívja a Kávégép24 szervizét!',
    keywords:
      'WMF 1500 hibakód, WMF 1500 hiba, WMF F161, WMF F189, WMF 9517, WMF 9584, WMF kávégép szerviz, WMF hibalista',
  },
};

export default post;
