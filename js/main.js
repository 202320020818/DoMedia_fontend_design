// Mobile nav toggle, smooth anchor scroll, and small UX niceties
(function(){
  const toggle = document.querySelector('.nav-space');
  const nav = document.querySelector('.nav');
  const links = nav.querySelectorAll('a');

  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on link click (mobile)
  links.forEach(a => a.addEventListener('click', closeMenu));

  // Smooth scroll for same-page anchors
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
    }
  });

  // Respect reduced motion
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.documentElement.style.scrollBehavior = 'auto';
  }
})();