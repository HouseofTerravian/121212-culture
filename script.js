/* ============================================
   121212.CULTURE — script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Scroll Progress Bar ─── */
  const progressBar = document.getElementById('scroll-progress');
  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  /* ─── Nav Shadow on Scroll ─── */
  const mainNav = document.getElementById('main-nav');
  const categoryBar = document.getElementById('category-bar');

  function handleScroll() {
    updateProgress();

    const scrollY = window.scrollY;

    if (scrollY > 20) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }

    // Category bar stuck class
    if (categoryBar) {
      const catTop = categoryBar.getBoundingClientRect().top;
      if (catTop <= 70) {
        categoryBar.classList.add('stuck');
      } else {
        categoryBar.classList.remove('stuck');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ─── Mobile Hamburger Menu ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ─── Category Filter ─── */
  const pills = document.querySelectorAll('.pill');
  const cards = document.querySelectorAll('.culture-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Active state
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;

      cards.forEach(card => {
        const cardCat = card.dataset.cat;

        if (filter === 'all' || cardCat === filter) {
          card.classList.remove('hidden');
          // Re-trigger reveal animation
          card.classList.remove('visible');
          requestAnimationFrame(() => {
            card.classList.add('visible');
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* ─── Intersection Observer (Reveal on Scroll) ─── */
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));

  /* ─── Form Submit Handler ─── */
  const submitForm = document.getElementById('submit-form');
  const formSuccess = document.getElementById('form-success');

  if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = submitForm.querySelector('.form-submit-btn');
      btn.textContent = 'Submitting...';
      btn.disabled = true;

      // Simulate async submit
      setTimeout(() => {
        submitForm.style.display = 'none';
        if (formSuccess) {
          formSuccess.style.display = 'block';
        }
      }, 1200);
    });
  }

  /* ─── Hero Fade Animations ─── */
  const heroEls = document.querySelectorAll('.fade-up-delay-1, .fade-up-delay-2, .fade-up-delay-3, .fade-up-delay-4');
  heroEls.forEach(el => el.classList.add('fade-up'));

  /* ─── Smooth anchor scroll with offset ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;

      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 10;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
