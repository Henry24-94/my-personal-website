/* script.js
   Handles:
   - mobile menu toggle (preserve behavior)
   - animate-on-scroll with IntersectionObserver (smooth & efficient)
   - navbar scrolled state
   - dynamic theme toggle button (created if missing) + persistence
   - safe guards if elements missing
*/

(function(){
  'use strict';

  /* --- selectors --- */
  const navContainer = document.querySelector('.nav-container') || document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarWrapper = document.querySelector('.navbar');

  /* --- Mobile menu toggle (keeps your behavior) --- */
  if(hamburger && navMenu){
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }

  if(navLinks && navLinks.length){
    navLinks.forEach(link => link.addEventListener('click', () => {
      if(navMenu) navMenu.classList.remove('active');
    }));
  }

  /* --- Smooth scrolling (native) --- */
  try{ document.documentElement.style.scrollBehavior = 'smooth'; }catch(e){ /* ignore */ }

  /* --- IntersectionObserver for reveal animations --- */
  const animated = document.querySelectorAll('.animate');
  if(animated.length && 'IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          o.unobserve(entry.target); // reveal once
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0.12 });

    animated.forEach(el => obs.observe(el));
  } else {
    // fallback: reveal immediately
    animated.forEach(el => el.classList.add('show'));
  }

  /* --- Navbar scroll effect --- */
  const handleNavScroll = () => {
    if(!navbarWrapper) return;
    const scrolled = window.scrollY > 40;
    navbarWrapper.classList.toggle('scrolled', scrolled);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  window.addEventListener('load', handleNavScroll);

  /* --- Theme handling: dark default, create toggle if not present --- */
  const THEME_KEY = 'site-theme';
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const stored = localStorage.getItem(THEME_KEY);

  // default to dark if no preference stored
  const initialTheme = stored || (prefersDark ? 'dark' : 'dark');

  // apply theme styling (dark by default)
  function applyTheme(name){
    if(name === 'dark'){
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
      document.body.classList.add('dark-theme-applied'); // for css hooks if needed
    } else {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
      document.body.classList.remove('dark-theme-applied');
    }
  }
  applyTheme(initialTheme);

  // create a theme toggle button in the nav if missing
  function createThemeToggle(){
    if(!navContainer) return null;
    // don't create if already exists
    if(document.querySelector('.theme-toggle')) return document.querySelector('.theme-toggle');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle';
    btn.title = 'Toggle theme';
    btn.setAttribute('aria-label','Toggle theme');
    // icon + label
    btn.innerHTML = initialTheme === 'dark' ? '☀️' : '🌙';

    // insert before hamburger if present, else append
    const ref = navContainer.querySelector('.hamburger') || navContainer.querySelector('.nav-menu');
    navContainer.insertBefore(btn, ref);

    return btn;
  }

  const themeToggleBtn = createThemeToggle();

  function toggleTheme(){
    const current = localStorage.getItem(THEME_KEY) || initialTheme;
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
    if(themeToggleBtn) themeToggleBtn.innerHTML = next === 'dark' ? '☀️' : '🌙';
  }

  if(themeToggleBtn){
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // ensure persisted theme on load
  window.addEventListener('load', () => {
    const v = localStorage.getItem(THEME_KEY);
    if(v) applyTheme(v);
    if(themeToggleBtn) themeToggleBtn.innerHTML = (v === 'light') ? '🌙' : '☀️';
  });

  /* --- small accessibility improvement: respect reduced motion --- */
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion){
    // kill animations
    document.documentElement.classList.add('reduced-motion');
  }

})();
