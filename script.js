/* ═══════════════════════════════════════
   ASC HUB v3 — script.js
   Semua JS dalam 1 file: app + loading + particles + selection + education
   ═══════════════════════════════════════ */

(function () {
'use strict';

/* ══════════════════════════════════════
   DATA (inline — tidak perlu fetch JSON)
══════════════════════════════════════ */
var DATA = {
  facts: [
    'Satu hari di Venus lebih panjang dari satu tahun di Venus!',
    'Bintang neutron dapat berotasi hingga 700 kali per detik.',
    'Matahari menyumbang 99.86% total massa Tata Surya kita.',
    'Cahaya dari Matahari membutuhkan 8 menit 20 detik sampai ke Bumi.',
    'Di luar angkasa tidak ada suara karena tidak ada medium untuk merambatkan gelombang.',
    'Galaksi Andromeda akan bertabrakan dengan Bima Sakti dalam ~4.5 miliar tahun.',
    'Jupiter memiliki badai Bintik Merah Besar yang berlangsung lebih dari 350 tahun.',
    'Saturnus memiliki densitas lebih rendah dari air — bisa mengapung!',
    'Ada lebih banyak bintang di alam semesta daripada butiran pasir di seluruh pantai di Bumi.',
    'Jejak kaki astronot Apollo di Bulan bisa bertahan jutaan tahun karena tidak ada angin.',
    'Lubang hitam di pusat Bima Sakti: Sagittarius A* — massanya 4 juta kali Matahari.',
    'Suhu di inti Matahari mencapai 15 juta derajat Celsius.',
    'Black hole terbesar: TON 618, massanya 66 miliar kali massa Matahari.',
    'Voyager 1 berada lebih dari 23 miliar km dari Bumi — objek buatan manusia terjauh.',
    'Kecepatan cahaya: 299.792.458 meter per detik — tercepat di alam semesta.',
    'Europa (bulan Jupiter) kemungkinan punya lautan air cair di bawah es-nya.',
    'JWST mampu mendeteksi sinyal panas sekecil lebah dari Bulan.',
    'Di Mars, satu hari (sol) = 24 jam 37 menit — hampir sama dengan Bumi!',
    'Alam semesta berumur sekitar 13.8 miliar tahun.',
    'Setiap atom tubuhmu pernah ada di dalam inti bintang yang meledak. Kita adalah stardust!'
  ],
  planets: [
    {name:'Merkurius',emoji:'☿',distance:'57.9 juta km',diameter:'4,879 km',moons:0,day:'59 hari Bumi',year:'88 hari Bumi',temp:'-180°C hingga 430°C',desc:'Planet terkecil dan tercepat mengorbit Matahari. Tidak memiliki atmosfer berarti sehingga suhu sangat ekstrem.'},
    {name:'Venus',emoji:'♀',distance:'108.2 juta km',diameter:'12,104 km',moons:0,day:'243 hari Bumi',year:'225 hari Bumi',temp:'465°C rata-rata',desc:'Planet terpanas di Tata Surya. Atmosfer CO₂ tebal menciptakan efek rumah kaca ekstrem. Berotasi terbalik!'},
    {name:'Bumi',emoji:'🌍',distance:'149.6 juta km',diameter:'12,742 km',moons:1,day:'24 jam',year:'365.25 hari',temp:'-88°C hingga 58°C',desc:'Satu-satunya planet yang diketahui memiliki kehidupan. 71% permukaannya adalah air.'},
    {name:'Mars',emoji:'♂',distance:'227.9 juta km',diameter:'6,779 km',moons:2,day:'24j 37m',year:'687 hari Bumi',temp:'-125°C hingga 20°C',desc:'Planet Merah dengan gunung tertinggi di Tata Surya: Olympus Mons (22 km). Target kolonisasi manusia.'},
    {name:'Jupiter',emoji:'♃',distance:'778.5 juta km',diameter:'139,820 km',moons:95,day:'10 jam',year:'12 tahun Bumi',temp:'-110°C',desc:'Planet terbesar di Tata Surya. Badai Besar Merah telah berlangsung 350+ tahun. Memiliki 95 bulan.'},
    {name:'Saturnus',emoji:'♄',distance:'1.43 miliar km',diameter:'116,460 km',moons:146,day:'10.7 jam',year:'29 tahun Bumi',temp:'-140°C',desc:'Planet bercincin spektakuler. Densitasnya lebih rendah dari air. Memiliki 146 bulan yang diketahui.'},
    {name:'Uranus',emoji:'⛢',distance:'2.87 miliar km',diameter:'50,724 km',moons:27,day:'17 jam',year:'84 tahun Bumi',temp:'-224°C',desc:'Planet miring 98° — berotasi seperti menggelinding. Planet terdingin di Tata Surya.'},
    {name:'Neptunus',emoji:'♆',distance:'4.49 miliar km',diameter:'49,244 km',moons:16,day:'16 jam',year:'165 tahun Bumi',temp:'-200°C',desc:'Planet paling berangin dengan kecepatan angin 2.100 km/jam. Planet terjauh dari Matahari.'}
  ],
  news: [
    {category:'NASA / SPACE EXPLORATION',title:'Artemis Program: Humanity Returns to the Moon',desc:'NASA mempersiapkan misi Artemis III untuk mengirim astronot pertama ke kutub selatan Bulan.',date:'2025',icon:'🚀'},
    {category:'ASTROPHYSICS',title:'James Webb Discovers Oldest Known Galaxy',desc:'JWST berhasil mengamati galaksi JADES-GS-z14-0, terbentuk hanya 290 juta tahun setelah Big Bang.',date:'2024',icon:'🔭'},
    {category:'SOLAR SYSTEM',title:'Europa Clipper Mission Launches',desc:'Misi mencari kehidupan di bulan Jupiter, Europa — diluncurkan Oktober 2024, tiba 2030.',date:'2024',icon:'🌊'},
    {category:'MARS EXPLORATION',title:'Perseverance Collects 23rd Rock Sample',desc:'Rover Mars terus mengumpulkan sampel batuan yang rencananya dibawa ke Bumi oleh misi Mars Sample Return.',date:'2025',icon:'🪨'},
    {category:'EXOPLANETS',title:'55 New Exoplanets Confirmed by Kepler Data',desc:'Analisis data Kepler mengonfirmasi 55 planet baru di zona habitable bintang-bintang jauh.',date:'2024',icon:'🌏'},
    {category:'BLACK HOLES',title:'Sagittarius A* Releases Largest Flare',desc:'Lubang hitam di pusat Bima Sakti mengeluarkan flare X-ray terbesar yang pernah terekam.',date:'2024',icon:'⚫'}
  ],
  articles: [
    {icon:'⭐',category:'STELLAR PHYSICS',title:'Siklus Hidup Bintang: Dari Nebula hingga Lubang Hitam',desc:'Perjalanan sebuah bintang dimulai dari awan gas dan debu kosmik. Gravitasi menyebabkan materi mengumpul membentuk protobintang, lalu bintang deret utama, raksasa merah, dan akhirnya white dwarf, neutron star, atau black hole.',readTime:'8 menit'},
    {icon:'💥',category:'COSMOLOGY',title:'Big Bang: Awal Mula Alam Semesta',desc:'Sekitar 13.8 miliar tahun lalu, seluruh materi, energi, ruang, dan waktu berasal dari satu titik singularitas yang sangat panas. Dalam sepersekian detik, alam semesta mengembang secara dramatis.',readTime:'10 menit'},
    {icon:'🔭',category:'OBSERVATIONAL ASTRONOMY',title:'Cara Mengamati Langit Malam: Panduan Pemula',desc:'Mulai dengan mata telanjang di lokasi gelap, kenali rasi bintang utama seperti Orion dan Ursa Major. Gunakan aplikasi stellarium untuk identifikasi. Tingkatkan dengan binokuler lalu teleskop.',readTime:'6 menit'},
    {icon:'🌌',category:'SPACE TECHNOLOGY',title:'Teleskop James Webb: Mata Baru Umat Manusia',desc:'JWST adalah teleskop luar angkasa terbesar yang pernah diluncurkan. Dengan cermin 6.5 meter dan kemampuan inframerah, ia bisa melihat galaksi pertama yang terbentuk setelah Big Bang.',readTime:'7 menit'},
    {icon:'🌑',category:'DARK MATTER',title:'Materi Gelap: Misteri Terbesar Alam Semesta',desc:'85% materi di alam semesta tidak bisa kita lihat. Materi gelap tidak memancarkan cahaya namun pengaruh gravitasinya terlihat dari pergerakan galaksi dan pembelokan cahaya.',readTime:'9 menit'},
    {icon:'🌱',category:'ASTROBIOLOGY',title:'Kehidupan di Luar Bumi: Apakah Kita Sendirian?',desc:'Dengan miliaran galaksi dan triliunan bintang, kemungkinan kehidupan di tempat lain sangat tinggi. Para ilmuwan mencari biosignatures seperti oksigen dan metana di atmosfer exoplanet.',readTime:'8 menit'}
  ],
  timeline: [
    {year:'1543',event:'Copernicus — Model Heliosentris',desc:'Copernicus menerbitkan teori bahwa Matahari adalah pusat Tata Surya.'},
    {year:'1609',event:'Galileo — Teleskop Pertama',desc:'Galileo membangun teleskop dan mengamati 4 bulan Jupiter.'},
    {year:'1687',event:'Newton — Hukum Gravitasi Universal',desc:'Newton merumuskan hukum gravitasi yang menjelaskan gerak semua benda langit.'},
    {year:'1929',event:'Hubble — Ekspansi Alam Semesta',desc:'Edwin Hubble membuktikan alam semesta terus mengembang.'},
    {year:'1957',event:'Sputnik 1 — Satelit Pertama',desc:'Uni Soviet meluncurkan Sputnik 1, memulai era luar angkasa.'},
    {year:'1961',event:'Yuri Gagarin — Manusia Pertama di Luar Angkasa',desc:'Kosmonaut Soviet Yuri Gagarin menjadi manusia pertama yang mengorbit Bumi.'},
    {year:'1969',event:'Apollo 11 — Manusia di Bulan',desc:'Neil Armstrong dan Buzz Aldrin menginjakkan kaki di Bulan untuk pertama kalinya.'},
    {year:'1990',event:'Hubble Space Telescope Diluncurkan',desc:'Teleskop Hubble membuka era baru pengamatan alam semesta dari orbit.'},
    {year:'2015',event:'Deteksi Gelombang Gravitasi Pertama',desc:'LIGO mendeteksi riak ruang-waktu dari penggabungan dua lubang hitam.'},
    {year:'2019',event:'Foto Lubang Hitam Pertama',desc:'Event Horizon Telescope mengabadikan gambar lubang hitam M87.'},
    {year:'2021',event:'James Webb Space Telescope Diluncurkan',desc:'JWST diluncurkan 25 Desember 2021 — teleskop terbesar dan tercanggih sepanjang sejarah.'},
    {year:'2024',event:'Europa Clipper — Mencari Kehidupan',desc:'NASA meluncurkan misi ke bulan Jupiter untuk mencari tanda kehidupan di bawah es Europa.'},
    {year:'2025',event:'Artemis III — Kembali ke Bulan',desc:'NASA mengirim astronaut ke kutub selatan Bulan dalam program Artemis.'}
  ]
};

/* ══════════════════════════════════════
   LOADING SCREEN
══════════════════════════════════════ */
var ldProgress = 0, ldDone = false, ldMsgIdx = 0;
var ldMessages = [
  'Initializing Astronomy Space Community...',
  'Loading star charts...',
  'Connecting to NASA servers...',
  'Calibrating telemetry systems...',
  'Syncing ISS position data...',
  'ASC System Ready!'
];

function ldTick() {
  if (ldDone) return;
  ldProgress = Math.min(100, ldProgress + Math.random() * 2.8 + 0.4);
  var fill = document.getElementById('ld-fill');
  var pct  = document.getElementById('ld-pct');
  if (fill) fill.style.width = ldProgress + '%';
  if (pct)  pct.textContent  = Math.floor(ldProgress) + '%';
  if (ldProgress >= 100) {
    ldDone = true;
    setTimeout(ldFinish, 400);
    return;
  }
  setTimeout(ldTick, 25 + Math.random() * 55);
}

function ldFinish() {
  var el = document.getElementById('loading-screen');
  if (el) { el.classList.add('hidden'); }
  setTimeout(function() {
    var m = document.getElementById('welcome-modal');
    if (m) m.classList.add('show');
  }, 700);
}

function ldCycleText() {
  var el = document.getElementById('ld-text');
  if (!el || ldDone) return;
  el.style.opacity = '0';
  setTimeout(function() {
    if (el) { el.textContent = ldMessages[ldMsgIdx % ldMessages.length]; el.style.opacity = '1'; }
    ldMsgIdx++;
    if (!ldDone) setTimeout(ldCycleText, 1600);
  }, 280);
}

function ldAddScanLines() {
  var s = document.getElementById('loading-screen');
  if (!s) return;
  for (var i = 0; i < 2; i++) {
    var ln = document.createElement('div');
    ln.className = 'scan-line';
    ln.style.animationDelay = (i * 1.6) + 's';
    s.appendChild(ln);
  }
}

/* ══════════════════════════════════════
   STAR PARTICLE CANVAS
══════════════════════════════════════ */
var cvs, ctx2, W, H, stars = [], shooting = [];

function initCanvas() {
  cvs = document.getElementById('particles-canvas');
  if (!cvs) return;
  ctx2 = cvs.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  buildStars();
  drawLoop();
  setInterval(spawnShoot, 4200);
}

function resizeCanvas() {
  if (!cvs) return;
  W = cvs.width  = window.innerWidth;
  H = cvs.height = window.innerHeight;
  buildStars();
}

function buildStars() {
  stars = [];
  var count = Math.min(250, Math.floor(W * H / 5500));
  var colors = ['#00f5ff','#bf00ff','#ffffff','#00ff88','#7b68ee'];
  for (var i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      dx: (Math.random() - 0.5) * 0.08, dy: (Math.random() - 0.5) * 0.08,
      a: Math.random() * 0.7 + 0.15, ad: (Math.random() > 0.5 ? 1 : -1) * 0.003,
      c: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

function spawnShoot() {
  shooting.push({
    x: Math.random() * W, y: Math.random() * H * 0.5,
    len: Math.random() * 110 + 55,
    speed: Math.random() * 5 + 3.5,
    a: 1, angle: Math.PI / 5
  });
}

function drawLoop() {
  ctx2.clearRect(0, 0, W, H);
  // Stars
  for (var i = 0; i < stars.length; i++) {
    var s = stars[i];
    ctx2.save();
    ctx2.globalAlpha = s.a;
    ctx2.fillStyle = s.c;
    if (s.r > 0.9) { ctx2.shadowBlur = 5; ctx2.shadowColor = s.c; }
    ctx2.beginPath(); ctx2.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx2.fill();
    ctx2.restore();
    s.x += s.dx; s.y += s.dy; s.a += s.ad;
    if (s.a > 0.92 || s.a < 0.12) s.ad *= -1;
    if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
    if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;
  }
  // Shooting stars
  shooting = shooting.filter(function(s){ return s.a > 0; });
  for (var j = 0; j < shooting.length; j++) {
    var sh = shooting[j];
    ctx2.save();
    ctx2.globalAlpha = sh.a;
    var g = ctx2.createLinearGradient(sh.x, sh.y,
      sh.x - Math.cos(sh.angle) * sh.len, sh.y - Math.sin(sh.angle) * sh.len);
    g.addColorStop(0, '#00f5ff'); g.addColorStop(1, 'transparent');
    ctx2.strokeStyle = g; ctx2.lineWidth = 1.5;
    ctx2.beginPath();
    ctx2.moveTo(sh.x, sh.y);
    ctx2.lineTo(sh.x - Math.cos(sh.angle) * sh.len, sh.y - Math.sin(sh.angle) * sh.len);
    ctx2.stroke(); ctx2.restore();
    sh.x += sh.speed; sh.y += sh.speed * 0.38; sh.a -= 0.02;
  }
  requestAnimationFrame(drawLoop);
}

/* ══════════════════════════════════════
   APP STATE & NAVIGATION
══════════════════════════════════════ */
var State = { page: 'home', eduInited: false };

window.switchPage = function(page) {
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
  document.querySelectorAll('.nav-btn').forEach(function(b){ b.classList.remove('active'); });
  var t = document.getElementById('page-' + page);
  if (!t) return;
  t.classList.add('active');
  State.page = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  var nb = document.querySelector('.nav-btn[data-page="' + page + '"]');
  if (nb) nb.classList.add('active');
  var nl = document.getElementById('nav-links');
  if (nl) nl.classList.remove('open');
  if (page === 'education' && !State.eduInited) {
    State.eduInited = true;
    initEducation();
  }
};

window.toggleNav = function() {
  var nl = document.getElementById('nav-links');
  if (nl) nl.classList.toggle('open');
};

window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  if (!nav) return;
  if (window.scrollY > 30) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

window.enterWebsite = function() {
  var m = document.getElementById('welcome-modal');
  if (m) m.classList.remove('show');
  switchPage('home');
  runCounters();
  buildAll();
};

/* ── Tab switching ── */
document.addEventListener('click', function(e) {
  var tb = e.target.closest('[data-tab]');
  if (tb) { e.preventDefault(); switchTab(tb.getAttribute('data-tab')); }
  var nb = e.target.closest('[data-page]');
  if (nb && nb.classList.contains('nav-btn')) {
    e.preventDefault();
    switchPage(nb.getAttribute('data-page'));
  }
});

window.switchTab = function(tab) {
  document.querySelectorAll('.edu-tab').forEach(function(t){ t.classList.remove('active'); });
  document.querySelectorAll('.edu-panel').forEach(function(p){ p.classList.remove('active'); });
  var b = document.querySelector('[data-tab="' + tab + '"]');
  if (b) b.classList.add('active');
  var p = document.getElementById('panel-' + tab);
  if (p) p.classList.add('active');
};

/* ══════════════════════════════════════
   BUILD DYNAMIC CONTENT
══════════════════════════════════════ */
function buildAll() {
  buildPlanets(); buildNews(); buildArticles(); buildTimeline();
}

function buildPlanets() {
  var g = document.getElementById('planet-grid');
  if (!g) return;
  g.innerHTML = DATA.planets.map(function(p, i) {
    return '<div class="planet-card pre-reveal" onclick="showPlanetInfo(' + i + ')">'
      + '<div class="p-emoji">' + p.emoji + '</div>'
      + '<div class="p-name">' + p.name + '</div>'
      + '<div class="p-detail">' + p.desc.substring(0, 60) + '…</div>'
      + '</div>';
  }).join('');
  observeReveal();
}

function buildNews() {
  var g = document.getElementById('news-grid');
  if (!g) return;
  g.innerHTML = DATA.news.map(function(n) {
    return '<div class="news-card pre-reveal">'
      + '<div class="news-cat">' + n.category + '</div>'
      + '<div class="news-icon">' + n.icon + '</div>'
      + '<div class="news-title">' + n.title + '</div>'
      + '<div class="news-desc">' + n.desc + '</div>'
      + '<div class="news-date">📅 ' + n.date + '</div>'
      + '</div>';
  }).join('');
  observeReveal();
}

function buildArticles() {
  var g = document.getElementById('art-grid');
  if (!g) return;
  g.innerHTML = DATA.articles.map(function(a) {
    return '<div class="art-card pre-reveal">'
      + '<div class="art-thumb">' + a.icon + '</div>'
      + '<div class="art-body">'
      + '<div class="art-cat">' + a.category + '</div>'
      + '<div class="art-title">' + a.title + '</div>'
      + '<div class="art-desc">' + a.desc + '</div>'
      + '<div class="art-read">⏱ ' + a.readTime + ' baca</div>'
      + '</div></div>';
  }).join('');
  observeReveal();
}

function buildTimeline() {
  var tl = document.getElementById('timeline');
  if (!tl) return;
  tl.innerHTML = DATA.timeline.map(function(t) {
    return '<div class="tl-item pre-reveal">'
      + '<div class="tl-dot"></div>'
      + '<div class="tl-year">' + t.year + '</div>'
      + '<div class="tl-event">' + t.event + '</div>'
      + '<div class="tl-desc">' + t.desc + '</div>'
      + '</div>';
  }).join('');
  observeReveal();
}

/* ── Scroll Reveal ── */
function observeReveal() {
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.pre-reveal').forEach(function(el){ el.classList.add('revealed'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.pre-reveal:not(.revealed)').forEach(function(el){ io.observe(el); });
}

/* ── Counters ── */
function animateCounter(id, target, suffix) {
  var el = document.getElementById(id);
  if (!el) return;
  var val = 0, step = target / 80;
  var t = setInterval(function(){
    val = Math.min(target, val + step);
    el.textContent = Math.floor(val).toLocaleString() + (suffix||'');
    if (val >= target) clearInterval(t);
  }, 22);
}
function runCounters() {
  animateCounter('cnt-members', 300, '++');
  animateCounter('cnt-stars', 150, '+');
  animateCounter('cnt-articles', 16, '+');
  animateCounter('cnt-tools', 8, '+');
}

/* ══════════════════════════════════════
   SELECTION FORM
══════════════════════════════════════ */
var selStep = 1, selTotal = 8, selSkills = [], selData = {};

function updateDots() {
  for (var i = 1; i <= selTotal; i++) {
    var d = document.getElementById('sdot-' + i);
    var c = document.getElementById('scon-' + i);
    if (!d) continue;
    d.classList.remove('active','done');
    if (i < selStep)       { d.classList.add('done');   if (c) c.classList.add('done'); }
    else if (i === selStep) { d.classList.add('active'); if (c) c.classList.remove('done'); }
    else                    { if (c) c.classList.remove('done'); }
  }
}

function gotoStep(to) {
  var cur = document.getElementById('fstep-' + selStep);
  var nxt = document.getElementById('fstep-' + to);
  if (!nxt) return;
  if (cur) cur.classList.remove('active');
  nxt.classList.add('active');
  selStep = to;
  updateDots();
  var fc = document.getElementById('form-container');
  if (fc) fc.scrollIntoView({ behavior:'smooth', block:'start' });
}

function validateStep(s) {
  var v, n;
  if (s === 1) { v = fval('f-nama');     if (!v) { fshake('f-nama'); ftoast('Masukkan nama lengkap!'); return false; } }
  if (s === 2) { v = fval('f-user');     if (!v) { fshake('f-user'); ftoast('Masukkan username TikTok!'); return false; } }
  if (s === 3) { n = parseInt(fval('f-umur'),10); if (isNaN(n)||n<10||n>99) { fshake('f-umur'); ftoast('Masukkan umur yang valid (10–99)!'); return false; } }
  if (s === 4) { v = fval('f-kota');     if (!v) { fshake('f-kota'); ftoast('Masukkan kota / asal!'); return false; } }
  if (s === 5) { v = fval('f-alasan');   if (v.length < 20) { fshake('f-alasan'); ftoast('Tulis alasan minimal 20 karakter!'); return false; } }
  if (s === 6) { if (!selSkills.length) { ftoast('Pilih minimal 1 skill!'); return false; } }
  return true;
}

function collectStep(s) {
  var map = {1:'nama',2:'username',3:'umur',4:'kota',5:'alasan'};
  var fmap = {1:'f-nama',2:'f-user',3:'f-umur',4:'f-kota',5:'f-alasan'};
  if (map[s]) selData[map[s]] = fval(fmap[s]);
  if (s === 6) selData.skills = selSkills.slice();
}

function fval(id) { var el=document.getElementById(id); return el ? el.value.trim() : ''; }

function fshake(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake');
  setTimeout(function(){ el.classList.remove('shake'); }, 600);
}

function ftoast(msg) {
  var t = document.getElementById('asc-toast');
  if (!t) return;
  t.textContent = '⚠ ' + msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(function(){ t.classList.remove('show'); }, 2800);
}

window.nextStep = function(from) {
  if (!validateStep(from)) return;
  collectStep(from);
  if (from === selTotal - 1) buildReview();
  gotoStep(from + 1);
};
window.prevStep = function(from) { gotoStep(from - 1); };

window.toggleSkill = function(skill) {
  var idx = selSkills.indexOf(skill);
  var el  = document.querySelector('[data-skill="' + skill + '"]');
  if (!el) return;
  if (idx === -1) { selSkills.push(skill); el.classList.add('selected'); }
  else { selSkills.splice(idx,1); el.classList.remove('selected'); }
};

window.previewPhoto = function(e) {
  var file = e.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(ev) {
    var img = document.getElementById('prev-img');
    var box = document.getElementById('photo-preview');
    if (img) img.src = ev.target.result;
    if (box) box.style.display = 'flex';
    selData.photo = ev.target.result;
  };
  reader.readAsDataURL(file);
};

function buildReview() {
  var el = document.getElementById('review-summary');
  if (!el) return;
  var rows = [
    ['NAMA',   selData.nama     || '—'],
    ['TIKTOK', selData.username || '—'],
    ['UMUR',   selData.umur ? selData.umur + ' tahun' : '—'],
    ['KOTA',   selData.kota     || '—'],
    ['SKILL',  (selData.skills||[]).join(', ') || '—'],
    ['ALASAN', (selData.alasan||'').substring(0,120) + ((selData.alasan||'').length>120?'…':'')]
  ];
  el.innerHTML = rows.map(function(r) {
    return '<div style="display:flex;gap:12px;padding:7px 0;border-bottom:1px solid rgba(0,245,255,0.06);">'
      + '<span style="font-family:\'Share Tech Mono\',monospace;font-size:0.6rem;letter-spacing:2px;color:#00f5ff;min-width:60px;">' + r[0] + '</span>'
      + '<span style="color:rgba(210,215,255,0.8);font-size:0.83rem;">' + r[1] + '</span>'
      + '</div>';
  }).join('');
}

window.submitForm = function() {
  collectStep(selStep);
  var id = 'ASC-' + Math.floor(Math.random()*9000000+1000000);
  var fc = document.getElementById('form-container');
  var rc = document.getElementById('member-card-result');
  if (fc) fc.style.display = 'none';
  if (rc) { rc.style.display = 'block'; rc.scrollIntoView({behavior:'smooth'}); }
  shtml('mc-name',    selData.nama || '—');
  shtml('mc-user',    (selData.username||'').startsWith('@') ? selData.username : '@'+(selData.username||''));
  shtml('mc-id',      'ID: ' + id);
  shtml('mc-city',    selData.kota ? '📍 ' + selData.kota : '');
  shtml('mc-age',     selData.umur ? '🎂 ' + selData.umur + ' tahun' : '');
  var av = document.getElementById('mc-avatar');
  if (av) {
    if (selData.photo) av.innerHTML = '<img src="' + selData.photo + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
    else av.textContent = (selData.nama||'?').charAt(0).toUpperCase();
  }
  var skEl = document.getElementById('mc-skills');
  if (skEl) {
    skEl.innerHTML = '';
    (selData.skills||[]).forEach(function(s) {
      skEl.insertAdjacentHTML('beforeend', '<span class="mc-badge">' + s + '</span>');
    });
  }
};

function shtml(id, h) { var el=document.getElementById(id); if(el) el.innerHTML=h; }

window.downloadCard = function() {
  var c = document.createElement('canvas');
  c.width = 640; c.height = 380;
  var ctx = c.getContext('2d');
  var bg = ctx.createLinearGradient(0,0,640,380);
  bg.addColorStop(0,'#060820'); bg.addColorStop(1,'#10002a');
  ctx.fillStyle = bg; ctx.fillRect(0,0,640,380);
  for (var y=0; y<380; y+=4) { ctx.fillStyle='rgba(0,245,255,0.01)'; ctx.fillRect(0,y,640,2); }
  ctx.strokeStyle='#00f5ff'; ctx.lineWidth=2;
  ctx.shadowBlur=22; ctx.shadowColor='#00f5ff';
  ctx.strokeRect(4,4,632,372); ctx.shadowBlur=0;
  ctx.fillStyle='rgba(0,245,255,0.05)'; ctx.fillRect(8,8,624,38);
  ctx.fillStyle='#00f5ff'; ctx.font='bold 10px monospace'; ctx.textAlign='center';
  ctx.fillText('⭐ ASTRONOMY SPACE COMMUNITY ⭐',320,32); ctx.textAlign='left';
  ctx.fillStyle='rgba(0,245,255,0.12)'; ctx.fillRect(20,50,600,1);
  ctx.beginPath(); ctx.arc(96,182,58,0,Math.PI*2);
  ctx.strokeStyle='#00f5ff'; ctx.lineWidth=2; ctx.shadowBlur=16; ctx.shadowColor='#00f5ff'; ctx.stroke(); ctx.shadowBlur=0;
  ctx.fillStyle='rgba(0,245,255,0.08)'; ctx.fill();
  ctx.fillStyle='#ffffff'; ctx.font='bold 40px sans-serif'; ctx.textAlign='center';
  ctx.fillText((selData.nama||'?').charAt(0).toUpperCase(),96,198); ctx.textAlign='left';
  ctx.shadowBlur=12; ctx.shadowColor='#00f5ff';
  ctx.fillStyle='#ffffff'; ctx.font='bold 22px sans-serif'; ctx.fillText(selData.nama||'—',180,132); ctx.shadowBlur=0;
  ctx.fillStyle='#00f5ff'; ctx.font='14px monospace';
  ctx.fillText((selData.username||'').startsWith('@')?selData.username:'@'+(selData.username||''),180,158);
  ctx.fillStyle='rgba(180,185,230,0.6)'; ctx.font='12px monospace';
  if (selData.kota) ctx.fillText('📍 '+selData.kota,180,182);
  if (selData.umur) ctx.fillText('🎂 '+selData.umur+' tahun',180,202);
  if ((selData.skills||[]).length) { ctx.fillStyle='#bf00ff'; ctx.fillText('🔧 '+selData.skills.join(' · '),180,226); }
  ctx.fillStyle='rgba(0,245,255,0.1)'; ctx.fillRect(20,310,600,1);
  ctx.fillStyle='rgba(0,245,255,0.35)'; ctx.font='10px monospace';
  ctx.fillText('ID: ASC-'+Math.floor(Math.random()*9000000+1000000),24,336);
  ctx.fillStyle='rgba(180,185,230,0.3)'; ctx.font='9px monospace';
  ctx.fillText('Joined: '+new Date().toDateString(),24,352);
  ctx.fillStyle='rgba(0,245,255,0.08)'; ctx.fillRect(420,322,200,28);
  ctx.strokeStyle='rgba(0,245,255,0.3)'; ctx.lineWidth=1; ctx.strokeRect(420,322,200,28);
  ctx.fillStyle='#00f5ff'; ctx.font='bold 9px monospace'; ctx.textAlign='center';
  ctx.fillText('✓  ACCEPTED BY ASC SYSTEM',520,340); ctx.textAlign='left';
  ctx.fillStyle='rgba(0,245,255,0.18)'; ctx.font='8px monospace'; ctx.textAlign='right';
  ctx.fillText('Made by cahy144hz • ASC Hub v3',620,368);
  var a = document.createElement('a');
  a.href = c.toDataURL('image/png');
  a.download = 'ASC-Card-'+(selData.nama||'Member').replace(/\s/g,'_')+'.png';
  a.click();
};

window.resetForm = function() {
  selStep = 1; selSkills = []; selData = {};
  for (var i=1; i<=selTotal; i++) {
    var el = document.getElementById('fstep-'+i);
    if (el) el.classList.remove('active');
  }
  var s1 = document.getElementById('fstep-1');
  if (s1) s1.classList.add('active');
  document.querySelectorAll('.fi').forEach(function(el){ el.value=''; });
  document.querySelectorAll('.skill-item').forEach(function(el){ el.classList.remove('selected'); });
  var pp = document.getElementById('photo-preview');
  if (pp) pp.style.display = 'none';
  var fc = document.getElementById('form-container');
  var rc = document.getElementById('member-card-result');
  if (fc) fc.style.display = 'block';
  if (rc) rc.style.display = 'none';
  updateDots();
  window.scrollTo({top:0,behavior:'smooth'});
};

// Drag & drop upload
document.addEventListener('DOMContentLoaded', function() {
  var zone = document.getElementById('upload-zone');
  if (zone) {
    zone.addEventListener('dragover', function(e){ e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', function(){ zone.classList.remove('drag-over'); });
    zone.addEventListener('drop', function(e){
      e.preventDefault(); zone.classList.remove('drag-over');
      var file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) window.previewPhoto({target:{files:[file]}});
    });
  }
});

/* ══════════════════════════════════════
   EDUCATION — APOD
══════════════════════════════════════ */
function loadAPOD() {
  var wrap = document.getElementById('apod-content');
  if (!wrap) return;
  wrap.innerHTML = '<div class="apod-loading"><div class="spin-ring"></div><p>Fetching NASA APOD...</p></div>';
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(function(r){ return r.json(); })
    .then(function(d){ renderAPOD(d); })
    .catch(function(){ renderAPOD({
      title:'The Pillars of Creation — James Webb Space Telescope',
      date: new Date().toISOString().slice(0,10),
      explanation:'The Eagle Nebula\'s Pillars of Creation adalah salah satu gambar paling ikonik dalam sejarah astronomi. Diabadikan ulang oleh James Webb Space Telescope dalam inframerah, pilar-pilar gas dan debu ini terbentang beberapa tahun cahaya dan berfungsi sebagai tempat lahirnya bintang baru. Radiasi dari bintang-bintang muda mengikis dan membentuk kontur dramatis yang memesona ini.',
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/600px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg',
      media_type:'image', copyright:'NASA / ESA / STScI'
    }); });
}

function renderAPOD(d) {
  var wrap = document.getElementById('apod-content');
  if (!wrap) return;
  var isImg = d.media_type !== 'video';
  var imgHtml = isImg
    ? '<div class="apod-img"><img src="'+d.url+'" alt="'+d.title+'" loading="lazy" onerror="this.src=\'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg/600px-Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg\'"></div>'
    : '<div class="apod-img" style="display:flex;align-items:center;justify-content:center;height:280px;"><a href="'+d.url+'" target="_blank">🎬 Buka Video APOD</a></div>';
  wrap.innerHTML = '<div class="apod-card">'
    + imgHtml
    + '<div>'
    + '<div class="apod-tag">📷 NASA — ASTRONOMY PICTURE OF THE DAY</div>'
    + '<div class="apod-title">' + (d.title||'') + '</div>'
    + '<div class="apod-date">📅 ' + (d.date||'') + '</div>'
    + '<div class="apod-text">' + (d.explanation||'') + '</div>'
    + (d.copyright ? '<div class="apod-copy">© '+d.copyright+'</div>' : '')
    + (d.hdurl ? '<a href="'+d.hdurl+'" target="_blank" rel="noopener" class="apod-hd">🔍 VIEW HD IMAGE</a>' : '')
    + '</div></div>';
}

/* ══════════════════════════════════════
   EDUCATION — ISS TRACKER
══════════════════════════════════════ */
var issLng = -122.4;
function startISS() {
  updateISS();
  setInterval(updateISS, 2000);
}
function updateISS() {
  var t = Date.now()/1000, per = 92.68*60;
  var ang = (t % per)/per*2*Math.PI;
  var lat = 51.6 * Math.sin(ang);
  issLng = (issLng + 0.44) % 360;
  var lng = issLng > 180 ? issLng - 360 : issLng;
  var alt = (408 + Math.sin(t*0.007)*1.5).toFixed(1);
  var vel = (7.66 + Math.sin(t*0.003)*0.01).toFixed(3);
  shtml('iss-lat', (lat>=0?'+':'')+lat.toFixed(4)+'°');
  shtml('iss-lng', (lng>=0?'+':'')+lng.toFixed(4)+'°');
  shtml('iss-alt', alt+' km');
  shtml('iss-vel', vel+' km/s');
  shtml('iss-time', new Date().toLocaleTimeString('id-ID')+' WIB');
}

/* ══════════════════════════════════════
   EDUCATION — PLANET INFO
══════════════════════════════════════ */
window.showPlanetInfo = function(idx) {
  var p = DATA.planets[idx];
  var popup = document.getElementById('planet-popup');
  if (!popup || !p) return;
  popup.style.display = 'block';
  popup.innerHTML =
    '<button class="pp-close" onclick="closePlanetInfo()">✕ TUTUP</button>'
    + '<div class="pp-grid">'
    + '<div class="pp-emoji">' + p.emoji + '</div>'
    + '<div>'
    + '<div class="pp-name">' + p.name + '</div>'
    + '<div class="pp-desc">' + p.desc + '</div>'
    + '<div class="pp-stats">'
    + '<div class="ps"><span class="psl">JARAK</span><span class="psv">' + p.distance + '</span></div>'
    + '<div class="ps"><span class="psl">DIAMETER</span><span class="psv">' + p.diameter + '</span></div>'
    + '<div class="ps"><span class="psl">BULAN</span><span class="psv">' + p.moons + '</span></div>'
    + '<div class="ps"><span class="psl">HARI</span><span class="psv">' + p.day + '</span></div>'
    + '<div class="ps"><span class="psl">TAHUN</span><span class="psv">' + p.year + '</span></div>'
    + '<div class="ps"><span class="psl">SUHU</span><span class="psv">' + p.temp + '</span></div>'
    + '</div></div></div>';
  popup.scrollIntoView({behavior:'smooth',block:'nearest'});
};
window.closePlanetInfo = function() {
  var p = document.getElementById('planet-popup'); if (p) p.style.display = 'none';
};

/* ══════════════════════════════════════
   EDUCATION — AI CHAT
══════════════════════════════════════ */
var KB = {
  planet:   'Tata Surya kita punya 8 planet: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, dan Neptunus. 🪐',
  bintang:  'Bintang adalah bola plasma raksasa yang menghasilkan energi lewat fusi nuklir. Matahari kita bintang tipe G bersuhu ~5.778 K. ⭐',
  bulan:    'Bulan berjarak ~384.400 km dari Bumi. Neil Armstrong menginjakkan kaki di Bulan pada 20 Juli 1969! 🌕',
  galaksi:  'Bima Sakti berdiameter ~100.000 tahun cahaya, berisi 100–400 miliar bintang. Galaksi Andromeda akan bertabrakan dengannya ~4.5 miliar tahun lagi! 🌌',
  hitam:    'Black hole adalah daerah di mana gravitasi begitu kuat hingga cahaya pun tidak bisa kabur. TON 618 = 66 miliar kali massa Matahari! ⚫',
  mars:     'Mars = Planet Merah, punya Olympus Mons (gunung tertinggi, 22 km). Rover Perseverance NASA masih aktif hari ini. 🔴',
  asc:      'ASC (Astronomy Space Community) adalah komunitas pecinta astronomi yang berbagi ilmu dan inspirasi tentang luar angkasa. Daftar via menu SELECTION! 🚀',
  big:      'Big Bang terjadi ~13.8 miliar tahun lalu. Seluruh materi dan energi lahir dari satu singularitas. Alam semesta masih terus mengembang! 💥',
  webb:     'James Webb Space Telescope diluncurkan 25 Desember 2021. Dengan cermin 6.5 meter, ia bisa melihat galaksi-galaksi pertama setelah Big Bang. 🔭',
  iss:      'ISS mengorbit Bumi di ~408 km dengan kecepatan 7.66 km/s, menyelesaikan orbit setiap ~92 menit. 🛸',
  default:  [
    'Pertanyaan menarik! Ada hal spesifik tentang astronomi yang ingin kamu ketahui? ✨',
    'Alam semesta luasnya 93 miliar tahun cahaya (yang bisa diamati). Kita baru menjelajahi sebagian sangat kecilnya! 🌌',
    'Tahukah kamu? Cahaya dari bintang yang kamu lihat malam ini mungkin sudah berangkat ribuan tahun lalu. 💫',
    'Setiap atom dalam tubuhmu pernah ada di dalam inti bintang yang meledak. Kita terbuat dari stardust! 🌟'
  ]
};

function pickReply(msg) {
  var lo = msg.toLowerCase();
  if (lo.includes('planet'))                          return KB.planet;
  if (lo.includes('bintang')||lo.includes('star'))    return KB.bintang;
  if (lo.includes('bulan')||lo.includes('moon'))      return KB.bulan;
  if (lo.includes('galaksi')||lo.includes('galaxy'))  return KB.galaksi;
  if (lo.includes('lubang')||lo.includes('black'))    return KB.hitam;
  if (lo.includes('mars'))                            return KB.mars;
  if (lo.includes('asc')||lo.includes('komunitas'))   return KB.asc;
  if (lo.includes('big bang'))                        return KB.big;
  if (lo.includes('webb')||lo.includes('jwst'))       return KB.webb;
  if (lo.includes('iss')||lo.includes('stasiun'))     return KB.iss;
  return KB.default[Math.floor(Math.random()*KB.default.length)];
}

function appendMsg(role, text) {
  var msgs = document.getElementById('ai-msgs');
  if (!msgs) return;
  var isBot = role === 'bot';
  msgs.insertAdjacentHTML('beforeend',
    '<div class="ai-msg' + (isBot?'':' user') + '">'
    + '<div class="ai-av ' + (isBot?'bot':'user-av') + '">' + (isBot?'🤖':'U') + '</div>'
    + '<div class="ai-bubble ' + role + '">' + text + '</div>'
    + '</div>'
  );
  msgs.scrollTop = msgs.scrollHeight;
}

window.sendAIMsg = function() {
  var inp = document.getElementById('ai-inp');
  if (!inp) return;
  var msg = inp.value.trim();
  if (!msg) return;
  inp.value = '';
  appendMsg('user', msg);
  var typId = 'typ-' + Date.now();
  var msgs = document.getElementById('ai-msgs');
  if (msgs) {
    msgs.insertAdjacentHTML('beforeend',
      '<div class="ai-msg" id="' + typId + '">'
      + '<div class="ai-av bot">🤖</div>'
      + '<div class="ai-bubble bot"><div class="typing-dots"><span></span><span></span><span></span></div></div>'
      + '</div>'
    );
    msgs.scrollTop = msgs.scrollHeight;
  }
  setTimeout(function(){
    var el = document.getElementById(typId); if(el) el.remove();
    appendMsg('bot', pickReply(msg));
  }, 700 + Math.random()*700);
};

/* ══════════════════════════════════════
   TOOLS — CALCULATOR
══════════════════════════════════════ */
var cVal = '0', cOp = null, cPrev = null, cReset = false;
function cDisp() { var el=document.getElementById('calc-disp'); if(el) el.textContent=cVal; }
window.calcNum = function(n) {
  if (cReset) { cVal=''; cReset=false; }
  if (cVal==='0'&&n!=='.') cVal='';
  if (n==='.'&&cVal.includes('.')) return;
  cVal = (cVal+n).slice(0,14); cDisp();
};
window.calcOp  = function(o) { cPrev=parseFloat(cVal); cOp=o; cReset=true; };
window.calcEq  = function() {
  if (!cOp) return;
  var cur=parseFloat(cVal), r;
  if (cOp==='+') r=cPrev+cur; else if (cOp==='-') r=cPrev-cur;
  else if (cOp==='×') r=cPrev*cur; else if (cOp==='÷') r=cur===0?'ERR':cPrev/cur;
  cVal=String(r); cOp=null; cDisp();
};
window.calcClr = function() { cVal='0'; cOp=null; cPrev=null; cDisp(); };
window.calcSign= function() { cVal=String(-parseFloat(cVal)); cDisp(); };
window.calcPct = function() { cVal=String(parseFloat(cVal)/100); cDisp(); };
window.calcDot = function() { if(!cVal.includes('.')){ cVal+='.'; cDisp(); } };

/* ── Unit Converter ── */
var toKm = {km:1,mi:1.60934,au:149597870.7,ly:9.46073e12,pc:3.08568e13};
window.doConvert = function() {
  var v=parseFloat((document.getElementById('conv-in')||{}).value);
  var fr=(document.getElementById('conv-fr')||{}).value;
  var to=(document.getElementById('conv-to')||{}).value;
  var res=document.getElementById('conv-result');
  if (!res||isNaN(v)) return;
  res.textContent = v.toLocaleString()+' '+fr.toUpperCase()+' = '+(v*toKm[fr]/toKm[to]).toExponential(5)+' '+to.toUpperCase();
};
window.swapUnits = function() {
  var f=document.getElementById('conv-fr'), t=document.getElementById('conv-to');
  if(!f||!t) return; var tmp=f.value; f.value=t.value; t.value=tmp; window.doConvert();
};

/* ── Time Converter ── */
var toSec = {detik:1,menit:60,jam:3600,hari:86400,tahun:31557600};
window.doTime = function() {
  var v=parseFloat((document.getElementById('time-in')||{}).value);
  var fr=(document.getElementById('time-fr')||{}).value;
  var res=document.getElementById('time-result');
  if (!res||isNaN(v)) return;
  var s=v*toSec[fr];
  res.innerHTML =
    '<div class="time-row"><span>Detik</span><span>'+s.toExponential(4)+'</span></div>'
    +'<div class="time-row"><span>Menit</span><span>'+(s/60).toExponential(4)+'</span></div>'
    +'<div class="time-row"><span>Jam</span><span>'+(s/3600).toExponential(4)+'</span></div>'
    +'<div class="time-row"><span>Hari</span><span>'+(s/86400).toExponential(4)+'</span></div>'
    +'<div class="time-row"><span>Tahun</span><span>'+(s/31557600).toExponential(4)+'</span></div>'
    +'<div class="time-row"><span>Abad</span><span>'+(s/3155760000).toExponential(4)+'</span></div>';
};

/* ── Random Facts ── */
window.randomFact = function() {
  var el=document.getElementById('fact-txt');
  if (!el) return;
  el.style.opacity='0';
  setTimeout(function(){
    el.textContent = DATA.facts[Math.floor(Math.random()*DATA.facts.length)];
    el.style.opacity='1';
  }, 300);
};

/* ── Mini Terminal ── */
var CMDS = {
  help:    'Commands: help · about · date · time · clear · echo [text] · calc [expr] · facts · version',
  about:   'ASC Hub v3 — Astronomy Space Community\nSingle-file edition: index.html + style.css + script.js + logo.png',
  date:    function(){ return '📅 '+new Date().toDateString(); },
  time:    function(){ return '🕐 '+new Date().toLocaleTimeString(); },
  facts:   function(){ return DATA.facts[Math.floor(Math.random()*DATA.facts.length)]; },
  version: '⚡ ASC Terminal v3.0.0 — Built for stargazers ✨'
};
window.runCmd = function() {
  var inp=document.getElementById('term-in');
  if (!inp) return;
  var raw=inp.value.trim(); inp.value='';
  if (!raw) return;
  var out=document.getElementById('terminal');
  var term=document.getElementById('term-wrap');
  var parts=raw.split(' '), base=parts[0], args=parts.slice(1);
  var reply;
  if (base==='clear'){ if(out) out.innerHTML=''; return; }
  if (base==='echo') reply=args.join(' ')||'(empty)';
  else if (base==='calc') {
    try { reply='= '+Function('"use strict";return('+args.join(' ')+')')(); }
    catch(_){ reply='Error: invalid expression'; }
  } else if (CMDS[base]) reply=typeof CMDS[base]==='function'?CMDS[base]():CMDS[base];
  else reply='Command not found: "'+base+'". Type "help" for commands.';
  if (out) {
    out.insertAdjacentHTML('beforeend',
      '<div style="color:rgba(200,200,255,0.35);margin-top:4px;">▶ '+raw+'</div>'
      +'<div style="color:#00ff88;margin-bottom:4px;">'+(reply||'')+'</div>'
    );
  }
  if (term) term.scrollTop=term.scrollHeight;
};

/* ── Notes ── */
var notesEl;
function initNotes() {
  notesEl=document.getElementById('notes-area');
  if (!notesEl) return;
  try { notesEl.value=localStorage.getItem('asc-notes-v3')||''; } catch(_){}
  notesEl.addEventListener('input', function(){
    try { localStorage.setItem('asc-notes-v3',notesEl.value); } catch(_){}
    var cnt=document.getElementById('notes-cnt');
    if (cnt) cnt.textContent=notesEl.value.length+' karakter';
  });
}
window.clearNotes = function() {
  if (!confirm('Hapus semua catatan?')) return;
  if (notesEl) notesEl.value='';
  try { localStorage.removeItem('asc-notes-v3'); } catch(_){}
  var cnt=document.getElementById('notes-cnt'); if(cnt) cnt.textContent='0 karakter';
};

/* ── Search ── */
window.doSearch = function() {
  var q=((document.getElementById('edu-search')||{}).value||'').trim().toLowerCase();
  document.querySelectorAll('.news-card,.art-card,.planet-card').forEach(function(el){
    if (!q) { el.style.opacity='1'; el.style.borderColor=''; return; }
    var m=el.textContent.toLowerCase().includes(q);
    el.style.opacity=m?'1':'0.22';
    el.style.borderColor=m?'var(--cyan)':'';
  });
};

/* ══════════════════════════════════════
   INIT EDUCATION
══════════════════════════════════════ */
function initEducation() {
  loadAPOD();
  startISS();
  initNotes();
  // init terminal input
  var ti=document.getElementById('term-in');
  if (ti) ti.addEventListener('keypress',function(e){ if(e.key==='Enter') window.runCmd(); });
  var ai=document.getElementById('ai-inp');
  if (ai) ai.addEventListener('keypress',function(e){ if(e.key==='Enter') window.sendAIMsg(); });
  // Random fact on load
  window.randomFact();
}

/* ══════════════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════════════ */
document.addEventListener('keydown', function(e) {
  if (e.altKey) {
    if (e.key==='1') window.switchPage('home');
    if (e.key==='2') window.switchPage('selection');
    if (e.key==='3') window.switchPage('education');
  }
});

/* ══════════════════════════════════════
   CLICK SOUND
══════════════════════════════════════ */
document.addEventListener('click', function(e) {
  if (!e.target.closest('button')) return;
  try {
    var ac=new(window.AudioContext||window.webkitAudioContext)();
    var osc=ac.createOscillator(), gain=ac.createGain();
    osc.connect(gain); gain.connect(ac.destination);
    osc.frequency.value=880; osc.type='sine';
    gain.gain.setValueAtTime(0.04,ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+0.07);
    osc.start(); osc.stop(ac.currentTime+0.07);
  } catch(_){}
});

/* ══════════════════════════════════════
   DOM READY — BOOT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  // Canvas
  initCanvas();
  // Loading
  ldAddScanLines();
  setTimeout(function(){ ldTick(); ldCycleText(); }, 300);
  // Pre-build content
  buildAll();
  // Observe static cards
  setTimeout(observeReveal, 400);
  // Search input
  var srch=document.getElementById('edu-search');
  if (srch) { srch.addEventListener('input', function(){ if(!srch.value) window.doSearch(); }); }
});

})();
