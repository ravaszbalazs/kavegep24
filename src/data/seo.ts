export interface SeoData {
  title: string;
  description: string;
  keywords: string;
  ogUrl: string;
  ogImage: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  robots?: string;
  // AEO - Answer Engine Optimization
  aeoFaq?: { question: string; answer: string }[];
  aeoOrganization?: {
    name: string;
    url: string;
    logo: string;
    telephone: string;
    email: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  aeoService?: {
    name: string;
    description: string;
    provider: string;
    areaServed: string;
  };
}

export const seoData: Record<string, SeoData> = {
  home: {
    title: 'Kávégép24 – Kávégép bérlés, értékesítés és szerviz Budapest',
    description:
      'Kávégép bérlés és értékesítés cégeknek és magánszemélyeknek. Prémium kávék, kávégép szerviz, hozom-viszem szolgáltatás. Ajánlatkérés gyorsan és egyszerűen.',
    keywords:
      'kávégép bérlés, kávégép értékesítés, kávégép szerviz, kávé vásárlás, kávégép Budapest, kávégép bérlés cégeknek, WMF kávégép',
    ogUrl: 'https://kavegep24.hu/',
    ogImage: 'https://kavegep24.hu/images/og-home.jpg',
    robots: 'index, follow',
    aeoFaq: [
      {
        question: 'Milyen kávégépeket bérelhet cégem?',
        answer:
          'Irodai és vendéglátóipari kávégépeket, köztük WMF, DeLonghi és Jura modelleket bérelünk tele körűen beüzemelve, rendszeres szervizzel és kávé utánpótlással.',
      },
      {
        question: 'Van-e hozom-viszem kávégép szerviz Budapesten?',
        answer:
          'Igen, Budapesten és vonzáskörzetében kávégépet elviszünk, megjavítunk és visszahozzuk. Bejelentkezés után általában 1–2 munkanapon belül elvégezzük a javítást.',
      },
      {
        question: 'Hol lehet megvásárolni prémium kávét online?',
        answer:
          'Webshopunkban széles választékban kínálunk szemes, őrölt és kapszulás kávékat elsőrangú pörköldéktől.',
      },
    ],
    aeoOrganization: {
      name: 'Kávégép24',
      url: 'https://kavegep24.hu',
      logo: 'https://kavegep24.hu/images/logo.png',
      telephone: '+36-1-234-5678',
      email: 'info@kavegep24.hu',
      address: {
        streetAddress: '',
        addressLocality: 'Budapest',
        postalCode: '1000',
        addressCountry: 'HU',
      },
    },
  },

  kavegepberles: {
    title: 'Kávégép bérlés cégeknek – Kávégép24',
    description:
      'Irodai kávégép bérlés cégeknek teljes körű kávéellátással. Nincs beruházási költség, rugalmas szerződés, rendszeres szerviz és kávé utánpótlás.',
    keywords:
      'kávégép bérlés cégeknek, irodai kávégép bérlés, kávégép bérlet, kávégép Budapest, kávégép lease',
    ogUrl: 'https://kavegep24.hu/kavegepberles/',
    ogImage: 'https://kavegep24.hu/images/og-berles.jpg',
    robots: 'index, follow',
    aeoFaq: [
      {
        question: 'Mennyi idő alatt szállítják ki a bérelt kávégépet?',
        answer: 'Megállapodástól függően általában 3–5 munkanapon belül kiszállítjuk és beüzemeljük a kávégépet.',
      },
      {
        question: 'Mi van benne a kávégép bérletben?',
        answer:
          'A bérleti díjba beletartozik a kávégép, szállítás, beüzemelés, rendszeres karbantartás és hibaelhárítás.',
      },
    ],
    aeoService: {
      name: 'Kávégép bérlés cégeknek',
      description: 'Irodai kávégép bérlés teljes körű kávéellátással, szervizzel és kávé utánpótlással.',
      provider: 'Kávégép24',
      areaServed: 'Budapest, Magyarország',
    },
  },

  kavegepberlesBudapest: {
    title: 'Kávégép bérlés Budapest – Kávégép24',
    description:
      'Kávégép bérlés Budapesten és vonzáskörzetében. Gyors kiszállítás, prémium gépek, teljes körű szerviz.',
    keywords:
      'kávégép bérlés Budapest, budapesti kávégép bérlés, kávégép bérlet Budapest, kávégép kölcsönzés Budapest',
    ogUrl: 'https://kavegep24.hu/kavegepberles-budapest/',
    ogImage: 'https://kavegep24.hu/images/og-berles-budapest.jpg',
    robots: 'index, follow',
  },

  kaveeink: {
    title: 'Kávéink – Prémium szemes, őrölt és kapszulás kávék | Kávégép24',
    description:
      'Prémium olasz kávék irodáknak és rendezvényekre. Szemes, őrölt, kapszulás és instant választék – kávégép bérlés mellé vagy önállóan. Gimoka Gruppo partner.',
    keywords:
      'prémium kávé, szemes kávé, őrölt kávé, kapszulás kávé, kávé irodának, kávé rendezvényre, kávégép bérlés kávéval, Gimoka kávé, Nespresso kompatibilis kapszula, olasz kávé Budapest',
    ogUrl: 'https://kavegep24.hu/kaveeink/',
    ogImage: 'https://kavegep24.hu/images/og-kaveink.jpg',
    robots: 'index, follow',
    aeoFaq: [
      {
        question: 'Milyen kávékat kínál a Kávégép24?',
        answer:
          'Szemes, őrölt, kapszulás és instant kávékat kínálunk – elsősorban a Gimoka Gruppo termékcsaládjából, amely Olaszország második legnagyobb kávégyára. Nespresso® és Dolce Gusto® kompatibilis kapszulák is elérhetők.',
      },
      {
        question: 'Rendezvényre is lehet kávégépet és kávét bérelni?',
        answer:
          'Igen. Rendezvényszervező cégeknek komplett megoldást kínálunk: kiszállítjuk és beüzemeljük a kávégépet a helyszínen, mellé prémium kávét biztosítunk. Egynapos eseménytől hosszabb rendezvénysorozatig vállaljuk.',
      },
      {
        question: 'Lehet kávét rendelni kávégép bérlés nélkül is?',
        answer:
          'Igen, kávét önállóan is lehet rendelni. Kávégép bérlési csomag mellé azonban kedvezőbb feltételekkel tudjuk biztosítani a rendszeres kávéutánpótlást.',
      },
    ],
    aeoService: {
      name: 'Prémium kávé értékesítés és kávégép bérlés',
      description:
        'Szemes, őrölt és kapszulás prémium kávék irodáknak és rendezvényekre, kávégép bérlési lehetőséggel.',
      provider: 'Kávégép24',
      areaServed: 'Budapest, Magyarország',
    },
  },

  rolunk: {
    title: 'Rólunk – Kávégép24',
    description:
      'Megismerheti a Kávégép24 csapatát, történetét és értékeit. Szenvedélyünk a minőségi kávé és a megbízható kiszolgálás.',
    keywords: 'Kávégép24 rólunk, kávégép kereskedő Budapest, kávégép szerviz csapat',
    ogUrl: 'https://kavegep24.hu/rolunk/',
    ogImage: 'https://kavegep24.hu/images/og-rolunk.jpg',
    robots: 'index, follow',
  },

  wmf: {
    title: 'WMF kávégépek – Kávégép24 hivatalos partner',
    description:
      'WMF professzionális kávégépek értékesítése és szervize. Irodai és vendéglátóipari megoldások WMF márkától.',
    keywords: 'WMF kávégép, WMF professzionális kávégép, WMF szerviz, WMF Budapest',
    ogUrl: 'https://kavegep24.hu/wmf/',
    ogImage: 'https://kavegep24.hu/images/og-wmf.jpg',
    robots: 'index, follow',
  },

  szerviz: {
    title: 'Kávégép szerviz Budapest – Hozom-viszem | Kávégép24',
    description:
      'Professzionális kávégép szerviz Budapesten. Hozom-viszem szolgáltatás, gyors javítás, minden márkához.',
    keywords:
      'kávégép szerviz Budapest, kávégép javítás, hozom-viszem kávégép szerviz, kávégép karbantartás',
    ogUrl: 'https://kavegep24.hu/szerviz/',
    ogImage: 'https://kavegep24.hu/images/og-szerviz.jpg',
    robots: 'index, follow',
    aeoFaq: [
      {
        question: 'Milyen kávégépeket szervizelnek?',
        answer:
          'Minden főbb márkát szervizelünk: DeLonghi, Jura, WMF, Krups, Philips, Melitta, Siemens, Gaggia és még sok más gyártó gépeit.',
      },
      {
        question: 'Mennyi ideig tart a kávégép javítás?',
        answer:
          'Egyszerűbb javítások esetén 1–3 munkanap, összetettebb problémáknál 5–7 munkanap. Hozom-viszem szolgáltatással kényelmes és gyors.',
      },
    ],
    aeoService: {
      name: 'Kávégép szerviz hozom-viszem',
      description: 'Kávégép javítás és karbantartás Budapest és vonzáskörzetében, hozom-viszem szolgáltatással.',
      provider: 'Kávégép24',
      areaServed: 'Budapest, Magyarország',
    },
  },

  gyik: {
    title: 'Gyakran ismételt kérdések – Kávégép24',
    description:
      'Válaszok a leggyakrabban feltett kérdésekre a kávégép bérlésről, szervizről, kávé vásárlásról és a Kávégép24 szolgáltatásairól.',
    keywords: 'kávégép GYIK, kávégép kérdések, kávégép bérlés információ, kávégép szerviz kérdések',
    ogUrl: 'https://kavegep24.hu/gyik/',
    ogImage: 'https://kavegep24.hu/images/og-gyik.jpg',
    robots: 'index, follow',
  },

  kapcsolat: {
    title: 'Kapcsolat – Kávégép24',
    description:
      'Vegye fel velünk a kapcsolatot! Ajánlatkérés, szervizbejelentés, kávégép bérlés érdeklődés.',
    keywords: 'Kávégép24 kapcsolat, kávégép ajánlatkérés, kávégép szerviz bejelentés',
    ogUrl: 'https://kavegep24.hu/kapcsolat/',
    ogImage: 'https://kavegep24.hu/images/og-kapcsolat.jpg',
    robots: 'index, follow',
  },

  adatvedelem: {
    title: 'Adatvédelmi tájékoztató – Kávégép24',
    description:
      'A Kávégép24 adatvédelmi tájékoztatója. Tájékozódjon személyes adatai kezeléséről, jogairól és a GDPR szerinti adatkezelési elvekről.',
    keywords: 'adatvédelem, GDPR, adatkezelési tájékoztató, személyes adatok, Kávégép24',
    ogUrl: 'https://kavegep24.hu/adatvedelem/',
    ogImage: 'https://kavegep24.hu/images/og-home.jpg',
    robots: 'noindex, follow',
  },

  aszf: {
    title: 'Általános Szerződési Feltételek – Kávégép24',
    description:
      'A Kávégép24 Általános Szerződési Feltételei. Megrendelés, bérlés, szerviz és fizetési feltételek részletesen.',
    keywords: 'ÁSZF, általános szerződési feltételek, kávégép bérlés feltételek, Kávégép24 szerződés',
    ogUrl: 'https://kavegep24.hu/aszf/',
    ogImage: 'https://kavegep24.hu/images/og-home.jpg',
    robots: 'noindex, follow',
  },

  blog: {
    title: 'Blog – Kávé és kávégép tippek | Kávégép24',
    description:
      'Hasznos cikkek kávéról, kávégépekről, tippek a tökéletes kávéhoz és a kávégép karbantartáshoz.',
    keywords: 'kávé blog, kávégép tippek, kávézás, kávékészítés, kávégép karbantartás',
    ogUrl: 'https://kavegep24.hu/blog/',
    ogImage: 'https://kavegep24.hu/images/og-blog.jpg',
    robots: 'index, follow',
  },
};
