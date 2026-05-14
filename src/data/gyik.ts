export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const gyikData: FaqItem[] = [
  {
    category: 'szerviz',
    question: 'Nagyon gyenge, vizes kávét főz a készülék. Mi lehet a baj?',
    answer:
      'Új vagy újszerű készülék esetén ezt leggyakrabban a nem megfelelő őrlési finomság vagy a kávérendszer elzsírosodása okozza.\n' +
      'Ha az őrlő túl durvára van állítva, a víz "átrohan" a kávén, az eredmény pedig íztelen ital lesz.\n' +
      'Ha új kávéfajtát próbál ki, a szemes kávé minősége és összetétele is okozhat ilyen változást.\n\n' +
      '<b>Szakértői tipp:</b> Érdemes ellenőrizni a központi egység tisztaságát is.\n' +
      'Ha a járatok szűkülnek, a gép erőlködik, és kevesebb aroma jut a csészébe.\n' +
      'Hozza be hozzánk egy gyors beállításra vagy tisztításra!<br><br>\n' +
      '<b>FIGYELEM!</b> Az őrleménybeállító tárcsát kizárólag a daráló működése közben tekerje, különben az őrlőfejek megszorulhatnak és eltörhetnek!',
  },
  {
    category: 'szerviz',
    question: 'Kevés kávé jön ki (vagy semennyi), de sok víz kerül a tálcába. Mi okozza?',
    answer:
      'Ezt általában a rendszer dugulása okozza.\n' +
      'A lerakódott vízkő vagy a járatokban ragadt zacc miatt a víz alternatív utat keres, és a kifolyó helyett a csepptálcába ürül.<br><br>\n' +
      '<b>Tanácsunk:</b> Ne erőltesse a gépet, mert magától nem fog megjavulni, sőt, a szivattyú is leéghet!\n' +
      'Ilyenkor egy átfogó, szakszerű karbantartásra van szükség.\n' +
      'Hozza be szervizünkbe, vagy kérje kényelmes „háztól házig" szolgáltatásunkat.',
  },
  {
    category: 'szerviz',
    question: 'Nem jön ki a kávé, és alul folyik a gép. Mit tegyek?',
    answer:
      'Ha a gép alatt tócsa áll, az belső tömítetlenségre vagy repedt alkatrészre utal.\n' +
      'A nagy nyomás alatt dolgozó rendszerben a víz ott tör utat magának, ahol a legkisebb ellenállást tapasztalja.<br><br>\n' +
      '<b>Fontos:</b> Ilyenkor már ne próbálja otthon orvosolni a hibát, és ne feszegesse a burkolatot!\n' +
      'A belső nyomás alatt lévő alkatrészek balesetveszélyesek lehetnek.\n' +
      'A készülék ilyenkor általában teljes belső felújítást igényel.\n' +
      'Forduljon szakemberhez: hozza be hozzánk, vagy vegye igénybe futárszolgálatunkat!',
  },
  {
    category: 'szerviz',
    question: 'Nagyon sok a víz a csepptálcában, és vizes, széteső a zacc. Ez normális?',
    answer:
      'Sajnos ez nem normális jelenség.\n' +
      'Míg az öblítési folyamat miatt egy kevés víz természetes a tálcában, a gyorsan megtelő tálca és a „saras", széteső zacc az elöregedett tömítések jele.<br><br>\n' +
      '<b>Megoldás:</b> Ilyenkor a gyári tömítések és a nagynyomású csövek cseréje esedékes.\n' +
      'Ha időben lép, megelőzheti a komolyabb elektronikai hibákat, amiket a szivárgó víz okozhatna.',
  },
  {
    category: 'szerviz',
    question: 'Kapszulás kávégép javítását vállalják?',
    answer:
      'Szervizünk az automata (szemes kávés) és az éttermi karos kávégépek specialistája.\n' +
      'Kapszulás típusok javítását sajnos nem vállaljuk.<br><br>\n' +
      '<b>Érdekesség:</b> A kapszulás gépeknél az alkatrész és a munkadíj gyakran meghaladja egy új készülék árát, így javításuk „gazdasági totálkárnak" minősül.\n' +
      'Környezetvédelmi és egészségi szempontból is javasoljuk, hogy fontolja meg az átállást egy szemes kávéval működő automatára – hosszú távon sokkal kifizetődőbb!',
  },
  {
    category: 'szerviz',
    question: 'Használhatok őrölt kávét az automata gépemben?',
    answer:
      'Igen, amennyiben a készüléken van külön nyílás az őrölt kávé számára.\n' +
      'Fontos azonban tudni, hogy ez csak „vészhelyzeti" opció.\n' +
      'Az automata gépeket a saját darálójukhoz kalibrálják; a bolti, túl finomra őrölt kávé hosszabb távon eldugíthatja és tönkreteheti a rendszert.\n' +
      'Lehetőség szerint maradjon a szemes kávénál a gép élettartama érdekében.',
  },
  {
    category: 'szerviz',
    question: 'Milyen típusú kávégépekkel foglalkoznak?',
    answer:
      'Szervizünk elsősorban az automata (szemes kávés) és a professzionális karos eszpresszógépek specialistája.\n' +
      'A leggyakoribb márkák, amikhez gyári alkatrészbázissal és rutinnal rendelkezünk:\n' +
      '<b>WMF, Saeco, Philips, Jura, Krups, DeLonghi, Gaggia, Nivona, Bosch.</b><br><br>\n' +
      '<b>Fontos:</b> Áruházláncok által forgalmazott „saját márkás" készülékek, illetve a hagyományos „Szarvasi" típusú kommersz kávéfőzők javítását technikai okokból nem vállaljuk.<br><br>\n' +
      '<b>Karos gépek:</b> Kizárólag vendéglátóipari és „prémium otthoni" karos gépek javítását, felújítását és pontos beállítását végezzük.',
  },
  {
    category: 'szerviz',
    question: 'Hol tudok parkolni? Fizetős az övezet?',
    answer:
      'Tudjuk, hogy egy kávégép cipelése nem leányálom, ezért jó hírünk van: átvételi pontunk előtt közvetlen és ingyenes parkolási lehetőség várja a ki- és berakodás idejére!<br><br>\n' +
      '<b>Címünk:</b> 1221 Budapest, Kossuth Lajos utca 93. (közvetlenül a Tóth József utcai körforgalomnál, a „Borász szobornál").<br><br>\n' +
      '<b>Tipp:</b> Nyugodtan álljon meg a bejáratunk (barna vasajtó) előtti területen, így csak pár lépés a szerviz.\n' +
      'Ha végképp nincs ideje bejönni, vegye igénybe a kényelmes „háztól házig" futárszolgálatunkat!',
  },
  {
    category: 'szerviz',
    question: 'Mennyibe kerül a javítás? Van bevizsgálási díj?',
    answer:
      'Igen, a készülék átvételekor bevizsgálási díjat kérünk, amely kaucióként szolgál.\n' +
      'Jó hír: amennyiben megrendeli a javítást, ezt az összeget teljes egészében beszámítjuk a végszámlába!<br><br>\n' +
      '<b>A folyamat:</b> Kollégáink szétszerelik a gépet, majd egy pontos állapotfelmérés után telefonon egyeztetnek Önnel a várható költségekről.\n' +
      'Ön dönt: ha kéri a javítást, munkához látunk; ha nem tartja gazdaságosnak, a bevizsgálási díj ellenében visszaadjuk a készüléket.\n' +
      'Nincsenek további rejtett költségek, csak abban az esetben dolgozunk, ha Ön rábólint az árajánlatra.',
  },
  {
    category: 'szerviz',
    question: 'Mennyi garanciát vállalnak a javításra?',
    answer:
      'Használt készülékek esetén a gyári új garanciával azonos feltételeket nem tudunk biztosítani, de maximálisan felelősséget vállalunk a munkánkért.\n' +
      'A beépített gyári alkatrészekre a forgalmazó által biztosított garancia érvényes.<br><br>\n' +
      '<b>Extra biztonság:</b> Egy 7 naptári napos „megfigyelési időszakot" biztosítunk.\n' +
      'Ha az eredeti hiba ezen belül ismételten jelentkezik, a javítást soron kívül és díjmentesen ismételten elvégezzük.<br><br>\n' +
      '<b>Fontos:</b> A garancia rendeltetésszerű használat és megfelelő karbantartás (pl. rendszeres vízkőoldás) mellett él.\n' +
      'Fizikai sérülés vagy korábbi, szakszerűtlen szerelés esetén nem tudunk garanciát vállalni.',
  },
  {
    category: 'szerviz',
    question: 'Még gyári garanciás a gépem. Meg tudják javítani?',
    answer:
      'Ha készüléke még a vásárláskor kapott gyártói garanciaidőn belül van, javasoljuk a hivatalos márkaszerviz felkeresését az ingyenes javítás érdekében.<br><br>\n' +
      '<b>Figyelem:</b> Amennyiben mi bontjuk meg a készüléket, a gyári garancia elvész.\n' +
      'Ilyen gépet csak a megrendelő kifejezett kérésére és felelősségére javítunk.\n' +
      'Az ebből fakadó garanciavesztésért szervizünk nem tud felelősséget vállalni.',
  },
  {
    category: 'bérlés',
    question: 'Rendezvényre vagy irodába szeretnék kávégépet bérelni. Van rá lehetőség?',
    answer:
      'Természetesen! Kínálatunkban szerepelnek alkalmi (pár napos rendezvényre szóló) és tartós irodai bérleti konstrukciók is.\n' +
      'Irodai bérlés esetén a havidíj tartalmazza a rendszeres karbantartást, igény esetén a szükséges kávémennyiséget és a szervizhátteret is, így Önnek csak a kávézás élményével kell foglalkoznia.<br><br>\n' +
      'Kérjen kollégáinktól egyedi árajánlatot az elérhetőségeink valamelyikén!<br><br>\n' +
      '<b>Próbaidőszak:</b> Tartós bérlet előtt lehetőséget biztosítunk tesztidőszakra, hogy meggyőződhessen a gép és a kávé minőségéről.\n' +
      '<b>Fontos!</b> A tesztidőszak nem ingyenes, viszont nem vonatkozik rá semmilyen hosszú távú szerződéses kötelezettség vagy elköteleződés.',
  },
  {
    category: 'bérlés',
    question: 'Karos gépet szeretnék bérelni.',
    answer:
      'Sajnos karos gépek bérbeadásával nem foglalkozunk.\n' +
      'Kizárólag <b>WMF és Jura</b> típusú (vízhálózatra is köthető) teljesen automata kávégépekkel dolgozunk, melyek az espressón kívül cappuccino, latte és forró csoki készítésére is alkalmasak, legyen szó irodáról, kávézóról, étteremről vagy hotelről.',
  },
  {
    category: 'termékek',
    question: 'Milyen kávét ajánlanak a gépekhez? Lehet Önöknél vásárolni?',
    answer:
      'Igen, nálunk nemcsak gépet, hanem válogatott, frissen pörkölt szemes kávét is talál!\n' +
      'Az általunk kínált kávék összetételét kifejezetten automata és karos gépekre teszteltük, így garantáljuk a sűrű krémet (crema) és a telt ízt.\n' +
      'Szívesen segítünk kiválasztani az ízléséhez leginkább passzoló pörkölést, legyen szó csokis-mogyorós karakterről vagy gyümölcsösebb aromákról.<br><br>\n' +
      '<b>Fontos!</b> Csak webes megrendelés esetén tudja a kívánt terméket átvenni, klasszikus boltként nem üzemelünk.<br>\n' +
      '<b>Átvételi pont nyitvatartása:</b> Hétfőtől péntekig 09:00-tól 16:30-ig.<br>\n' +
      '<b>Cím:</b> 1221 Budapest, Kossuth Lajos utca 93. (közvetlenül a Tóth József utcai körforgalomnál, a „Borász szobornál").<br><br>\n' +
      '<b>Megjegyzés:</b> Amennyiben nem tartózkodunk a helyszínen, kérjük, hívja egyeztetés céljából a kihelyezett táblán lévő telefonszámot!',
  },
  {
    category: 'termékek',
    question: 'Vízkőoldót és zsírtalanító szert keresek. Önök árulnak ilyesmit?',
    answer:
      'Igen, készleten tartunk professzionális, gyári minőségű vízkőoldó folyadékokat és zsírtalanító tablettákat.<br><br>\n' +
      '<b>Kérjük, NE használjon ecetet!</b> Az ecet roncsolhatja a gép belső tömítéseit és alumínium alkatrészeit, ráadásul az íze is benne maradhat a rendszerben.\n' +
      'A nálunk kapható vegyszerek kíméletesen, de hatékonyan tisztítanak, megőrizve a kávégép élettartamát.<br><br>\n' +
      '<b>Átvétel:</b> 1221 Budapest, Kossuth Lajos utca 93., hétfőtől péntekig 09:00–16:30.',
  },
  {
    category: 'karbantartas',
    question: 'Mit tegyek, ha nagyon kemény nálunk a víz?',
    answer:
      'Dél-Budapest nagy részén és az azt körbevevő agglomerációban sajnos kemény az ivóvíz, ami a kávégépek legnagyobb ellensége.\n' +
      'Megoldásként beépíthető vízlágyítót vagy külső vízlágyító kancsókat javaslunk, amik kiszűrik a vízkövet okozó ásványi anyagokat.<br><br>\n' +
      'Továbbá fontos tudni, hogy a készülékek nem tudják maguktól megállapítani a vízkeménységet (bár néhány típusnál ez manuálisan megadható), ezért ne várja meg az automatikus figyelmeztetést!\n' +
      'Napi 2–4 adag kávé esetén is <b>legalább 2 havonta vízkőmentesítsen</b>, akkor is, ha azt a készülék még nem kéri.\n' +
      'Amennyiben rendszeresen használják a gőzfunkciót (például cappuccino készítéséhez), úgy <b>havonta</b> javasolt a vízkőmentesítés.\n' +
      'A kávé készítéséhez forró víz kell, a habosításhoz viszont gőz, ami sokkal intenzívebb vízkőképződést okoz!',
  },
  {
    category: 'karbantartas',
    question: 'Alkatrészt is árulnak, ha magam szeretném megjavítani a gépem?',
    answer:
      'Alapvetően szervizszolgáltatást nyújtunk.\n' +
      'Alkatrészek értékesítését műszaki okok miatt nem vállaljuk, és azok otthoni beépítését sem javasoljuk.\n' +
      'A készülék további károsodásának elkerülése érdekében javasoljuk a szakszerű szervizelést.',
  },
];

export function getFaqByCategory(category: string): FaqItem[] {
  return gyikData.filter((f) => f.category === category);
}

export function getAllFaqCategories(): string[] {
  return [...new Set(gyikData.map((f) => f.category))];
}
