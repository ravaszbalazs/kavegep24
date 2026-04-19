import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kave-vs-energiaital',
  title: 'Kávé VS Energiaital – Melyik a jobb választás?',
  slug: 'kave-vs-energiaital',
  excerpt:
    'Dr. Varga Zsolt, a Heim Pál Toxikológiai osztály adjunktusa havonta egy-két koffeinmérgezéssel találkozik.<br>Elmondása szerint: <b>„Még sosem láttam olyan gyereket, aki a túl sok kávé fogyasztásától lett volna rosszul."</b>',
  content: `
    <p>Írásomban megpróbálom felsorakoztatni az érveket és ellenérveket.</p>

    <p>Kávéfogyasztóként valószínűleg elfogult vagyok az energiaitallal szemben – de ki ne lenne az, ha arról kellene írnia, amit szeret.<br>
    Kávégépek bérbeadásával és kávé forgalmazásával foglalkozom, és szeretem azt, amit csinálok.</p>

    <h2>Egészséges-e az energiaital?</h2>
    <p><em>„Igyál energiaitalt, mert felpörget, mert átlendít, mert szárnyakat ad!"</em></p>

    <p>Ilyen és ehhez hasonló szlogeneket hallunk és társítunk a taurinos, koffeines energiaitalokkal kapcsolatban.<br>
    A szervezetre gyakorolt <b>negatív hatásokat</b> pedig alig, vagy egyáltalán nem ismertetik.</p>

    <p><b>Fontos a mértékletesség!</b><br>
    Ki mondja meg, hogy mennyi az elég?</p>

    <p>Az energiaital gyártók és forgalmazók honlapján sincs megfelelő tájékoztatás.<br>
    Elsiklanak felette, de sokkal inkább <b>elhallgatják azt a tényt</b>, hogy a koffein és taurin keveréke milyen hatást gyakorol az emberi szervezetre.</p>

    <p>Az energiaitalokat <b>sportolóknak fejlesztették ki</b>, mégis a reklámokból nem ez jön le.<br>
    Sok gyermek úgy tekint az energiaitalra, mint egy üdítőre, sok szülő sportolás előtt adja gyermekének.<br>
    <b>Litvánia volt az első ország</b>, ahol betiltották az energiaitalok eladását fiatalkorúaknak.</p>

    <h2>Ártalmas-e az energiaital?</h2>
    <p>A taurin és koffein hatása a szervezetre jól dokumentált.<br>
    Számos tanulmány mutatja, hogy a mértéktelen taurinos, koffeines italfogyasztás <b>káros az egészségre</b> és a vese működését negatív irányba befolyásolja.</p>

    <p>A taurinos, koffeines energiaitalok kora lejárt.<br>
    Súlyos euró milliókat fektetnek bele, hogy ezt a tényt elfedjék.<br>
    A <b>csúcsteljesítményed nem függ</b> a taurinos energiaitaloktól – helyette inkább fókuszálj az egészséges életmódra.</p>

    <h2>A kávé hatása a szervezetre</h2>
    <p>A kávé <b>élénkítő hatása köztudott</b> és nem is vitatott.<br>
    A koffein stimulálón hat a központi idegrendszerre, és emeli mind a pulzusszámot, mind a vérnyomást.<br>
    A fogyasztók kevésbé érzik magukat fáradtnak egy-egy csésze kávé felhörpintése után.</p>

    <p>A koffein hatására a hasi, zsigeri erek összeszűkülnek, az agy viszont <b>több vért kap</b>.<br>
    A koffein így a központi idegrendszerre és az agyra élénkítő hatással van; fokozza a szív- és veseműködést, gyorsítja a légzést és az anyagcserét.<br>
    A magas vérnyomásúaknak, a szív- és veseelégtelenségben szenvedőknek ezért óvatosan kell bánniuk a kávéval.</p>

    <h2>A kávéfogyasztás szabályai</h2>
    <ul>
      <li><b>Ne igyunk kávét lefekvés előtt!</b><br>
      Egy csésze kávéban 40–80 mg koffein található. Ennek hatása az idegrendszerre koncentrálódik, amelynek köszönhetően csökken az álmosság, az unalom és a fáradtság.</li>
      <li><b>Ne igyunk napi két-három adagnál többet!</b><br>
      A kávé fokozza a gyomornedv-elválasztást. Túlzott használata savtúltengést, gyomorégést okozhat.</li>
      <li><b>Ne igyunk kávét éhgyomorra!</b><br>
      A kávé segíti az emésztési folyamatot, hála az idegekre való serkentő hatásának. Nemcsak reggel ajánlott, hanem vacsora és ebéd után is – serkenti az emésztési nedvek termelését.</li>
    </ul>

    <p>Szendi Gábor pszichológus szerint:<br>
    <em>„Az orrunk előtt bezáródó metróajtó vérnyomásnövelő hatása, vagy gyerekünk intője nagyobb egészségkárosodást okozhat, mint a kávézás."</em></p>

    <p>Remélem, írásomból kiderült, hogy a legfontosabb a <b>mértékletesség</b>!<br>
    Amennyiben minőségi kávégépet bérelnél és minőségi kávét szeretnél fogyasztani, akkor <b>hívj bátran!</b></p>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-10-25',
  thumbnail: '/images/kave-018-kavegep24.webp',
  ogImage: '/images/blog/og-kave-vs-energiaital.jpg',
  categories: ['kavekultura', 'egeszseg'],
  tags: ['kávé egészség', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: 'Kávé VS Energiaital – Melyik a jobb választás? | Kávégép24',
    description:
      'Kávé vagy energiaital? Dr. Varga Zsolt toxikológus szerint még senki sem lett rosszul a kávétól. Mutatjuk az érveket, ellenérveket és a kávéfogyasztás szabályait.',
    keywords:
      'kávé vs energiaital, energiaital káros, koffein taurin hatás, kávé egészséges, energiaital fiataloknak, kávéfogyasztás szabályai, kávé előnyei',
  },
};

export default post;
