// script.js
// Comentarios en español: comportamiento mínimo para la demo.

// Ajusta el año del footer automáticamente
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Si quieres animar el scroll hacia el listado al hacer click en "Get started"
document.querySelectorAll('.cta').forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    const listings = document.querySelector('.main-content');
    if (listings) listings.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
