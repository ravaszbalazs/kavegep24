import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kavegep-berles-tevhitek',
  title: 'A kávégép bérlés legtöbb tévhite',
  slug: 'kavegep-berles-tevhitek',
  excerpt:
    'Drága? Körülményes? Csak multiknak való?<br>Eloszlatjuk a kávégép bérlés körül élő leggyakoribb tévhiteket – tényekkel és számokkal.',
  content: `
    <h2>Mik azok a tévhitek, amik a kávégép bérlésnél előfordulnak?</h2>
    <p>Minden szakmának vagy foglalkozásnak megvan a saját téveszméje.<br>
    Ilyenek mint az, hogy a marketingesek hazudnak, vagy hogy a politikusok mind rosszak.</p>
    <p>Rengeteg ilyen téves felvetés vagy éppen hibás általánosítás van.<br>
    A kávégép bérlésnek is megvannak a maga téves „tényei".<br>
    Írásomban ezeket szándékozom eloszlatni.</p>

    <h2>1. tévhit: „A kávégép bérlés drága"</h2>
    <p>Az általunk kihelyezett kávégépek átlagos ára <b>1 500 000 Ft</b>.<br>
    Ilyen vagy ehhez hasonló kávégépet már <b>havonta 15 000 Ft-tól</b> lehet bérelni.<br>
    Ez a vételár <b>1/100-a</b>.</p>
    <p>Ezt az olvasóra bízom, hogy maga döntse el ennek drágaságát.<br>
    Határozott véleményünk szerint: <b>nem drága</b>.</p>

    <h2>2. tévhit: „A kávégép bérlés körülményes"</h2>
    <p>Attól a pillanattól kezdve, hogy megszületik a gondolat, hogy szüksége van egy kávégépre, <b>24 órán belül ott van, ahova kéri</b>.<br>
    Mindezt üzemkészen, egyetlen papír aláírásával.</p>

    <h2>3. tévhit: „A kávégép fenntartási költsége magas"</h2>
    <p>Minden költség alól mentesül, aki kávégépet bérel tőlünk.<br>
    A <b>garancia addig tart, amíg használja a kávégépet</b>.<br>
    Tehát teljesen ingyenes a fenntartása, és <b>4 órán belül javítjuk</b>.</p>

    <h2>4. tévhit: „A drága kávégép luxus"</h2>
    <p>Nem szeretnék filozófiai mélységekben keresni a választ, de fontos leszögeznünk egy valamit.</p>
    <p>A <b>kulturált kávézás egészséges</b>.<br>
    Teljesítménynövelő, és antioxidáns tartalma megköti a szabadgyököket.</p>
    <p>Aki az egészséget luxusnak tartja, annak nem tudunk segíteni.</p>

    <h2>5. tévhit: „A kávégép bérlést csak a multik engedhetik meg maguknak"</h2>
    <p>Már <b>havi 15 000 Ft-tól</b> lehet tőlünk kávégépet bérelni.<br>
    Egy ilyen összeget egy <b>KKV is könnyedén megengedhet magának</b>.</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-09-18',
  thumbnail: '/images/kave-006-kavegep24.webp',
  ogImage: '/images/blog/og-kavegep-berles-tevhitek.jpg',
  categories: ['berles', 'cegeknek'],
  tags: ['kavegep-berles'],
  featured: false,
  published: true,
  seo: {
    title: 'A kávégép bérlés 5 legnagyobb tévhite – Valóság vs. mítosz | Kávégép24',
    description:
      'Drága, körülményes, csak multiknak való? Eloszlatjuk a kávégép bérlés körüli 5 legnagyobb tévhitet. Havi 15 000 Ft-tól, 24 órán belüli kiszállítással, ingyenes szervizzel.',
    keywords:
      'kávégép bérlés tévhitek, kávégép bérlés olcsó, kávégép kölcsönzés KKV, irodai kávégép bérlés, kávégép bérlés előnyei',
  },
};

export default post;
