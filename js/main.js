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

})();