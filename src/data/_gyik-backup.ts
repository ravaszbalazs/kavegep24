export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const gyikData: FaqItem[] = [
  {
    category: 'bérlés',
    question: 'Milyen szerződéses időtartamra lehet kávégépet bérelni?',
    answer:
      'Kínálunk 1 hónapos, 6 hónapos és 12+ hónapos bérleti megoldásokat is.<br>A hosszabb időtartamú bérletek esetén kedvezőbb havi díjakat tudunk ajánlani.',
  },
  {
    category: 'bérlés',
    question: 'Tartalmaz-e a bérleti díj kávét is?',
    answer:
      'Bérleti csomagjainktól függően lehetőség van kávé utánpótlással kombinált bérleti konstrukcióra is.<br>Kérjen személyre szabott ajánlatot!',
  },
  {
    category: 'bérlés',
    question: 'Mi történik, ha meghibásodik a bérelt kávégép?',
    answer:
      'Meghibásodás esetén 24–48 órán belül cserét vagy javítást biztosítunk.<br>A javítás/csere díja a bérleti díjba van kalkulálva.',
  },
  {
    category: 'szerviz',
    question: 'Milyen márkájú kávégépeket szervizelnek?',
    answer:
      'Minden főbb márkát szervizelünk: <b>DeLonghi, Jura, WMF, Krups, Philips, Melitta, Gaggia, Saeco, Nespresso</b> és sok más gyártó gépeit.',
  },
  {
    category: 'szerviz',
    question: 'Mennyi ideig tart a kávégép javítás?',
    answer:
      'Egyszerűbb javítások esetén <b>1–3 munkanap</b>, összetettebb problémáknál 5–7 munkanap.<br>Hozom-viszem szolgáltatással kényelmes és gyors.',
  },
  {
    category: 'szerviz',
    question: 'Van-e garanciája a javításnak?',
    answer:
      'Igen, minden általunk elvégzett javításra <b>3 hónap garanciát</b> vállalunk a felhasznált alkatrészekre és a munkára.',
  },
  {
    category: 'termékek',
    question: 'Milyen fizetési módokat fogadnak el?',
    answer:
      'Elfogadunk banki átutalást, bankkártyás fizetést és készpénzt is.<br>Cégek számára lehetőség van halasztott fizetési feltételekre is.',
  },
  {
    category: 'termékek',
    question: 'Vásárolhatok kávét online?',
    answer:
      'Igen, webshopunkban széles választékban kínálunk szemes, őrölt és kapszulás kávékat.<br>Egy bizonyos értékhatár felett ingyenes szállítással.',
  },
];

export function getFaqByCategory(category: string): FaqItem[] {
  return gyikData.filter((f) => f.category === category);
}

export function getAllFaqCategories(): string[] {
  return [...new Set(gyikData.map((f) => f.category))];
}
