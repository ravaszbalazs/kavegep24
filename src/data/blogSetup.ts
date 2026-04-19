export const blogSetup = {
  // Megjelenítési mód: 3 vagy 4 oszlop
  columns: 3 as 3 | 4,
  // Oldalanként megjelenő bejegyzések száma
  postsPerPage: 9,
  // Dátum formátum
  dateLocale: 'hu-HU',
  dateFormat: {
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
  },
  // Olvasási sebesség (szó/perc)
  wordsPerMinute: 200,
  // Alapértelmezett OG kép
  defaultOgImage: '/images/og-blog.jpg',
  // Szerző oldal elérési útja
  authorBasePath: '/blog/szerzo/',
};
