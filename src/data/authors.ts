export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  photo: string;
  social: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const authors: Author[] = [
  {
    id: 'admin',
    name: 'Kávégép24 Szerkesztőség',
    slug: 'szerkesztoseg',
    role: 'Szerkesztő',
    bio: 'A Kávégép24 szerkesztőségének tagjai évek óta szenvedélyesen foglalkoznak a kávékultúrával és a kávégépek világával.<br>Célunk, hogy hasznos és érdekes tartalmakat osszunk meg olvasóinkkal.',
    photo: '/images/authors/szerkesztoseg.jpg',
    social: {
      facebook: 'https://facebook.com/kavegep24',
      instagram: 'https://instagram.com/kavegep24',
      linkedin: 'https://linkedin.com/company/kavegep24',
    },
  },
  {
    id: 'kajor-roland',
    name: 'Kajor Roland',
    slug: 'kajor-roland',
    role: 'Kávészakértő',
    bio: 'Roland szenvedélyes kávérajongó, aki évek óta foglalkozik espresso gépekkel és darálókkal.<br>Tapasztalatait szívesen osztja meg mindazokkal, akik az otthoni kávézás szintjét szeretnék emelni.',
    photo: '/images/authors/kajor-roland.jpg',
    social: {
      facebook: 'https://facebook.com/kajor.roland',
    },
  },
  {
    id: 'kovacs-peter',
    name: 'Kovács Péter',
    slug: 'kovacs-peter',
    role: 'Kávészakértő & Szerviz vezető',
    bio: 'Péter 15 éve foglalkozik kávégépek javításával és karbantartásával.<br>Megszámlálhatatlan kávégépet hozott már vissza életbe, és szívesen osztja meg tapasztalatait.',
    photo: '/images/authors/kovacs-peter.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/kovacs-peter',
      facebook: 'https://facebook.com/kovacs.peter',
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
