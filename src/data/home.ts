export const homeData = {
  hero: {
    title: 'Kávé, amit <b>szeretsz</b>.<br>Gép, ami <b>működik</b>.',
    subtitle:
      'Kávégép bérlés, értékesítés és szerviz cégeknek és magánszemélyeknek.<br>Prémium kávék, profi kiszolgálás.',
    cta: {
      primary: { label: 'Ajánlatkérés', href: '/kapcsolat/' },
      secondary: { label: 'Kávégép bérlés', href: '/kavegepberles/' },
    },
    image: '/images/hero-kavegep.jpg',
  },
  services: [
    {
      icon: 'coffee-machine',
      title: 'Kávégép <b>bérlés</b>',
      text: 'Irodai és vendéglátóipari kávégépek tartós és eseti bérlése akár rendezvényekre is. Rugalmas feltételek, teljeskörű kiszolgálás.',
      href: '/kavegepberles/',
    },
    {
      icon: 'coffee-bean',
      title: 'Prémium <b>kávéink</b>',
      text: 'Gondosan válogatott Robusta és Arabica kávék igényes választéka. Az ízletes reggeli kávétól az intenzív eszpresszóig.',
      href: '/kaveeink/',
    },
    {
      icon: 'wrench',
      title: 'Kávégép <b>szerviz</b>',
      text: 'Javítás és karbantartás, Budapesten. Gyors, pontos, megbízható – szinte minden márkához',
      href: '/szerviz/',
    },
    {
      icon: 'truck',
      title: 'Hozom-viszem<br><b>szolgáltatás</b>',
      text: 'Elviszük, megjavítjuk és visszahozzuk a kávégépét.<br>Minimális kellemetlenséggel.',
      href: '/szerviz/',
    },
  ],
  whyUs: {
    title: 'Miért válasszon <b>minket?</b>',
    items: [
      { label: 'Több mint 10 év tapasztalat', text: 'A kávéipar minden területén otthon vagyunk.' },
      { label: 'Gyors kiszállítás', text: 'Budapesten és vonzáskörzetében 1-2 munkanapon belül, előzetes egyeztetés alapján' },
      { label: 'Teljes körű szerviz', text: 'Megelőzéstől a javításig, mindenről gondoskodunk.' },
      { label: 'Rugalmas bérleti feltételek', text: 'Rövid és hosszú távú bérleti megoldások.' },
    ],
  },
  brands: ['WMF', 'DeLonghi', 'Jura', 'Krups', 'Melitta', 'Saeco', 'Philips', 'Gaggia'],
};
