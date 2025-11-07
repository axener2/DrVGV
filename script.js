}
})();


// === Mobile menu toggle ===
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav){
    toggle.addEventListener('click', function(){
      const open = nav.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();


// Mobile menu toggle (robust)
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav){
    toggle.addEventListener('click', function(){
      const open = nav.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();


// ===== Mobile drawer toggle with backdrop =====
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const backdrop = document.getElementById('nav-backdrop');
  if (!toggle || !nav || !backdrop) return;

  function openNav(){
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded','true');
    backdrop.hidden = false;
  }
  function closeNav(){
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    backdrop.hidden = true;
  }
  toggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) closeNav(); else openNav();
  });
  backdrop.addEventListener('click', closeNav);
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') closeNav();
  });
})();

document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contact-form') || document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks for getting in touch - Regards - Dr. VGV');
    try { form.reset(); } catch(_) {}
  });
});

// === Simple public visitor counter (Cloudflare Worker + KV) ===
(function(){
  function updateCounter(){
    // 1) Increment on page load
    try { fetch('/__hit', { method: 'POST', keepalive: true }); } catch(e){}
    // 2) Fetch current total
    try {
      fetch('/__count', { cache: 'no-store' })
        .then(r => r.json())
        .then(d => {
          var el = document.getElementById('visitCount');
          if (el && d && typeof d.total !== 'undefined') {
            try { el.textContent = (d.total).toLocaleString(); }
            catch(_) { el.textContent = d.total; }
          }
        });
    } catch(e){}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCounter);
  } else {
    updateCounter();
  }
})();

