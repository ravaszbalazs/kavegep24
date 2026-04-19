import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'az-olcso-az-draga-kave',
  title: 'Az olcsó, az drága – Mennyivel kerül többe a finom és egészséges kávé?',
  slug: 'az-olcso-az-draga-kave',
  excerpt:
    'Olcsó húsnak híg a levele – örök érvényű igazság a kávézásban is.<br>Megmutatjuk, miért fizet drágábban az, aki olcsón akar megúszni.',
  content: `
    <h2>Olcsó vs. „Drága"</h2>
    <blockquote>
      <p><b>Olcsó húsnak híg a levele.</b></p>
    </blockquote>
    <p>Biztosan jól ismered ezt a régi magyar közmondást.<br>
    Tudod miért maradt fent a mai napig? Mert <b>örök érvényű</b>.<br>
    Igaz volt 100 éve és igaz most is.</p>

    <p>Én többször jártam már úgy életem során, hogy az „olcsóbb" megoldás tűnt jó választásnak, de az idő bebizonyította, hogy tévedek.<br>
    Csábító dolog, és sok esetben logikusnak is tűnhet, ha valamiből a legolcsóbbat vesszük.<br>
    <b>A kávézásban ez hatványozottan igaz.</b></p>

    <h2>Amit most írok, az nagyon fontos</h2>
    <p>Szeretnélek emlékeztetni egy fontos dologra.</p>
    <p>Amikor kávét iszol, akkor a szervezetedbe juttatsz egy <b>élelmiszert</b>.<br>
    Arról a szervezetedről beszélek, ami életed végéig elkísér.</p>

    <p>Biztosan láttad már azt a képet, amelyen egy cserépben lévő virág és egy kancsó víz szerepel ezzel az üzenettel:<br>
    <b>„Ha a növényeidet vízzel öntözöd, akkor magad miért mérgezed?"</b></p>

    <p>Ez elgondolkodtató…</p>

    <p>Nem akarlak ijesztgetni és mesterséges pánikot kelteni, de a tény az tény:</p>

    <p style="font-size:1.1em;font-weight:bold;color:#4c0b15;border-left:4px solid #cf7019;padding-left:1rem;">
      olcsó kávé + rossz minőségű kávégép = egészségtelen
    </p>

    <p>A kávézás abban az esetben egészséges, ha azt <b>megfelelő ésszerűséggel</b> végezzük.</p>

    <h2>Mennyi az annyi?</h2>
    <p>Profi kávégépet már <b>havi 15 000 Ft-tól</b> tudsz bérelni tőlünk<br>
    (ezek ára általában 7 számjegyű, ha meg akarod venni).</p>

    <p>Ezekhez jár:</p>
    <ul>
      <li><b>4 órán belüli kiszállási idő</b>, ha elromlik (nagyon ritka az ilyen)</li>
      <li><b>Ingyenes karbantartás</b></li>
      <li>Ha megunod, <b>kérhetsz másik típust</b></li>
      <li><b>Olcsóbban beszerezhető kávé</b></li>
    </ul>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-09-21',
  thumbnail: '/images/kave-008-kavegep24.webp',
  ogImage: '/images/blog/og-az-olcso-az-draga.jpg',
  categories: ['kavekultura', 'tippek'],
  tags: ['kavegep-berles', 'irodai kávégép'],
  featured: false,
  published: true,
  seo: {
    title: 'Az olcsó, az drága – Egészséges kávé vs. silány minőség | Kávégép24',
    description:
      'Mennyivel kerül többe a finom, egészséges kávé az olcsónál? Megmutatjuk, miért nem éri meg spórolni a kávén – és miért lehet prémium gép már havi 15 000 Ft-tól.',
    keywords:
      'egészséges kávé, prémium kávé vs olcsó kávé, kávé minőség, kávégép bérlés, jó kávé ára, kávézás egészség',
  },
};

export default post;
