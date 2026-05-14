export const kaveinkData = {
  hero: {
    eyebrow: 'Kávéink',
    title: 'Prémium kávé,<br><b>minden igényhez</b>',
    subtitle:
      'Gondosan válogatott szemes kávék – olasz mesterektől, világszínvonalú pörköléssel.<br>Irodáknak, rendezvényekre és otthonra egyaránt.',
  },

  intro: {
    title: 'A jó kávéhoz <b>két dolog kell</b>',
    text: `
      Egy megbízható gép és egy minőségi kávé.<br>
      Mi mindkettőt biztosítjuk – ezért ha tőlünk bérel kávégépet, nem kell tovább keresgélnie.<br>
      <b>A kávéellátásról mi gondoskodunk.</b>
    `,
  },

  coffeeTypes: [
    {
      icon: 'bean',
      title: 'Szemes kávé',
      description:
        'A friss élmény alapja.<br>Darálás előtt az aromák teljes mértékben megmaradnak – profi automata gépekhez a legjobb választás.',
      badge: 'Irodákba ajánlott',
    },
    {
      icon: 'grind',
      title: 'Őrölt kávé',
      description:
        'Azonnal használható, könnyen adagolható megoldás.<br>Karos kávégépekhez és filteres főzőkhöz egyaránt alkalmas.<br><b>Csak rendelésre!</b>',
      badge: null,
    },
    {
      icon: 'capsule',
      title: 'Kapszulás kávé',
      description:
        'Nespresso<sup>®</sup> és Dolce Gusto<sup>®</sup> kompatibilis kapszulák.<br>Kényelmes, gyors, egységes minőség – rendezvényekre és irodákba tökéletes. <br><b>Csak rendelésre!</b>',
      badge: 'Rendezvényekre ajánlott',
    },
  ],

  brand: {
    eyebrow: 'Minőség a forrástól',
    title: 'Partnereink: <b>Olasz kávémesterek</b>',
    text: `Kávéink elsősorban olasz és holland kávépörkölők termékcsaládjaiból kerülnek ki.<br>
    Ezek Európában kiemelkedő minőségükről híres üzemek, melyek folyamatosan fenntartott, egyenletesen kiváló ízvilágot biztosítanak termékeikben.<br>
    Évente közel 100 000 tonna zöldkávét dolgoznak fel, a cserjék szüretelésétől a pörkölésen és csomagoláson át egészen az értékesítésig`,
    highlights: [
      { label: '100 000', sub: 'tonna feldolgozott zöldkávé évente' },
      { label: '#2', sub: 'Olaszország második legnagyobb kávégyára' },
      { label: '10 év+', sub: 'együttműködés a Kávégép24-gyel' },
    ],
    products: [
      'Caffé SI',
      'Espresso Italia',
      'Gran Caffè Garibaldi',
    ],
  },

  bundleSection: {
    eyebrow: 'Egy csomag – minden benne',
    title: 'Kávégép bérlés <b>kávéval együtt</b>',
    text: `
      Nem kell külön foglalkoznia a kávébeszerzéssel.<br>
      Ha tőlünk bérel kávégépet, a rendszeres <b>kávéutánpótlást is biztosítjuk</b> – igény szerint.<br>
      Egyetlen kapcsolattartó, egyetlen számla, nulla gond.
    `,
    items: [
      {
        title: 'Prémium csomag',
        forWhom: 'Közepes irodáknak (15–50 fő)',
        includes: [
          'Professzionális automata kávégép',
          'Beüzemelés és betanítás',
          'Negyedéves karbantartás',
          'Prioritásos szerviz',
          '<b>Kávé utánpótlás opció</b>',
        ],
        highlight: true,
      },
      {
        title: 'Vállalati csomag',
        forWhom: 'Nagy irodáknak (50+ fő)',
        includes: [
          'Nagy kapacitású kávégép',
          'Beüzemelés és betanítás',
          'Havi karbantartás',
          '24/7 support',
          '<b>Rendszeres kávé utánpótlás</b>',
          'Dedikált kapcsolattartó',
        ],
        highlight: false,
      },
    ],
    cta: { label: 'Bérlési csomagok', href: '/kavegepberles/' },
  },

  eventSection: {
    eyebrow: 'Rendezvényszervező cégeknek',
    title: 'Tökéletes kávézás <b>minden eseményen</b>',
    text: `
      Egy konferencia, workshop, tréning vagy gálavacsora csak akkor igazán emlékezetes,<br>
      ha a kávé is méltó az alkalomhoz.<br>
      <br>
      <b>Rendezvényszervező cégeknek komplett megoldást kínálunk:</b><br>
      professzionális kávégépet szállítunk és üzemelünk be a helyszínen,<br>
      mellé pedig prémium kávét biztosítunk – akár többféle választékban.<br>
      <br>
      Önnek csak annyi a dolga, hogy megadja az időpontot és a vendégek várható létszámát.<br>
      <b>A többit mi intézzük.</b>
    `,
    benefits: [
      {
        title: 'Szakszerű telepítés',
        text: 'A gépet a helyszínen üzemeljük be – Önnek nem kell cipellni vagy beállítgatni semmit.',
      },
      {
        title: 'Megfelelő kapacitás',
        text: 'Nagy létszámú rendezvényekre nagy kapacitású gépeket biztosítunk – akár többet is egyszerre.',
      },
      {
        title: 'Prémium kávé mellé',
        text: 'Szemes, kapszulás vagy őrölt kávé – az esemény jellegéhez igazítva, minőségi olasz választékból.',
      },
      {
        title: 'Emeli a brand értékét',
        text: 'Egy profi kávégép esztétikus megjelenést ad – és azt üzeni a vendégeknek: ez a cég odafigyel a részletekre.',
      },
    ],
    cta: { label: 'Ajánlatkérés rendezvényre', href: '/kapcsolat/' },
  },

  specialty: {
    eyebrow: 'Kávéfilozófiánk',
    title: 'Nem mindegy, <b>mit iszik</b>',
    points: [
      {
        title: 'Arabica alapok',
        text:
          'Kávéink döntő része válogatott arabica babokból készül – alacsonyabb keserűség, gazdagabb aromavilág, kellemesebb utóíz.',
      },
      {
        title: 'Egyedi pörkölés',
        text:
          'A specialty kávékat egyedi pörkölési módszerekkel dolgozzák fel, hogy minden kávénak saját jellegzetes ízvilága legyen.',
      },
      {
        title: 'Adalékanyagmentes',
        text:
          'Sem ízesítők, sem adalékok – az íz és az illat kizárólag a kávébab eredeti aromájából fakad.',
      },
      {
        title: 'Koffeinmentes változat is',
        text:
          'Azoknak, akik az esti irodai túlórán vagy allergiás okok miatt kerülik a koffeint, koffeinmentes variációkat is kínálunk.',
      },
    ],
  },

  faq: [
    {
      q: 'Csak kávégép bérléshez lehet kávét rendelni Önöktől?',
      a: 'Nem. Kávét önállóan is lehet rendelni tőlünk – gép nélkül is. Ugyanakkor ha bérlési csomagunk mellé veszi igénybe a kávéutánpótlást, kedvezőbb feltételekkel tudjuk biztosítani.',
    },
    {
      q: 'Milyen mennyiségtől rendelhetők a kávék?',
      a: 'Kis mennyiségektől kezdve vállalati nagykereskedési tételekig egyaránt tudunk kiszolgálni. Pontos ajánlathoz kérjük, vegye fel velünk a kapcsolatot.',
    },
    {
      q: 'Rendezvényre is tudnak kávégépet és kávét biztosítani?',
      a: 'Igen, ez az egyik legkeresettebb szolgáltatásunk. Kiszállítjuk és beüzemeljük a gépet, mellé prémium kávét biztosítunk – egynapos rendezvénytől hosszabb eseménysorozatig.',
    },
    {
      q: 'Nespresso kompatibilis kapszulák is elérhetők?',
      a: 'Igen. Termékpalettánkban Nespresso® és Dolce Gusto® kompatibilis kapszulák is szerepelnek.',
    },
  ],
};
