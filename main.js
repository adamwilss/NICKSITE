/* ============================================================
   NICK BRONOWSKI — main.js
   Navbar · Gallery Filter · Lightbox · FAQ · Animations
   ============================================================ */

/* ── Navbar scroll & active links ─────────────────────────── */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Mark active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── Gallery filter ────────────────────────────────────────── */
(function initGalleryFilter() {
  const filters = document.querySelectorAll('.gallery-filter');
  const items   = document.querySelectorAll('.gallery-item');
  if (!filters.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        if (cat === 'all' || item.dataset.cat === cat || (item.dataset.tags || '').includes(cat)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
})();

/* ── Lightbox ──────────────────────────────────────────────── */
(function initLightbox() {
  const box     = document.querySelector('.lightbox');
  if (!box) return;

  const img     = box.querySelector('.lightbox__img');
  const title   = box.querySelector('.lightbox__title');
  const caption = box.querySelector('.lightbox__caption-text');
  const closeBtn= box.querySelector('.lightbox__close');
  const prevBtn = box.querySelector('.lightbox__prev');
  const nextBtn = box.querySelector('.lightbox__next');

  let items = [];
  let current = 0;

  function open(index) {
    current = index;
    const item = items[current];
    img.src = item.src;
    img.alt = item.title;
    if (title)   title.textContent = item.title;
    if (caption) caption.textContent = item.caption;
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    current = (current + dir + items.length) % items.length;
    open(current);
  }

  document.querySelectorAll('.gallery-item:not(.hidden)').forEach(el => {
    el.addEventListener('click', () => {
      // rebuild visible items list each click
      items = [];
      document.querySelectorAll('.gallery-item:not(.hidden)').forEach((g, i) => {
        items.push({
          src:     g.querySelector('img')?.src || '',
          title:   g.dataset.title || '',
          caption: g.dataset.caption || '',
        });
        if (g === el) current = i;
      });
      open(current);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn)  prevBtn.addEventListener('click', () => navigate(-1));
  if (nextBtn)  nextBtn.addEventListener('click', () => navigate(1));

  box.addEventListener('click', e => { if (e.target === box) close(); });

  document.addEventListener('keydown', e => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
})();

/* ── FAQ accordion ─────────────────────────────────────────── */
(function initFAQ() {
  document.querySelectorAll('.faq-item__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ── Scroll animations (IntersectionObserver) ──────────────── */
(function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up, .stagger').forEach(el => observer.observe(el));
})();

/* ── Form submit (demo) ────────────────────────────────────── */
(function initForms() {
  document.querySelectorAll('form[data-demo]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sent ✓';
      btn.disabled = true;
      btn.style.background = '#2a6e3f';
      btn.style.borderColor = '#2a6e3f';
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
        form.reset();
      }, 3000);
    });
  });
})();

/* ── Counter animation ─────────────────────────────────────── */
(function initCounters() {
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString() + (el.dataset.suffix || '');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
})();
