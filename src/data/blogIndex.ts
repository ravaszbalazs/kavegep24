import type { BlogPost } from './blogTypes';
import post001 from './blog/post-001-kavegep-tisztitas';
import post002 from './blog/post-002-irodai-kavegep-berles';
import post003 from './blog/post-003-kavedaralok-espresso-karos';
import post004 from './blog/post-004-kavekostolok-kisszotar';
import post005 from './blog/post-005-kavegep-berles-elonyei';
import post006 from './blog/post-006-kavegep-berles-tevhitek';
import post007 from './blog/post-007-kapraztasd-el-kozonsaged';
import post008 from './blog/post-008-az-olcso-az-draga';
import post009 from './blog/post-009-mi-kell-a-jo-kavehoz';
import post010 from './blog/post-010-kedvenc-mondataim-kaverol';
import post011 from './blog/post-011-kave-vilagnapja-2017';
import post012 from './blog/post-012-hogyan-keszul-az-instant-kave';
import post013 from './blog/post-013-miert-valasszon-minket';
import post014 from './blog/post-014-kaves-idezetek';
import post015 from './blog/post-015-kave-fogyasztas-egeszseges';
import post016 from './blog/post-016-kave-muvesz-szemszogbol';
import post017 from './blog/post-017-kavegep-berles-rendezvenyre';
import post018 from './blog/post-018-kave-vs-energiaital';
import post019 from './blog/post-019-6-teny-a-kaverol';
import post020 from './blog/post-020-igy-szolgald-fel-a-kavet';
import post021 from './blog/post-021-kavegep-kiheyezs-ingyen-garanciaval';
import post022 from './blog/post-022-daralos-kavefoezo';
import post023 from './blog/post-023-berlheto-kavegepek';
import post024 from './blog/post-024-employer-branding-es-a-kave';
import post025 from './blog/post-025-wmf-kavegep-hibauzenetek';
import post026 from './blog/post-026-bfc-kavegepek-elonyei';
import post027 from './blog/post-027-ki-fozi-a-legjobb-kavet';
import post028 from './blog/post-028-karos-kavegep';
import post029 from './blog/post-029-erdekessegek-a-kaverol';
import post030 from './blog/post-030-kavegep-berles-vagy-vasarlas';
import post031 from './blog/post-031-kavefogyasztasi-szokasok';
import post032 from './blog/post-032-kavegep-berles-folyamata';
import post033 from './blog/post-033-milyen-a-jo-irodai-kavegep';
import post034 from './blog/post-034-dizajnervizek-titka';
import post035 from './blog/post-035-a-vilag-legdragabb-kavei';
import post036 from './blog/post-036-jura-s8-kavegep-teszt';
import post037 from './blog/post-037-gimoka-kave';
import post038 from './blog/post-038-caffe-florian-velence';
import post039 from './blog/post-039-vilag-legizgalmasabb-kaveturai';
import post040 from './blog/post-040-kave-haboru-idejen';
import post041 from './blog/post-041-nespresso-kapszulak-dronokkal';
import post042 from './blog/post-042-vegejarja-a-forro-kave';
import post043 from './blog/post-043-delonghi-brad-pitt';
import post044 from './blog/post-044-eu-kaveimportja-nott';
import post045 from './blog/post-045-kavegep-karbantartas-tippek-otthonra';
import post046 from './blog/post-046-hideg-teli-napokat-felmelegiti-a-kave';
import post047 from './blog/post-047-kavegep-berles-elonyei-2023';
import post048 from './blog/post-048-miert-kulonlegesek-a-specialty-kavek';
import post049 from './blog/post-049-kavetermesztes-es-a-globalis-felmelegedes';
import post050 from './blog/post-050-a-segafredo-zanetti-tortenete';
import post051 from './blog/post-051-kavegep-evolucio-elso-automata-kavegep';
import post052 from './blog/post-052-bialetti-tortelem-kotyogo-es-ami-mogotte-van';
import post053 from './blog/post-053-irodai-kavegep-berles';
import post054 from './blog/post-054-mesterseges-intelligencia-es-a-kavegepberles-esete';
import post055 from './blog/post-055-a-kavezacc-hasznositas';
import post056 from './blog/post-056-kapszulas-kavegepek-hatranya';
import post057 from './blog/post-057-krups-kavegepek-tortenete';
import post058 from './blog/post-058-delonghi-kavegep-tortelem';
import post059 from './blog/post-059-kaves-receptek';
import post060 from './blog/post-060-irodai-kavezas';
import post061 from './blog/post-061-jura-kavegepek-innovacioi';
import post062 from './blog/post-062-wmf-kavegepek-karbantartasa-szervizelese';
import post063 from './blog/post-063-budafok-kavegep-berles';
import post064 from './blog/post-064-wmf-hibakodok';
import post065 from './blog/post-065-wmf-kavegep-karbantartas';
import post066 from './blog/post-066-miert-erdemes-kavegepet-berelni';
import post067 from './blog/post-067-kavegep-szerviz-kerdesei';
import post068 from './blog/post-068-kavegep-szerviztippek';
import post069 from './blog/post-069-a-kave-pozitiv-elettani-hatasai';
import post070 from './blog/post-070-bialetti-kotyogos-az-olasz-ikon';
import post071 from './blog/post-071-wmf-kavegep-karbantartasa';
import post072 from './blog/post-072-kavegep-karbantartasi-tippek';
import post073 from './blog/post-073-budafok-kavezoi-helyi-kavezok-buvoelete';
import post074 from './blog/post-074-saeco-kavegep-karbantartasa';
import post075 from './blog/post-075-kavegep-szerviz-xxii-kerulet';
import post076 from './blog/post-076-a-kave-vilagpiaci-valtozasai';
import post077 from './blog/post-077-szemelyreszabott-ajanlat';
import post078 from './blog/post-078-kavegep-hozom-viszem-szolgaltatas';
import post079 from './blog/post-079-a-kave-vilagpiaci-dragulas-okai';
import post080 from './blog/post-080-melyik-a-jobb-kavefoezo-osszehasonlitas';
import post081 from './blog/post-081-wmf-1500-hibalista';
import post082 from './blog/post-082-kavegep-karbantartasi-lista';
import post083 from './blog/post-083-donald-trump-hatasa-a-kave-vilagpiaci-araira';
import post084 from './blog/post-084-hozom-viszem-kavegep-szerviz';
import post085 from './blog/post-085-kaveszuret-egy-napja-mini-novella';
import post086 from './blog/post-086-a-kave-keserves-megelhetes-kisnovella';
import post087 from './blog/post-087-wmf-kavegepek-tortenete';

// Ide add hozzá az összes új blogbejegyzést
export const allPosts: BlogPost[] = [
  post001,
  post002,
  post003,
  post004,
  post005,
  post006,
  post007,
  post008,
  post009,
  post010,
  post011,
  post012,
  post013,
  post014,
  post015,
  post016,
  post017,
  post018,
  post019,
  post020,
  post021,
  post022,
  post023,
  post024,
  post025,
  post026,
  post027,
  post028,
  post029,
  post030,
  post031,
  post032,
  post033,
  post034,
  post035,
  post036,
  post037,
  post038,
  post039,
  post040,
  post041,
  post042,
  post043,
  post044,
  post045,
  post046,
  post047,
  post048,
  post049,
  post050,
  post051,
  post052,
  post053,
  post054,
  post055,
  post056,
  post057,
  post058,
  post059,
  post060,
  post061,
  post062,
  post063,
  post064,
  post065,
  post066,
  post067,
  post068,
  post069,
  post070,
  post071,
  post072,
  post073,
  post074,
  post075,
  post076,
  post077,
  post078,
  post079,
  post080,
  post081,
  post082,
  post083,
  post084,
  post085,
  post086,
  post087,
];

export function getPublishedPosts(): BlogPost[] {
  return allPosts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
  return getPublishedPosts().filter((p) => p.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug && p.published);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getPublishedPosts().filter((p) => p.categories.includes(category));
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getPublishedPosts().filter((p) => p.tags.includes(tag));
}

export function getAllCategories(): string[] {
  const cats = allPosts.flatMap((p) => p.categories);
  return [...new Set(cats)].sort();
}

export function getAllTags(): string[] {
  const tags = allPosts.flatMap((p) => p.tags);
  return [...new Set(tags)].sort();
}

export function getTagsWithCount(): { tag: string; count: number }[] {
  const map: Record<string, number> = {};
  allPosts.forEach((p) => p.tags.forEach((t) => { map[t] = (map[t] || 0) + 1; }));
  return Object.entries(map)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function paginatePosts(posts: BlogPost[], page: number, perPage: number) {
  const total = posts.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const items = posts.slice(start, start + perPage);
  return { items, total, totalPages, currentPage: page };
}
