import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'vegejarja-a-forro-kave',
  title: 'Végét járja a forró kávé fogyasztás? A fiatalok inkább a hideg italokat részesítik előnyben',
  slug: 'vegejarja-a-forro-kave',
  excerpt:
    'A Starbucks szerint a 2021 harmadik negyedéves amerikai italértékesítés közel 75%-a hideg volt.<br>A hideg kávék kora elérkezett – és ez nem múló hóbort.',
  content: `
    <p>A Starbucks szerint a <b>2021 harmadik negyedéves</b> amerikai italértékesítés közel <b>75%-a hideg volt</b>.</p>

    <p>A seattle-i kávézólánc vezérigazgatója, <b>Kevin Johnson</b> elárulta, hogy a hideg italok értékesítése tovább emelkedik az Egyesült Államokban, különösen a <b>fiatalabb fogyasztók körében</b>.</p>

    <h2>A számok</h2>
    <p>A Starbucks felfedte, hogy a tavaszi és nyári hideg italok értékesítése <b>jelentősen meghaladta a forró italokat</b> az Egyesült Államokban.<br>
    Az összes italértékesítés <b>74%-át</b> tette ki a június 27-én zárult pénzügyi negyedévben.</p>

    <p>A fiatalok körében különösen erős a kereslet a <b>Cold Brew</b> és a <b>Nitro Cold</b> italok iránt.</p>

    <h2>Mi az a Cold Brew?</h2>
    <p>A Cold Brew <b>hideg eljárásos kávékészítést</b> jelent.<br>
    Az őrölt kávét szobahőmérsékletű vízben elkeverjük, és hűtőben <b>12 óráig</b> állni hagyjuk.<br>
    Majd sűrű szűrőn vagy kávéfilteren átszűrjük – beleteszünk néhány jégkockát, és máris kész.</p>

    <h2>Mi az a Nitro Cold?</h2>
    <p>Az eljárás hasonló a Cold Brew technológiához, de azzal a különbséggel, hogy <b>magas nyomású nitrogénnel csapolják</b> – hasonlóan a sör csapolásához.<br>
    Ennek eredménye egy <b>krémes, de hideg kávéital</b>.</p>

    <h2>Nem hóbort – új trend</h2>
    <p>A felmérésből az is kiderült, hogy ez <b>nem egyfajta hóbort, hanem egy új trend</b>.<br>
    Hiszen a téli hónapokban is vásárolnak jeges italokat.</p>

    <p>A kávéfogyasztók <b>41%-a</b> a téli, hideg napokban is előszeretettel iszogat hideg kávét.</p>

    <p>A hideg kávék világa egyre nagyobb teret hódít – ha te is ki szeretnéd próbálni, <b>keress minket</b>, és segítünk megtalálni a legjobb kávét hozzá!</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2021-09-03',
  thumbnail: '/images/kave-042-kavegep24.webp',
  ogImage: '/images/blog/og-vegejarja-a-forro-kave.jpg',
  categories: ['kavekultura'],
  tags: ['cold brew', 'kávé trend'],
  featured: false,
  published: true,
  seo: {
    title: 'Végét járja a forró kávé? A Starbucks értékesítésének 75%-a hideg ital | Kávégép24',
    description:
      'A Starbucks 2021-es adatai szerint az eladások 74%-a hideg ital volt. Mi az a Cold Brew és Nitro Cold? A fiatalok kávézási szokásai gyökeresen megváltoznak.',
    keywords:
      'hideg kávé trend, Cold Brew, Nitro Cold kávé, Starbucks hideg italok, jeges kávé, cold brew készítés, kávé trendek 2021, fiatalok kávéfogyasztás',
  },
};

export default post;
