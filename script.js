
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});


// Mobile menu toggle ensure default collapsed
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    nav.classList.remove('open'); // default collapsed
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
  }
});


// --- Compact mode for small screens ---
(function(){
  const isPhone = window.matchMedia('(max-width: 720px)').matches;

  if(isPhone){
    // Hero summary expand/collapse
    const heroP = document.getElementById('hero-summary');
    const heroMore = document.getElementById('hero-more');
    if(heroP && heroMore){
      heroMore.addEventListener('click', () => {
        heroP.classList.toggle('compact-truncated');
        heroMore.textContent = heroP.classList.contains('compact-truncated') ? 'Read more' : 'Show less';
      });
    }

    // Experience: show only first 2 items initially
    const expItems = Array.from(document.querySelectorAll('#experience .timeline .item'));
    const expToggle = document.getElementById('exp-toggle');
    if(expItems.length > 2 && expToggle){
      for(let i=2;i<expItems.length;i++){ expItems[i].classList.add('collapsed'); }
      expToggle.addEventListener('click', () => {
        const hidden = expItems.slice(2).some(el => el.classList.contains('collapsed'));
        expItems.slice(2).forEach(el => el.classList.toggle('collapsed'));
        expToggle.textContent = hidden ? 'Hide experience' : 'Show full experience';
      });
    }

    // Publications: show top 3 initially
    const pubLis = Array.from(document.querySelectorAll('#publications .pubs > li'));
    const pubsToggle = document.getElementById('pubs-toggle');
    if(pubLis.length > 3 && pubsToggle){
      for(let i=3;i<pubLis.length;i++){ pubLis[i].classList.add('collapsed'); }
      pubsToggle.addEventListener('click', () => {
        const hidden = pubLis.slice(3).some(el => el.classList.contains('collapsed'));
        pubLis.slice(3).forEach(el => el.classList.toggle('collapsed'));
        pubsToggle.textContent = hidden ? 'Hide publications' : 'Show all publications';
      });
    }

    // Leadership: show first 4 initially
    const assocLis = Array.from(document.querySelectorAll('#associations .list > li'));
    const assocToggle = document.getElementById('assoc-toggle');
    if(assocLis.length > 4 && assocToggle){
      for(let i=4;i<assocLis.length;i++){ assocLis[i].classList.add('collapsed'); }
      assocToggle.addEventListener('click', () => {
        const hidden = assocLis.slice(4).some(el => el.classList.contains('collapsed'));
        assocLis.slice(4).forEach(el => el.classList.toggle('collapsed'));
        assocToggle.textContent = hidden ? 'Hide' : 'Show all';
      });
    }
  }
})();
