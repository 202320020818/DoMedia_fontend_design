// Mobile nav toggle, smooth anchor scroll, and small UX niceties
(function () {
  const toggle = document.querySelector('.nav-space');
  const nav = document.querySelector('.nav');
  const links = nav ? nav.querySelectorAll('a') : [];
  const header = document.querySelector('.site-header');

  const closeMenu = () => {
    if (nav) nav.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  };

  if (toggle) {
    toggle.addEventListener('click', () => {
      if (!nav) return;
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Close menu on link click (mobile)
  links.forEach(a => a.addEventListener('click', closeMenu));

  // Smooth scroll for same-page anchors
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();

      // Calculate real header height
      const headerHeight = header ? header.offsetHeight : 0;
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  });

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
  }
})();
