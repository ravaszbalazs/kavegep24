import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'wmf-kavegep-hibauzenetek',
  title: 'WMF kávégép hibaüzenetek – Mit jelent az a szám a kijelzőn?',
  slug: 'wmf-kavegep-hibauzenetek',
  excerpt:
    'Egy rövid, hiánypótló lista azoknak, akik WMF kávégépet használnak.<br>Ha ismeretlen szám jelent meg a kijelzőn, itt megtalálod a magyarázatot.',
  content: `
    <p>Egy rövid, hiánypótló lista azoknak, akik <b>WMF kávégépet</b> használnak.<br>
    Ha ismeretlen hibakód jelent meg a kijelzőn, az alábbi táblázatból kiderül, mit jelent.</p>

    <div class="not-prose my-8 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-coffee text-white">
            <th class="text-left px-4 py-3 font-semibold rounded-tl-xl w-24">Hibakód</th>
            <th class="text-left px-4 py-3 font-semibold rounded-tr-xl">Leírás</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-black/10 hover:bg-coffee/5 transition-colors">
            <td class="px-4 py-3 font-bold text-coffee">89</td>
            <td class="px-4 py-3 text-black/70">Boiler felfűtés idő túllépés</td>
          </tr>
          <tr class="border-b border-black/10 hover:bg-coffee/5 transition-colors bg-black/[0.02]">
            <td class="px-4 py-3 font-bold text-coffee">187</td>
            <td class="px-4 py-3 text-black/70">Gőzboiler szenzor hiba</td>
          </tr>
          <tr class="border-b border-black/10 hover:bg-coffee/5 transition-colors">
            <td class="px-4 py-3 font-bold text-coffee">163</td>
            <td class="px-4 py-3 text-black/70">Vízátfolyás-mérő funkció hiba</td>
          </tr>
          <tr class="border-b border-black/10 hover:bg-coffee/5 transition-colors bg-black/[0.02]">
            <td class="px-4 py-3 font-bold text-coffee">2</td>
            <td class="px-4 py-3 text-black/70">Főzőegység hiányzik</td>
          </tr>
          <tr class="border-b border-black/10 hover:bg-coffee/5 transition-colors">
            <td class="px-4 py-3 font-bold text-coffee">88</td>
            <td class="px-4 py-3 text-black/70">Boiler túlfűtés</td>
          </tr>
          <tr class="border-b border-black/10 hover:bg-coffee/5 transition-colors bg-black/[0.02]">
            <td class="px-4 py-3 font-bold text-coffee">5</td>
            <td class="px-4 py-3 text-black/70">Főzőegység szorul</td>
          </tr>
          <tr class="border-b border-black/10 hover:bg-coffee/5 transition-colors">
            <td class="px-4 py-3 font-bold text-coffee">26</td>
            <td class="px-4 py-3 text-black/70">Adagoló nem működik</td>
          </tr>
          <tr class="border-b border-black/10 hover:bg-coffee/5 transition-colors bg-black/[0.02]">
            <td class="px-4 py-3 font-bold text-coffee">157</td>
            <td class="px-4 py-3 text-black/70">Elemcsere szükséges</td>
          </tr>
          <tr class="hover:bg-coffee/5 transition-colors">
            <td class="px-4 py-3 font-bold text-coffee rounded-bl-xl">189</td>
            <td class="px-4 py-3 text-black/70 rounded-br-xl">Gőzboiler felfűtési idő túllépés</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>Ha a listában nem találod a hibakódot, vagy a hiba elhárítása meghaladja a lehetőségeidet,<br>
    <b>hívj minket</b> – szakembereink gyorsan segítenek!</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-12-04',
  thumbnail: '/images/kave-025-kavegep24.webp',
  ogImage: '/images/blog/og-wmf-kavegep-hibauzenetek.jpg',
  categories: ['szerviz', 'kavegepek'],
  tags: ['WMF kávégép', 'kávégép szerviz'],
  featured: false,
  published: true,
  seo: {
    title: 'WMF kávégép hibaüzenetek – Mit jelent az a szám a kijelzőn? | Kávégép24',
    description:
      'WMF kávégép hibakódok magyarázata: 89, 187, 163, 2, 88, 5, 26, 157, 189 – boiler hiba, főzőegység, adagoló, elemcsere. Hiánypótló lista WMF gép tulajdonosoknak.',
    keywords:
      'WMF kávégép hibaüzenet, WMF hibakód, WMF kávégép hiba, WMF szerviz, kávégép hibaüzenet, WMF Presto hiba, kávégép hibaelhárítás',
  },
};

export default post;
