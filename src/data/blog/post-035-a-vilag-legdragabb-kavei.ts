import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'a-vilag-legdragabb-kavei',
  title: 'A világ legdrágább kávéi – Csészénként akár 80 dollárért',
  slug: 'a-vilag-legdragabb-kavei',
  excerpt:
    'Több milliárd ember iszik naponta kávét – de van, aki csészénként 80 dollárért teszi ezt.<br>Összeválogattuk a világ legdrágább és legkülönlegesebb kávéit.',
  content: `
    <p>Több milliárd ember napi szinten iszik kávét.<br>
    Vannak, akik egy-két csészét, de az igazi koffeinfüggők akár négy-öt csészével is elfogyasztanak.</p>

    <p>Napjainkban a kávékultúra reneszánszát éli.<br>
    Ennek köszönhetően <b>egy jövedelmező üzletággá</b> nőtte ki magát – az olcsótól a luxusig minden megtalálható a palettán.</p>

    <p>Összeválogattam a világ legdrágább kávéit.<br>
    Van olyan kávé, amiért <b>csészénként 80 dollárt</b> is fizetnek (kb. 22 000 Ft).<br>
    Nem írtam el a számokat – igen, képesek egy csésze kávéért ennyit is kifizetni.</p>

    <h2>Hacienda la Esmeralda</h2>
    <p>A Panamából származó <b>Hacienda la Esmeralda</b> a luxus csúcsa a kávé világában.<br>
    A kávébabokat évente megrendezett aukciókon értékesítik – esetenként akár <b>250 dollárt</b> is adnak a kávébabokért.</p>

    <p><em>Íze:</em> az édeskéstől a virágos jegyekig terjed.</p>

    <h2>Finca el Injerto</h2>
    <p>Ezt a díjnyertes kávét <b>fontonként 500 dollárért</b> kínálják (1 font ≈ fél kiló).<br>
    E hihetetlennek tűnő árat a márka <b>Geisha</b> nevű fajtájával érték el.</p>

    <p><em>Bukéja:</em> a lepényhalra emlékeztet.</p>

    <h2>Kopi Luwak</h2>
    <p>Ezt a fajta kávét már jóval többen ismerik – vagy legalábbis hallottak róla.<br>
    Sikerének egyik titka a <b>Bakancslista</b> című filmhez köthető.</p>

    <p>A Kopi Luwak minden egyes kávébabja <b>keresztülhalad a cibetmacska emésztőrendszerén</b>.<br>
    Csészénként <b>80 dollárt</b> kell fizetnünk, ha szeretnénk megízlelni a cibetmacska gyomornedvei által fűszerezett kávékülönlegességet.</p>

    <p>Ezt a kávéfajtát hamisítják a legtöbben.<br>
    Ma már sorozatgyártásban, nagyüzemi módon készítik a Kopi Luwakot.<br>
    Cibetmacska farmokat hoztak létre, és ketrecekben tartva tömik az állatokat a kávébabokkal.<br>
    <b>Ez a fajta eljárás embertelen</b> – ha elpusztul az állat, máris teszik be a soron következőt a ketrecbe.<br>
    Úgy gondolom, hogy egy jóérzésű kávéfanatikus nem fogyaszt Luwakot.</p>

    <h2>Black Ivory</h2>
    <p>Ha már nagyüzem, akkor tegyük gigantikussá.<br>
    Thaiföldön egy igen ritka kávéfajtát <b>a világ egyetlen elefántmenhelyén</b> teszik még egzotikusabbá.<br>
    Thai emberek guggolva válogatják a hatalmas elefántürülékből a kávébabokat.</p>

    <p>Eme exkluzív kávéért potom <b>50 dollárt</b> kell fizetnünk csészénként.</p>

    <p><em>Íze:</em> kissé kesernyés.</p>

    <p>Ha tetszett a cikk, kérlek oszd meg másokkal is!<br>
    Ha inkább egy <b>megfizethető, de kiváló minőségű kávét</b> keresel a mindennapi élethez, keress minket!</p>
  `,
  author: 'kajor-roland',
  publishedAt: '2018-09-19',
  thumbnail: '/images/kave-035-kavegep24.webp',
  ogImage: '/images/blog/og-a-vilag-legdragabb-kavei.jpg',
  categories: ['kavekultura'],
  tags: ['kavekultura', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: 'A világ legdrágább kávéi – Csészénként akár 80 dollárért | Kávégép24',
    description:
      'Hacienda la Esmeralda, Kopi Luwak, Black Ivory – a világ legdrágább és legkülönlegesebb kávéi. Kopi Luwak csészénként 80 dollár, Finca el Injerto fontonként 500 dollár. Érdemes-e?',
    keywords:
      'világ legdrágább kávéja, Kopi Luwak, Hacienda la Esmeralda, Black Ivory kávé, Finca el Injerto, luxuskávé, drága kávé, cibetmacska kávé',
  },
};

export default post;
