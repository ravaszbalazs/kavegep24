import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kave-muvesz-szemszogbol',
  title: 'A kávé egy művész szemszögéből – Valódi alkotások kávéval',
  slug: 'kave-muvesz-szemszogbol',
  excerpt:
    'Egy koreai művész lenyűgöző alkotásai kávéval készültek.<br>Ezek nem Photoshop szerkesztések – valódi, kézzel festett képek, amelyek a kávét mint festékanyagot használják.',
  content: `
    <p>Egy <b>koreai művész</b> sajátos alkotása a kávéval – ezek a képek nem Photoshop eredményei.<br>
    Ezek <b>valódi alkotások</b>, amelyekben a kávé nemcsak ital, hanem festékanyag is egyben.</p>

    <p>A kávé rendkívül gazdag színvilágot kínál – a világos tejeskávé árnyalatától a sötét eszpresszó mélybarnájáig.<br>
    A művész ezeket az árnyalatokat használja fel, hogy <b>lélegzetelállító részletességű képeket</b> hozzon létre.</p>

    <h2>Képgaléria</h2>
    <p>Kattints bármelyik képre a nagyított nézethez!</p>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 my-8 not-prose">
      <a href="/images/blog/kave-muvesz-001.webp" class="glightbox group block overflow-hidden rounded-xl aspect-square" data-gallery="kave-muvesz" data-description="Kávéfestészet – 1. alkotás">
        <img src="/images/blog/kave-muvesz-001.webp" alt="Kávéfestészet – 1. alkotás" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </a>
      <a href="/images/blog/kave-muvesz-002.webp" class="glightbox group block overflow-hidden rounded-xl aspect-square" data-gallery="kave-muvesz" data-description="Kávéfestészet – 2. alkotás">
        <img src="/images/blog/kave-muvesz-002.webp" alt="Kávéfestészet – 2. alkotás" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </a>
      <a href="/images/blog/kave-muvesz-003.webp" class="glightbox group block overflow-hidden rounded-xl aspect-square" data-gallery="kave-muvesz" data-description="Kávéfestészet – 3. alkotás">
        <img src="/images/blog/kave-muvesz-003.webp" alt="Kávéfestészet – 3. alkotás" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </a>
      <a href="/images/blog/kave-muvesz-004.webp" class="glightbox group block overflow-hidden rounded-xl aspect-square" data-gallery="kave-muvesz" data-description="Kávéfestészet – 4. alkotás">
        <img src="/images/blog/kave-muvesz-004.webp" alt="Kávéfestészet – 4. alkotás" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </a>
      <a href="/images/blog/kave-muvesz-005.webp" class="glightbox group block overflow-hidden rounded-xl aspect-square" data-gallery="kave-muvesz" data-description="Kávéfestészet – 5. alkotás">
        <img src="/images/blog/kave-muvesz-005.webp" alt="Kávéfestészet – 5. alkotás" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </a>
      <a href="/images/blog/kave-muvesz-006.webp" class="glightbox group block overflow-hidden rounded-xl aspect-square" data-gallery="kave-muvesz" data-description="Kávéfestészet – 6. alkotás">
        <img src="/images/blog/kave-muvesz-006.webp" alt="Kávéfestészet – 6. alkotás" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </a>
      <a href="/images/blog/kave-muvesz-007.webp" class="glightbox group block overflow-hidden rounded-xl aspect-square" data-gallery="kave-muvesz" data-description="Kávéfestészet – 7. alkotás">
        <img src="/images/blog/kave-muvesz-007.webp" alt="Kávéfestészet – 7. alkotás" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </a>
      <a href="/images/blog/kave-muvesz-008.webp" class="glightbox group block overflow-hidden rounded-xl aspect-square" data-gallery="kave-muvesz" data-description="Kávéfestészet – 8. alkotás">
        <img src="/images/blog/kave-muvesz-008.webp" alt="Kávéfestészet – 8. alkotás" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </a>
    </div>

    <h2>A kávé mint festékanyag</h2>
    <p>A kávéfestészet technikája egyszerű, mégis rendkívüli türelmet és precizitást igényel.<br>
    A különböző töménységű kávé más-más barna árnyalatot ad, amelyeket rétegezve csodálatos <b>mélységet és részletgazdagságot</b> lehet elérni.</p>

    <p>Ez az alkotásmód emlékeztet arra, hogy a kávé nem csupán egy mindennapi ital –<br>
    hanem <b>egy egész kultúra</b>, amelynek szinte végtelen felhasználási módjai vannak.</p>

    <p>Ha te is szereted a kávét és szeretnél <b>minőségi kávét vagy kávégépet</b>,<br>
    keress minket bizalommal!</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-10-16',
  thumbnail: '/images/kave-016-kavegep24.webp',
  ogImage: '/images/blog/og-kave-muvesz-szemszogbol.jpg',
  categories: ['kavekultura'],
  tags: ['kavekultura'],
  featured: false,
  published: true,
  seo: {
    title: 'A kávé egy művész szemszögéből – Valódi alkotások kávéval | Kávégép24',
    description:
      'Egy koreai művész lenyűgöző képei kávéval festve – ezek nem Photoshop szerkesztések, hanem valódi alkotások. 8 képes galéria a kávéfestészet csodájáról.',
    keywords:
      'kávéfestészet, kávé művészet, koreai kávéfestő, kávéval festett képek, kávé alkotás, kávé galéria, kávékultúra',
  },
};

export default post;
