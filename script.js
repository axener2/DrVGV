// Smooth scroll for in-page links (mobile pills)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.replaceState(null, '', '#'+id);
    }
  });
});

// Simple form handler: show custom message and clear fields
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thanks for getting in touch - Regards - Dr. VGV');
    form.reset();
  });
}
