/* ================================================================
   Med Ambulances — script.js
   Carousel + Sticky Header + Scroll Reveal + Floating Button
   ================================================================ */

(function () {
  'use strict';

  /* ---- Sticky Header ---- */
  const header = document.getElementById('site-header');

  function updateHeader() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ---- Floating Button Visibility ---- */
  const floatingBtn = document.getElementById('floatingBtn');
  const heroSection = document.getElementById('hero');

  function updateFloatingBtn() {
    if (!floatingBtn || !heroSection) return;

    const heroRect = heroSection.getBoundingClientRect();
    const footerEl = document.querySelector('footer');

    // Show after scrolling past hero
    const pastHero = heroRect.bottom < 0;

    // Hide when footer is visible
    let nearFooter = false;
    if (footerEl) {
      const footerRect = footerEl.getBoundingClientRect();
      nearFooter = footerRect.top < window.innerHeight - 80;
    }

    if (pastHero && !nearFooter) {
      floatingBtn.classList.remove('hidden-float');
    } else {
      floatingBtn.classList.add('hidden-float');
    }
  }

  window.addEventListener('scroll', updateFloatingBtn, { passive: true });
  updateFloatingBtn();

  /* ---- Carousel / Slider ---- */
  const track = document.getElementById('carouselTrack');
  const dots  = document.querySelectorAll('#carouselDots .dot');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');

  if (!track) return;

  const slides    = track.querySelectorAll('.carousel-slide');
  const total     = slides.length;
  let   current   = 0;
  let   autoTimer = null;
  const AUTO_DELAY = 4500;

  function goTo(index) {
    // Wrap around
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    // Update dots
    dots.forEach((dot, i) => {
      const isActive = i === current;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });

    // Update slide aria-hidden
    slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', String(i !== current));
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, AUTO_DELAY);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Button events
  nextBtn.addEventListener('click', () => { next(); startAuto(); });
  prevBtn.addEventListener('click', () => { prev(); startAuto(); });

  // Dot events
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10);
      goTo(idx);
      startAuto();
    });
  });

  // Pause on hover / touch
  const carouselContainer = track.closest('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAuto);
    carouselContainer.addEventListener('mouseleave', startAuto);
    carouselContainer.addEventListener('focusin',  stopAuto);
    carouselContainer.addEventListener('focusout', startAuto);
  }

  // Touch / swipe support
  let touchStartX = 0;
  let touchDeltaX = 0;
  let isDragging  = false;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    isDragging = false;
    stopAuto();
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
    isDragging = Math.abs(touchDeltaX) > 5;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (isDragging) {
      if (touchDeltaX < -40) next();
      else if (touchDeltaX > 40) prev();
    }
    touchDeltaX = 0;
    isDragging = false;
    startAuto();
  });

  // Keyboard navigation within carousel
  carouselContainer && carouselContainer.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { next(); startAuto(); }
    if (e.key === 'ArrowLeft')  { prev(); startAuto(); }
  });

  // Init
  goTo(0);
  startAuto();

  /* ---- Scroll Reveal (Intersection Observer) ---- */
  const revealEls = document.querySelectorAll('.card-promesse, .step-card, .service-card, .zone-badge');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealEls.forEach((el) => el.classList.add('reveal', 'visible'));
  }

  /* ---- 3D Tilt Effect ---- */
  function initTilt(selector) {
    document.querySelectorAll(selector).forEach((card) => {
      const shine = card.querySelector('.tilt-shine');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width  / 2;
        const cy = rect.height / 2;

        const rotateX = ((y - cy) / cy) * -9;
        const rotateY = ((x - cx) / cx) *  9;

        card.style.transform =
          `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;

        if (shine) {
          const pctX = ((x / rect.width)  * 100).toFixed(1);
          const pctY = ((y / rect.height) * 100).toFixed(1);
          shine.style.setProperty('--mx', `${pctX}%`);
          shine.style.setProperty('--my', `${pctY}%`);
        }

        card.classList.add('tilt-active');
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.classList.remove('tilt-active');
      });
    });
  }

  initTilt('.tilt-card, .avis-card');

  /* ---- Logo fallback handler ---- */
  const logoImg = document.querySelector('img[alt="Logo Med Ambulances"]');
  const logoFallback = document.querySelector('.logo-fallback');

  if (logoImg && logoFallback) {
    logoImg.addEventListener('error', () => {
      logoImg.style.display = 'none';
      logoFallback.style.display = 'flex';
    });

    // Also check if already broken (cached)
    if (!logoImg.complete || logoImg.naturalWidth === 0) {
      logoImg.style.display = 'none';
      logoFallback.style.display = 'flex';
    }
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // header height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
