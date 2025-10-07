// Simple mobile nav toggle & year
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  btn && btn.addEventListener('click', ()=> {
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  });

  // Year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;
});
