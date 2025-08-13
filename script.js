/* ====== Garderie Éducative Lajoie — script.js ====== */

// Smooth scroll for internal links (supports old browsers gracefully)
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  const target = document.querySelector(id);
  if (!target) return;

  e.preventDefault();
  const top = target.getBoundingClientRect().top + window.pageYOffset - 70; // header offset
  window.scrollTo({ top, behavior: 'smooth' });

  // Close dropdown <details> on selection
  const details = a.closest('details');
  if (details && details.open) details.open = false;
});

// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
  document.querySelectorAll('details.menu[open]').forEach(d => {
    if (!d.contains(e.target)) d.open = false;
  });
});

// Add a shadow to header when scrolling
(function stickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  const toggle = () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 6px 20px rgba(0,0,0,.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  };
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
})();

// Back-to-top button (optional element with id="toTop")
(function backToTop() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  const onScroll = () => {
    btn.style.opacity = window.scrollY > 400 ? '1' : '0';
    btn.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// Current year injection for footer (element with id="year")
(function currentYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Lightweight image viewer for gallery (click to open in new tab)
(function galleryClick(){
  document.querySelectorAll('.gallery img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => window.open(img.src, '_blank'));
  });
})();

// Helper to swap hero background via data-hero attribute on <section id="accueil">
(function heroBackground(){
  const hero = document.querySelector('[data-hero-bg]');
  if (!hero) return;
  const url = hero.getAttribute('data-hero-bg');
  if (url) hero.style.backgroundImage = `url('${url}')`;
})();

/* ====== Minimal HTML hooks reference (à titre indicatif) ======
<link rel="stylesheet" href="style.css">
<header class="header">…</header>
<section id="accueil" class="hero" data-hero-bg="URL_IMAGE_OPTIONNELLE"><div class="inner container">…</div></section>
<section class="section container"><div class="cards">…</div></section>
<section id="apropos" class="section container grid-2">…</section>
<section id="mission" class="section">…</section>
<section id="contact" class="section container contact"><ul class="contact-list">…</ul><div class="map">…</div></section>
<footer class="footer">© <span id="year"></span> Garderie Éducative Lajoie</footer>
<script defer src="script.js"></script>
=============================================================== */
