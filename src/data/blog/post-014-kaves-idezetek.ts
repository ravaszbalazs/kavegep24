import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kaves-idezetek',
  title: 'Kávés idézetek – A legjobb gondolatok a kávéról',
  slug: 'kaves-idezetek',
  excerpt:
    'Nincs erős kávé, csak gyenge ember.<br>Összegyűjtöttük a legszebb és legelgondolkodtatóbb kávés idézeteket – Erdős Páltól Jim Morrisonig.',
  content: `
    <blockquote>
      <p>„Nincs erős kávé, csak gyenge ember."</p>
    </blockquote>

    <blockquote>
      <p>„Ihatatlan kávé nem létezik, csak akaratgyenge ember!"</p>
      <cite>– Laurell Kaye Hamilton</cite>
    </blockquote>

    <blockquote>
      <p>„A matematikus egy gép csupán, aki az elfogyasztott kávémennyiséget elméletekké alakítja."</p>
      <cite>– Erdős Pál</cite>
    </blockquote>

    <blockquote>
      <p>„Ha megtöltöd az elmédet Bostonnal és New Yorkkal, divattal és fösvénységgel és romlásra való hajlammal, az érzékeid megfáradtak a bortól és a francia kávétól – akkor a személyed már nem találhatja meg a ragyogó bölcsességet a fenyvesekben töltött magányban."</p>
      <cite>– Ralph Waldo Emerson</cite>
    </blockquote>

    <blockquote>
      <p>„A kávénak nagy hatása van az emberiség napi teendőire, amely 12-t kitesz a lehetséges 24 órából.<br>
      A tempó, a bonyolultság, a modern életre való figyelem olyasmit hív, amely végrehajtja azt a csodát, hogy megnöveli az agyi aktivitást mindenféle káros, egészségkárosító mellékhatás nélkül."</p>
      <cite>– Margaret Meagher, <em>Gondolatok a Kávéról</em></cite>
    </blockquote>

    <blockquote>
      <p>„Míg iszod a kávéd s én a teám,<br>
      csak ülünk egymás mellett némán.<br>
      Szeretném tudni, most mi lesz,<br>
      nem szólsz hozzám, mégis hazudsz nekem."</p>
      <cite>– Jim Morrison</cite>
    </blockquote>

    <blockquote>
      <p>„Amíg létezik a világon kávé, semmi sem lehet annyira szörnyű."</p>
      <cite>– Cassandra Clare</cite>
    </blockquote>

    <p>Amennyiben ismersz hasonló idézeteket, <b>kérlek írd meg nekünk</b> – és tovább bővítjük ezt a bejegyzést!</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-10-14',
  thumbnail: '/images/kave-014-kavegep24.webp',
  ogImage: '/images/blog/og-kaves-idezetek.jpg',
  categories: ['kavekultura'],
  tags: ['kavekultura'],
  featured: false,
  published: true,
  seo: {
    title: 'Kávés idézetek – A legjobb gondolatok a kávéról | Kávégép24',
    description:
      'A legjobb kávés idézetek Erdős Páltól, Jim Morrisontól, Cassandra Clare-től és másoktól. Elgondolkodtató és szórakoztató gondolatok minden kávérajongónak.',
    keywords:
      'kávés idézetek, kávé idézetek, kávé gondolatok, Erdős Pál kávé, Jim Morrison kávé, kávérajongó idézetek',
  },
};

export default post;
