import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'delonghi-brad-pitt',
  title: 'DeLonghi kinevezi Brad Pittet márka nagykövetévé',
  slug: 'delonghi-brad-pitt',
  excerpt:
    'A DeLonghi a Hollywood sztárját, Brad Pittet nevezte ki márka nagykövetévé, hogy elősegítse a prémium otthoni kávépiac növekedését.<br>A kampány neve: „Perfetto from bean to cup".',
  content: `
    <p>A <b>DeLonghi</b> a Hollywood színészét, <b>Brad Pittet</b> nevezte ki márka nagykövetévé, hogy elősegítse a prémium otthoni kávépiac növekedését.</p>

    <p>Pitt elkezdte szerepét a vállalat legújabb globális kommunikációs kampányában:<br>
    a <b>„Perfetto from bean to cup"</b> (Tökéletes a babtól a csészéig) elnevezésű kampányban.</p>

    <h2>A vezérigazgató szavai</h2>
    <blockquote>
      <p>„Csoportunk rendkívüli növekedést tapasztalt az elmúlt években, és a háztartások eszpresszó kávéfőzői szegmense központi szerepet kapott ebben a bővítésben, ami a mai forgalmunk több mint felét teszi ki."</p>
      <cite>– <b>Massimo Garavaglia</b>, DeLonghi vezérigazgató</cite>
    </blockquote>

    <blockquote>
      <p>„Hisszük, hogy Brad Pitt a tökéletes nagykövet, aki elmondja a világnak a DeLonghi márka szellemiségéről: merész és nemzetközi, ugyanakkor kifinomult és elegáns."</p>
      <cite>– <b>Massimo Garavaglia</b>, DeLonghi vezérigazgató</cite>
    </blockquote>

    <h2>Lenyűgöző pénzügyi eredmények</h2>
    <p>Az olasz készülékgyártó <b>180,8 millió euró nettó nyereségről</b> számolt be 2021 első hat hónapjában,<br>
    ami megdöbbentő <b>319,5%-os növekedést</b> jelent a 2020 azonos időszakához képest.</p>

    <p>A prémium otthoni kávégép piac töretlenül növekszik – ha te is szeretnél egy kiváló minőségű kávégépet a mindennapi életedbe, <b>keress minket!</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2021-10-09',
  thumbnail: '/images/kave-043-kavegep24.webp',
  ogImage: '/images/blog/og-delonghi-brad-pitt.jpg',
  categories: ['kavekultura', 'kavegepek'],
  tags: ['kávé trend', 'kavekultura'],
  featured: false,
  published: true,
  seo: {
    title: 'DeLonghi kinevezi Brad Pittet márka nagykövetévé | Kávégép24',
    description:
      'Brad Pitt a DeLonghi új globális márkanagy követe – a „Perfetto from bean to cup" kampány sztárja. A DeLonghi 2021 első felében 319,5%-os nyereségnövekedést ért el.',
    keywords:
      'DeLonghi Brad Pitt, DeLonghi márkanagykövet, Perfetto from bean to cup, DeLonghi espresso, prémium kávégép, DeLonghi kampány, kávégép celebrity',
  },
};

export default post;
