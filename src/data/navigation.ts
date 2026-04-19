export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  highlight?: boolean;
}

export const navLeft: NavItem[] = [
//  { label: 'Rendelésfelvétel', href: '/webshop/', highlight: true },
  { label: 'Kávéink', href: '/kaveeink/' },
  { label: 'Kávégép-bérlés', href: '/kavegepberles/' },
  { label: 'Rólunk', href: '/rolunk/' },
  { label: 'WMF', href: '/wmf/' },
];

export const navRight: NavItem[] = [
  { label: 'Blog', href: '/blog/' },
  { label: 'Szerviz', href: '/szerviz/' },
  { label: 'Kávégépbérlés Budapest', href: '/kavegepberles-budapest/' },
  { label: 'GYIK', href: '/gyik/' },
  { label: 'Kapcsolat', href: '/kapcsolat/' },
];
