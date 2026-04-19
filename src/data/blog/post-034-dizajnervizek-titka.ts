import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'dizajnervizek-titka',
  title: 'A dizájnervizek titka – A jó kávéhoz jó víz is kell',
  slug: 'dizajnervizek-titka',
  excerpt:
    'Tudtad, hogy az espresso 93%-a víz?<br>Ezért a víz összetétele és minősége rendkívül fontos a kávé elkészítésénél.',
  content: `
    <p>Tudtad, hogy az espresso <b>93%-a víz</b>?</p>

    <p>Ezért a víz összetétele, minősége nagyon fontos a kávé elkészítésénél.</p>

    <p>Újabban már a nívós barista versenyeken <b>saját dizájner vizeket</b> készítenek a tökéletes kávéhoz.<br>
    Sőt, könyveket írnak arról, hogy milyen a legmegfelelőbb víz.</p>

    <h2>A víz szerepe a speciality kávéban</h2>
    <p>Az igazi, profi baristák – a kávékészítés szakképzett művészei – napjainkban már nem csak arra figyelnek oda, hogy milyen pörkölésű, örlésfinomságú kávéval dolgoznak, hanem hogy <b>milyen vízzel készítik el</b> azt a bizonyos feketét.</p>

    <p>A speciality kávé készítésénél egyre nagyobb hangsúlyt és figyelmet kap a víz minősége.<br>
    Ha egy kicsit belegondolunk, van benne logika.</p>

    <p>Mint ahogy különböző ízeket tudunk előcsalni ugyanabból a kávéból csupán a pörkölés és az örlemény változtatásával, ugyanúgy <b>víz és víz között is van különbség</b>.</p>

    <p>Minden országnak más és más a csapvíz összetétele.<br>
    Más ízt érzünk Budapesten és mást Milánóban.<br>
    A víz ízét alapvetően az <b>ásványi anyagok összetétele</b> határozza meg.<br>
    Például: a magnéziumban gazdagabb víz édesebb.<br>
    Ezek az aprónak tűnő különbségek a <b>kávéélményt is meghatározzák</b>.</p>

    <h2>Hogyan készülnek a dizájner vizek?</h2>
    <p>A világversenyeken egyedi dizájner vizeket használnak.<br>
    Először <b>fordított ozmózissal</b> vagy más eljárásokkal kiszűrik a vízből az ásványi anyagokat, aztán egyedi igényeik szerint visszajuttatják azokat.<br>
    Így pontosan kontrollálható, hogy milyen ízt hoz ki a kávéból a víz.</p>

    <h2>Miért szolgálnak fel vizet a kávéhoz?</h2>
    <p>A víz nemcsak a kávé elkészítésénél játszik fontos szerepet, hanem az elfogyasztása közben is.<br>
    Mielőtt kávét fogyasztanánk, fontos, hogy <b>megtisztítsuk nyelvünk ízlelőbimbóit</b>.<br>
    A kávé élvezetéhez mindenképpen előnyös, ha a szánkban nincs másfajta íz – például étkezésből származó vagy cukros üdítők ízei.<br>
    Ezek mind eltorzítják a kávé csodálatos ízét.</p>

    <p>Sokan azt mondják, hogy a kávé vízhajtó – ezért adnak mellé vizet.<br>
    Nos ez fél igazság, mert a tea is vízhajtó, és mégsem iszunk mellé vizet.</p>

    <p>A másik ok a vízivásra: a kávé <b>pH értéke 5 körül mozog</b>, ami savasodást idézhet elő.<br>
    Ezt kompenzáljuk a kávé előtti vízfogyasztással – és fogainkat is védjük ezáltal.</p>

    <p>Amennyiben további kérdésed lenne, <b>hívj bátran!</b><br>
    <b>+36 20 511 1070</b><br>
    <b>info@kavegep24.hu</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2018-09-19',
  thumbnail: '/images/kave-034-kavegep24.webp',
  ogImage: '/images/blog/og-dizajnervizek-titka.jpg',
  categories: ['kavekultura'],
  tags: ['kavekultura', 'espresso'],
  featured: false,
  published: true,
  seo: {
    title: 'A dizájnervizek titka – A jó kávéhoz jó víz is kell | Kávégép24',
    description:
      'Az espresso 93%-a víz – mégis kevesen figyelnek rá. Miért használnak dizájner vizet a barista versenyeken? Miért szolgálnak fel vizet a kávéhoz? Minden kiderül!',
    keywords:
      'kávé és víz, dizájner víz kávé, speciality kávé víz, barista verseny víz, kávé pH, fordított ozmózis kávé, víz ásványi anyagok kávé, miért iszunk vizet kávé mellé',
  },
};

export default post;
