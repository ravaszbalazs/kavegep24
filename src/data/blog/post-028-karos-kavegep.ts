import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'karos-kavegep',
  title: 'Karos kávégép – A kávégépek Ferrarija',
  slug: 'karos-kavegep',
  excerpt:
    'A karos kávégépek a kávégépek Ferrarija.<br>Nem csak eszköz – dísze a konyhának, és az egyetlen dísztárgy, ami látványon túl endorfint is juttat a szervezetünkbe.',
  content: `
    <p>Az, hogy valami szép vagy sem, az szubjektív.<br>
    Viszont azt állítani, hogy a kávégépek között nem a legszebbek a karos kávégépek – az szinte elképzelhetetlen.<br>
    Persze mint minden esetben, itt is márkától és típustól függ a megítélés.</p>

    <p>Egy jó karos kávégép által adott kávénak a minősége <b>egy igényesebb kávézó szintjével vetélkedik</b>.<br>
    Aki szeretné elkápráztatni a vendégét, annak egy ilyen eszköz a legjobb választás.</p>

    <p>Talán az <em>eszköz</em> sem jó szó rá – hívjuk inkább <b>dísznek</b>.</p>

    <p>A karos kávégép az egyetlen olyan dísz a konyhában, ami a látvány mellett <b>endorfint is juttat a szervezetünkbe</b>.</p>

    <h2>A karos kávégép előnyei</h2>
    <p>Először van egy <b>érzelmi oldala</b> a dolognak.<br>
    Van annak valami megmagyarázhatatlan oka, amiért a karos kávégéppel készített kávé elkészítése nagyobb örömet okoz.<br>
    Persze itt nem ipari adagokról beszélünk, hanem egy vasárnapi ebéd után elkészített adagról.<br>
    Kicsit olyan, mint egy új autót lemosni – örömmel tölt el.</p>

    <p>A másik előnye, hogy <b>manuálisan tudod adagolni a kávé mennyiségét</b>, ezáltal nagyobb kontrollod van a kávé ízében.</p>

    <h2>A karos kávégép hátrányai</h2>
    <p>Az egyik legtöbbet emlegetett ok, hogy <b>nagy</b>, ezért sok helyet foglal a konyhában.<br>
    Viszont aki ezen felül tud emelkedni, annak sok kellemes pillanatot fog okozni.</p>

    <p>A másik hátránya, hogy <b>több figyelmet kíván a tisztítása</b> az automatákkal szemben.</p>

    <p>Ha karos kávégépet szeretnél bérelni vagy vásárolni, <b>keress minket bizalommal!</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2018-03-09',
  thumbnail: '/images/kave-028-kavegep24.webp',
  ogImage: '/images/blog/og-karos-kavegep.jpg',
  categories: ['kavegepek'],
  tags: ['espresso', 'kavekultura'],
  featured: false,
  published: true,
  seo: {
    title: 'Karos kávégép – A kávégépek Ferrarija | Kávégép24',
    description:
      'A karos kávégép a legszebb és legelőkelőbb kávégéptípus. Manuális adagolás, kávézói minőség, gyönyörű design – de mit kell tudni az előnyeiről és hátrányairól?',
    keywords:
      'karos kávégép, professzionális espresso gép, karos kávégép előnyök, karos kávégép hátrányok, kávégép design, kávégép vásárlás, karos espresso gép',
  },
};

export default post;
