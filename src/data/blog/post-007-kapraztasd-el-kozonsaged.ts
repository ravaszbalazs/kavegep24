import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'kapraztasd-el-kozonsaged-kavegeppel',
  title: 'Hogyan kápráztasd el a közönséged? – Egy egyszerű trükk',
  slug: 'kapraztasd-el-kozonsaged-kavegeppel',
  excerpt:
    'Egy egyszerű trükk, amivel növelheted céged Brand értékét egy rendezvényen.<br>Profi kávégép, lenyűgöző kávé – és máris más szemmel néznek rád.',
  content: `
    <h2>Mi az a Brand?</h2>
    <p>Az a kép a fogyasztó szemében, amit az érzelmei segítségével alkot a cégedről.<br>
    Ha egy emberhez kellene hasonlítani, akkor a <b>személyiség és a külső elemek összesége</b>.<br>
    Ilyen, mint a cipő, a ruha és a frizura.</p>

    <p>Ha a Brand része a külsőségek, akkor a cégednél sem érdemes figyelmen kívül hagyni ezt a területet – <b>foglalkozni kell vele</b>.</p>

    <h2>Profi kávégép egy rendezvényen? Igen.</h2>
    <p>Veled is biztos előfordult már, hogy több embert gyűjtöttél térben és időben egy helyre.<br>
    Őket tudod <b>lenyűgözni egy profi kávégéppel</b>.<br>
    Ez lehet egy tréning, MLM találkozó, vagy akár csak egy kapcsolatépítős meeting.</p>

    <p>Pontos statisztikák ismerete nélkül is bátran kijelenthetjük, hogy egy csoportban <b>több ember szokott kávézni, mint akik nem</b>.<br>
    Ebből következik, hogy a rendezvényed nagy részére tudsz pozitív benyomást tenni egy profi kávégéppel.</p>

    <p>Ez manapság már teljesen természetes azoknál a sikeres cégeknél, ahol több emberrel vannak kapcsolatban – <b>jó minőségű kávégépekkel főznek lenyűgöző kávét a társaságnak</b>.</p>

    <h2>Nagy beruházás nélkül</h2>
    <p>Ehhez pedig nincs szükség nagy beruházásra (nem ritka, hogy több millió forintos gépekről beszélünk), mert már <b>havi 15 000 Ft-tól lehet bérelni</b> egy ilyen gépet.</p>

    <p>Ez ma már nem luxus, hanem egy <b>standard, növekvő tendencia</b>.<br>
    Gondolj csak a Starbucks egyre növekvő térhódítására.<br>
    A jó minőségű kávéra igény van – ez tény.</p>

    <h2>Latte art – a kávé mint vizuális élmény</h2>
    <div class="my-8 rounded-2xl overflow-hidden bg-black" id="video-wrapper">
      <video
        id="latte-art-video"
        preload="metadata"
        class="w-full block"
        aria-label="Latte Art – Új generáció"
        style="display:block;"
      >
        <source src="https://kavegep24.hu/wp-content/uploads/2017/09/Latte-Art-Uj-generacio.mp4" type="video/mp4" />
        <p>A böngészője nem támogatja a videólejátszást.</p>
      </video>

      <!-- Egyedi vezérlősor -->
      <div id="video-controls" style="background:rgba(76,11,21,0.92);padding:10px 16px;display:flex;flex-direction:column;gap:8px;">

        <!-- Timeline -->
        <div style="display:flex;align-items:center;gap:10px;">
          <span id="vc-current" style="font-size:12px;color:#fff;min-width:38px;font-family:monospace;">0:00</span>
          <div
            id="vc-bar-wrap"
            style="flex:1;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;cursor:pointer;position:relative;"
            title="Ugrás ide"
          >
            <div id="vc-bar-buf" style="position:absolute;left:0;top:0;height:100%;background:rgba(255,255,255,0.15);border-radius:3px;width:0%;"></div>
            <div id="vc-bar" style="position:absolute;left:0;top:0;height:100%;background:#cf7019;border-radius:3px;width:0%;transition:width 0.1s linear;"></div>
            <div id="vc-thumb" style="position:absolute;top:50%;width:14px;height:14px;background:#fff;border-radius:50%;transform:translate(-50%,-50%);left:0%;box-shadow:0 1px 4px rgba(0,0,0,0.4);pointer-events:none;"></div>
          </div>
          <span id="vc-duration" style="font-size:12px;color:rgba(255,255,255,0.5);min-width:38px;text-align:right;font-family:monospace;">0:00</span>
        </div>

        <!-- Gombok -->
        <div style="display:flex;align-items:center;gap:12px;">
          <!-- Play/Pause -->
          <button id="vc-play" aria-label="Lejátszás" style="background:none;border:none;cursor:pointer;padding:0;color:#fff;display:flex;align-items:center;">
            <svg id="vc-play-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5,3 19,12 5,21" fill="currentColor" stroke="none"/></svg>
            <svg id="vc-pause-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="display:none;"><rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/></svg>
          </button>

          <!-- Hangerő -->
          <div style="display:flex;align-items:center;gap:6px;">
            <button id="vc-mute" aria-label="Némítás" style="background:none;border:none;cursor:pointer;padding:0;color:rgba(255,255,255,0.7);display:flex;align-items:center;">
              <svg id="vc-vol-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"/></svg>
              <svg id="vc-mute-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="display:none;"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.757 3.63 8.25 4.51 8.25H6.75Z"/></svg>
            </button>
            <input id="vc-volume" type="range" min="0" max="1" step="0.05" value="1"
              style="width:70px;height:4px;accent-color:#cf7019;cursor:pointer;" aria-label="Hangerő" />
          </div>

          <!-- Spacer -->
          <div style="flex:1;"></div>

          <!-- Fullscreen -->
          <button id="vc-fullscreen" aria-label="Teljes képernyő" style="background:none;border:none;cursor:pointer;padding:0;color:rgba(255,255,255,0.7);display:flex;align-items:center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/></svg>
          </button>
        </div>

      </div>
    </div>

    <script>
      (function() {
        const video = document.getElementById('latte-art-video');
        const playBtn = document.getElementById('vc-play');
        const playIcon = document.getElementById('vc-play-icon');
        const pauseIcon = document.getElementById('vc-pause-icon');
        const muteBtn = document.getElementById('vc-mute');
        const volIcon = document.getElementById('vc-vol-icon');
        const muteIcon = document.getElementById('vc-mute-icon');
        const volSlider = document.getElementById('vc-volume');
        const barWrap = document.getElementById('vc-bar-wrap');
        const bar = document.getElementById('vc-bar');
        const barBuf = document.getElementById('vc-bar-buf');
        const thumb = document.getElementById('vc-thumb');
        const current = document.getElementById('vc-current');
        const duration = document.getElementById('vc-duration');
        const fsBtn = document.getElementById('vc-fullscreen');
        const wrapper = document.getElementById('video-wrapper');

        if (!video) return;

        function fmt(s) {
          const m = Math.floor(s / 60);
          const sec = Math.floor(s % 60);
          return m + ':' + String(sec).padStart(2, '0');
        }

        // Play / Pause
        playBtn.addEventListener('click', function() {
          if (video.paused) { video.play(); } else { video.pause(); }
        });

        video.addEventListener('play', function() {
          playIcon.style.display = 'none';
          pauseIcon.style.display = '';
        });
        video.addEventListener('pause', function() {
          playIcon.style.display = '';
          pauseIcon.style.display = 'none';
        });

        // Idő frissítés
        video.addEventListener('loadedmetadata', function() {
          duration.textContent = fmt(video.duration);
        });
        video.addEventListener('timeupdate', function() {
          if (!video.duration) return;
          const pct = (video.currentTime / video.duration) * 100;
          bar.style.width = pct + '%';
          thumb.style.left = pct + '%';
          current.textContent = fmt(video.currentTime);
        });

        // Buffer
        video.addEventListener('progress', function() {
          if (video.buffered.length && video.duration) {
            const pct = (video.buffered.end(video.buffered.length - 1) / video.duration) * 100;
            barBuf.style.width = pct + '%';
          }
        });

        // Timeline kattintás + húzás
        function seek(e) {
          const rect = barWrap.getBoundingClientRect();
          const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
          video.currentTime = (x / rect.width) * video.duration;
        }
        let dragging = false;
        barWrap.addEventListener('mousedown', function(e) { dragging = true; seek(e); });
        document.addEventListener('mousemove', function(e) { if (dragging) seek(e); });
        document.addEventListener('mouseup', function() { dragging = false; });

        // Touch
        barWrap.addEventListener('touchstart', function(e) { seek(e.touches[0]); }, { passive: true });
        barWrap.addEventListener('touchmove', function(e) { seek(e.touches[0]); }, { passive: true });

        // Hangerő
        volSlider.addEventListener('input', function() {
          video.volume = parseFloat(volSlider.value);
          video.muted = video.volume === 0;
          updateVolIcon();
        });
        muteBtn.addEventListener('click', function() {
          video.muted = !video.muted;
          updateVolIcon();
        });
        function updateVolIcon() {
          if (video.muted || video.volume === 0) {
            volIcon.style.display = 'none';
            muteIcon.style.display = '';
          } else {
            volIcon.style.display = '';
            muteIcon.style.display = 'none';
          }
        }

        // Fullscreen
        fsBtn.addEventListener('click', function() {
          if (!document.fullscreenElement) {
            wrapper.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        });
      })();
    </script>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-09-21',
  thumbnail: '/images/kave-007-kavegep24.webp',
  ogImage: '/images/blog/og-kapraztasd-el-kozonsaged.jpg',
  categories: ['berles', 'cegeknek', 'kavekultura'],
  tags: ['kavegep-berles', 'rendezvény kávé'],
  featured: false,
  published: true,
  seo: {
    title: 'Hogyan kápráztasd el a közönséged? Profi kávégép rendezvényen | Kávégép24',
    description:
      'Növeld céged Brand értékét egyszerűen: egy profi kávégéppel lenyűgözheted ügyfeleid és kollégáid bármely rendezvényen. Havi 15 000 Ft-tól bérelhető.',
    keywords:
      'kávégép rendezvényre, brand értéknövelés kávéval, profi kávégép bérlés, latte art, kávégép meeting, rendezvény kávégép',
  },
};

export default post;
