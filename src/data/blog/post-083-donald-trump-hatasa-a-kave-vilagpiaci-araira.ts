import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'donald-trump-hatasa-a-kave-vilagpiaci-araira',
  title: 'Donald Trump hatása a kávé világpiaci áraira',
  slug: 'donald-trump-hatasa-a-kave-vilagpiaci-araira',
  excerpt:
    'Az időjárás és a klímaváltozás mellé belépett egy új tényező a kávé drágulásában: a politika.<br>Modellszámítással mutatjuk meg, hogyan hatottak Trump vámjai a magyar kávéárakra.',
  content: `
    <h2>Az év végére a kávé luxuscikk lesz?</h2>
    <p>Azzal szembesültünk, hogy már nem csak az időjárás és az éghajlati változások okán emelkednek a kávé világpiaci árai.<br>
    Belépett egy <b>új tényező – a politika</b>.<br>
    Első olvasatként legyinthetünk: „Ekkora blődség!"<br>
    De mi van, ha mégis igaz? Mi köze van a politikának a kávéhoz?<br>
    Utánajártunk, és megpróbáljuk levezetni, illetve modellezni.</p>

    <h2>Rövid háttér – mi történt?</h2>
    <p>2025 nyarán az Egyesült Államok <b>50%-os vámtételt</b> vezetett be többek között a brazil zöldkávéra.<br>
    Ennek hatására az arabica határidős árak jelentősen emelkedtek – egyes időszakokban <b>~50%-os növekedéssel</b>.<br>
    Az amerikai kiskereskedelmi ár is emelkedett (év/év ~20% adatok szerint).<br>
    A brazil exportok átstrukturálódtak: kevesebb került az USA piacára, több keresett más piacokat – köztük az európait.<br>
    Az EU 2023-ban ~2,7 millió tonna kávét importált harmadik országokból, így az USA vámpolitikája globálisan is érezteti hatását.</p>

    <h2>A modell – feltételezések</h2>
    <ul>
      <li><b>Zöldkávé árnövekedés (világpiac):</b> a határidős/spot árak +50%-kal nőttek a vámok hatására</li>
      <li><b>Magyar kiskereskedelmi referencia-ár:</b> 2 500 HUF/kg (reprezentatív érték; a tényleges sáv ≈ 1 800–3 200 HUF/kg)</li>
      <li><b>Zöldkávé aránya a végárban:</b> 40% (konzervatív) vagy 60% (pesszimista feltételezés)</li>
      <li><b>Átáradó hatás (pass-through):</b> mennyit hárít át a pörkölő/kereskedő – konzervatív: 70%, pesszimista: 100%</li>
    </ul>

    <h2>Szcenárió A – mérsékelt hatás (konzervatív)</h2>
    <ul>
      <li>Kiinduló kiskerár: <b>2 500 HUF/kg</b></li>
      <li>Zöldkávé aránya: 40% → zöldkávé-költés = 1 000 HUF/kg</li>
      <li>Zöldkávé ára nő +50% → többlet = +500 HUF/kg</li>
      <li>Pass-through 70% → fogyasztói többlet ≈ 350 HUF/kg</li>
      <li>Új kiskerár ≈ <b>2 850 HUF/kg → +14% növekedés</b></li>
    </ul>

    <h2>Szcenárió B – erőteljes hatás (pesszimista)</h2>
    <ul>
      <li>Kiinduló kiskerár: <b>2 500 HUF/kg</b></li>
      <li>Zöldkávé aránya: 60% → zöldkávé-költés = 1 500 HUF/kg</li>
      <li>Zöldkávé ára nő +50% → többlet = +750 HUF/kg</li>
      <li>Pass-through 100% → fogyasztói többlet = +750 HUF/kg</li>
      <li>Új kiskerár ≈ <b>3 250 HUF/kg → +30% növekedés</b></li>
    </ul>

    <p>Reális, számított határok: <b>kb. +10% és +30% közötti árszintemelkedés</b> a magyar kiskereskedelmi árakon, attól függően, mennyi a zöldkávé súlya a költségszerkezetben és milyen mértékű az átáramlás.</p>

    <h2>Mire kell még figyelni?</h2>
    <ul>
      <li><b>Időjárás és hozamok</b> (Brazília: szárazság, fagyok) önmagukban is produkálhatnak árvolatilitást – a vámtól független hatásokat nem szabad alulbecsülni</li>
      <li><b>Árfolyamok (USD/HUF, EUR/HUF):</b> a zöldkávé dollárban jegyzett – a forint gyengülése további nyomást gyakorol a magyar árakra</li>
      <li><b>Piaci átpozícionálás:</b> az európai pörkölők partnereket váltanak (Kolumbia, Etiópia, Vietnam stb.), ami részben mérsékelheti a hatást, de rövid távon szűkösséget és prémiumot okozhat</li>
      <li><b>Kiskereskedelmi döntések:</b> nagy láncoknál lassabb az azonnali áthárítás; specialty roastereknél gyorsabban jelenik meg az áremelkedés</li>
    </ul>
  `,
  author: 'kajor-roland',
  publishedAt: '2025-09-22',
  updatedAt: '2025-09-22',
  thumbnail: '/images/kave-083-kavegep24.webp',
  ogImage: '/images/blog/og-donald-trump-hatasa-a-kave-vilagpiaci-araira.jpg',
  categories: ['kavekultura'],
  tags: ['kávé drágulás', 'Trump vám', 'kávé világpiac', 'kávé ár 2025', 'arabica ár', 'kávé politika'],
  featured: false,
  published: true,
  seo: {
    title: 'Donald Trump hatása a kávé világpiaci áraira | Kávégép24',
    description:
      'Hogyan hatottak Trump 50%-os vámjai a kávé globális árára és a magyar kiskereskedelmi árakra? Modellszámítással mutatjuk be a két szcenáriót – +14% vagy +30%.',
    keywords:
      'Trump vám kávé, kávé drágulás 2025, arabica ár emelkedés, kávé világpiac 2025, kávé ár Magyarország, Trump büntetővám kávé',
  },
};

export default post;
