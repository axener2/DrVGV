// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  });
});

// Demo form behavior
const form = document.getElementById('contact-form');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thanks for getting in touch – Regards – Dr. VGV');
    form.reset();
  });
}
