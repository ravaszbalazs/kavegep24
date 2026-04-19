import type { BlogPost } from '../blogTypes';

const post: BlogPost = {
  id: 'hogyan-keszul-az-instant-kave',
  title: 'Hogyan készül az instant kávé?',
  slug: 'hogyan-keszul-az-instant-kave',
  excerpt:
    'Az instant kávé 100%-ban valódi kávéból készül, adalékanyag nélkül.<br>De mi a különbség a szárítás és a fagyasztás között? És mit érdemes tudni a 3in1 termékekről?',
  content: `
    <p>Az instant kávé <b>100%-ban valódi kávéból készül</b> és nincs benne semmilyen hozzáadott adalékanyag (pl. tartósítószer).</p>

    <p>Először is a pörkölt szemes kávét ledarálják.<br>
    Majd ipari mennyiségben, 100 Celsius fok körüli vízben kávéitalt készítenek.</p>

    <h2>Az instant kávékészítés kétféle módon történik</h2>
    <ol>
      <li><b>Szárítás</b></li>
      <li><b>Fagyasztás</b></li>
    </ol>

    <h3>1. Szárítási eljárás</h3>
    <p>A szárítási eljárás során a lefőzött kávéitalból a vizet <b>forró levegő segítségével kipárologtatják</b>.<br>
    A párologtatás végén a kávé kikristályosodik – ez lesz az instant kávé.</p>
    <p>Az instant kávék <b>többségét szárítással állítják elő</b>.</p>

    <h3>2. Fagyasztásos eljárás</h3>
    <p>A fagyasztásos eljárást a <b>prémium instant kávék</b> elkészítésénél alkalmazzák.<br>
    Az eljárás lényege, hogy a kávéitalt lefagyasztják és vákuum alá helyezik.<br>
    A vákuum hatására a víz párologni kezd, ezáltal az <b>aromák megmaradnak</b>.</p>

    <h2>A 3in1 termékekről</h2>
    <p>Manapság egyre divatosabbak a háromaz-egyben termékek.<br>
    A 3in1 termékek hozzáadott cukrot is tartalmaznak – csak forró víz kell hozzá és máris kész a kávé.</p>
    <p>Nagy hátránya ezeknek a termékeknek, hogy <b>mindössze 8–10%-ban tartalmaz igazi kávét</b>.<br>
    A többi adalék.</p>

    <h2>Miért hiszünk a frissen őrölt kávéban?</h2>
    <p>Mi hiszünk az adalékmentes termékekben, ezért <b>kizárólag szemes pörkölt kávéval foglalkozunk</b>.<br>
    Kávégépeink frissen őrölt kávéból készítik el a különböző kávécsodákat.</p>

    <p>A minőségi kávéfogyasztás alapja a <b>frissen őrölt kávé</b>.<br>
    A rituálé része, hogy halljuk a daráló mormogását, érezzük a frissen őrölt kávé illatát,<br>
    és legvégül látjuk, ahogy a kávégépből magasnyomás segítségével kifolyik az aranybarna forró kávé.</p>

    <h2>Így készül az instant kávé – videó</h2>
    <p>Winkler Róbert ellátogatott a Csodák Palotájába, ahol laboratóriumi körülmények között bemutatják az eljárás lényegét.</p>

    <div class="my-8 rounded-2xl overflow-hidden bg-black" id="video-wrapper-instant">
      <video
        id="instant-kave-video"
        preload="metadata"
        class="w-full block"
        aria-label="Hogyan készül az instant kávé – Csodák Palotája"
        style="display:block;"
      >
        <source src="http://kavegep24.hu/wp-content/uploads/2016/10/22193846_695361007336983_1261284482967666688_n.mp4" type="video/mp4" />
        <p>A böngészője nem támogatja a videólejátszást.</p>
      </video>

      <div id="video-controls-instant" style="background:rgba(76,11,21,0.92);padding:10px 16px;display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span id="vc2-current" style="font-size:12px;color:#fff;min-width:38px;font-family:monospace;">0:00</span>
          <div id="vc2-bar-wrap" style="flex:1;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;cursor:pointer;position:relative;" title="Ugrás ide">
            <div id="vc2-bar-buf" style="position:absolute;left:0;top:0;height:100%;background:rgba(255,255,255,0.15);border-radius:3px;width:0%;"></div>
            <div id="vc2-bar" style="position:absolute;left:0;top:0;height:100%;background:#cf7019;border-radius:3px;width:0%;transition:width 0.1s linear;"></div>
            <div id="vc2-thumb" style="position:absolute;top:50%;width:14px;height:14px;background:#fff;border-radius:50%;transform:translate(-50%,-50%);left:0%;box-shadow:0 1px 4px rgba(0,0,0,0.4);pointer-events:none;"></div>
          </div>
          <span id="vc2-duration" style="font-size:12px;color:rgba(255,255,255,0.5);min-width:38px;text-align:right;font-family:monospace;">0:00</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <button id="vc2-play" aria-label="Lejátszás" style="background:none;border:none;cursor:pointer;padding:0;color:#fff;display:flex;align-items:center;">
            <svg id="vc2-play-icon" width="22" height="22" viewBox="0 0 24 24" fill="none"><polygon points="5,3 19,12 5,21" fill="currentColor"/></svg>
            <svg id="vc2-pause-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" style="display:none;"><rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/></svg>
          </button>
          <div style="display:flex;align-items:center;gap:6px;">
            <button id="vc2-mute" aria-label="Némítás" style="background:none;border:none;cursor:pointer;padding:0;color:rgba(255,255,255,0.7);display:flex;align-items:center;">
              <svg id="vc2-vol-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"/></svg>
              <svg id="vc2-mute-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="display:none;"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.757 3.63 8.25 4.51 8.25H6.75Z"/></svg>
            </button>
            <input id="vc2-volume" type="range" min="0" max="1" step="0.05" value="1" style="width:70px;height:4px;accent-color:#cf7019;cursor:pointer;" aria-label="Hangerő" />
          </div>
          <div style="flex:1;"></div>
          <button id="vc2-fullscreen" aria-label="Teljes képernyő" style="background:none;border:none;cursor:pointer;padding:0;color:rgba(255,255,255,0.7);display:flex;align-items:center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/></svg>
          </button>
        </div>
      </div>
    </div>

    <script>
      (function() {
        const video = document.getElementById('instant-kave-video');
        const playBtn = document.getElementById('vc2-play');
        const playIcon = document.getElementById('vc2-play-icon');
        const pauseIcon = document.getElementById('vc2-pause-icon');
        const muteBtn = document.getElementById('vc2-mute');
        const volIcon = document.getElementById('vc2-vol-icon');
        const muteIcon = document.getElementById('vc2-mute-icon');
        const volSlider = document.getElementById('vc2-volume');
        const barWrap = document.getElementById('vc2-bar-wrap');
        const bar = document.getElementById('vc2-bar');
        const barBuf = document.getElementById('vc2-bar-buf');
        const thumb = document.getElementById('vc2-thumb');
        const current = document.getElementById('vc2-current');
        const duration = document.getElementById('vc2-duration');
        const fsBtn = document.getElementById('vc2-fullscreen');
        const wrapper = document.getElementById('video-wrapper-instant');
        if (!video) return;
        function fmt(s) { const m = Math.floor(s/60); return m+':'+String(Math.floor(s%60)).padStart(2,'0'); }
        playBtn.addEventListener('click', function() { video.paused ? video.play() : video.pause(); });
        video.addEventListener('play', function() { playIcon.style.display='none'; pauseIcon.style.display=''; });
        video.addEventListener('pause', function() { playIcon.style.display=''; pauseIcon.style.display='none'; });
        video.addEventListener('loadedmetadata', function() { duration.textContent = fmt(video.duration); });
        video.addEventListener('timeupdate', function() {
          if (!video.duration) return;
          const pct = (video.currentTime / video.duration) * 100;
          bar.style.width = pct+'%'; thumb.style.left = pct+'%'; current.textContent = fmt(video.currentTime);
        });
        video.addEventListener('progress', function() {
          if (video.buffered.length && video.duration) barBuf.style.width = (video.buffered.end(video.buffered.length-1)/video.duration*100)+'%';
        });
        let dragging = false;
        function seek(e) { const r = barWrap.getBoundingClientRect(); video.currentTime = (Math.max(0,Math.min(e.clientX-r.left,r.width))/r.width)*video.duration; }
        barWrap.addEventListener('mousedown', function(e) { dragging=true; seek(e); });
        document.addEventListener('mousemove', function(e) { if(dragging) seek(e); });
        document.addEventListener('mouseup', function() { dragging=false; });
        barWrap.addEventListener('touchstart', function(e) { seek(e.touches[0]); }, {passive:true});
        barWrap.addEventListener('touchmove', function(e) { seek(e.touches[0]); }, {passive:true});
        volSlider.addEventListener('input', function() { video.volume=parseFloat(volSlider.value); video.muted=video.volume===0; updateVol(); });
        muteBtn.addEventListener('click', function() { video.muted=!video.muted; updateVol(); });
        function updateVol() { const m=video.muted||video.volume===0; volIcon.style.display=m?'none':''; muteIcon.style.display=m?'':'none'; }
        fsBtn.addEventListener('click', function() { document.fullscreenElement ? document.exitFullscreen() : wrapper.requestFullscreen(); });
      })();
    </script>
  `,
  author: 'kajor-roland',
  publishedAt: '2017-10-10',
  thumbnail: '/images/kave-012-kavegep24.webp',
  ogImage: '/images/blog/og-hogyan-keszul-az-instant-kave.jpg',
  categories: ['kavekultura', 'tippek'],
  tags: ['kavekultura', 'kávé tények'],
  featured: false,
  published: true,
  seo: {
    title: 'Hogyan készül az instant kávé? Szárítás vs. fagyasztás | Kávégép24',
    description:
      'Az instant kávé 100%-ban valódi kávéból készül. Megmutatjuk a szárítási és fagyasztásos eljárás különbségét, és miért tartalmaz a 3in1 csak 8-10% kávét.',
    keywords:
      'instant kávé készítése, instant kávé adalékanyag, kávé szárítás fagyasztás, 3in1 kávé, frissen őrölt kávé, instant kávé vs őrölt kávé',
  },
};

export default post;
