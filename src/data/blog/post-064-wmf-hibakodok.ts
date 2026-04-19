import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'wmf-hibakodok',
  title: 'WMF hibakódok',
  slug: 'wmf-hibakodok',
  excerpt:
    'WMF kávégépe hibakódot jelez? Összegyűjtöttük a leggyakoribb WMF hibakódokat és azok megoldásait.<br>Ha nem boldogul, hívja szervizünket!',
  content: `
    <h2>A leggyakoribb WMF hibakódok és megoldásuk</h2>
    <p>Ha WMF kávégépe hibakódot jelez, az alábbi táblázat segíthet a hiba azonosításában és megoldásában.<br>
    Ha a hiba nem szüntethető meg, ne kísérletezzen tovább – forduljon szakszervizhez!</p>

    <h3>9216</h3>
    <p>Kapcsolja ki, majd kapcsolja be a készüléket.<br>
    Ha a hiba ismét megjelenik, lehetséges, hogy <b>túl finomra őröl a daráló</b> – a darálóbeállítást kell módosítani.</p>

    <h3>9614</h3>
    <p><b>Töltse fel a tejtartályt.</b><br>
    A gép érzékeli, hogy a tej elfogyott vagy a tartály nem megfelelően van behelyezve.</p>

    <h3>9880</h3>
    <p>Ellenőrizze és állítsa be az időt.<br>
    Ezután <b>kapcsolja ki, majd kapcsolja be a készüléket</b>.</p>

    <h3>9478</h3>
    <p>Ellenőrizze a <b>24/30 Voltos panelt</b>.<br>
    Ha hibás, cseréltesse ki szakemberrel.</p>

    <h3>F185</h3>
    <p>A <b>gőzkazán vízszintszondáját</b> ellenőrizze.<br>
    Ez a hiba szervizes beavatkozást igényelhet.</p>

    <h3>F164</h3>
    <p>Ellenőrizze a <b>vízellátást</b>.<br>
    Győződjön meg arról, hogy a víztartály tele van és megfelelően van behelyezve.</p>

    <h3>F161</h3>
    <p>Ellenőrizze a kávé beállításait.<br>
    <b>Minimális áramlás – a főzőegység eltömődött.</b><br>
    Szükséges lehet a főzőegység tisztítása vagy szakszerviz segítsége.</p>

    <h2>Nem boldogul a hibakóddal? Hívja szervizünket!</h2>
    <p>Szervizünk <b>több mint tíz éve szervizel, karbantart és üzemeltet WMF kávégépeket</b>.<br>
    Ha a hibakód nem szüntethető meg az otthoni megoldásokkal, forduljon hozzánk bizalommal!</p>

    <p><b>Cím:</b> 1221 Budapest, Kossuth Lajos utca 93.<br>
    <b>Tel.:</b> <a href="tel:+36205111070">+36 20 511 1070</a></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2024-03-19',
  updatedAt: '2024-03-19',
  thumbnail: '/images/kave-064-kavegep24.webp',
  ogImage: '/images/blog/og-wmf-hibakodok.jpg',
  categories: ['karbantartas'],
  tags: ['WMF hibakód', 'WMF kávégép hiba', 'WMF szerviz', 'kávégép hibakód', 'WMF karbantartás'],
  featured: false,
  published: true,
  seo: {
    title: 'WMF hibakódok – Mit jelent és hogyan oldd meg? | Kávégép24',
    description:
      'WMF kávégép hibakódok magyarázata és megoldása: 9216, 9614, 9880, 9478, F185, F164, F161. Ha nem boldogul, hívja a Kávégép24 szervizét!',
    keywords:
      'WMF hibakód, WMF kávégép hiba, WMF 9216, WMF F161, WMF F164, WMF F185, WMF kávégép szerviz, WMF kávégép javítás',
  },
};

export default post;
