const ham = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
 
if (ham && navLinks) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
 
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}
 
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.gpu-card');
 
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
 
    const brand = btn.dataset.filter;
 
    cards.forEach(card => {
      if (brand === 'all' || card.dataset.brand === brand) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
 
const barFills = document.querySelectorAll('.bar-fill');
if (barFills.length > 0) {
  const stored = {};
  barFills.forEach(bar => {
    const w = bar.style.width;
    stored[bar] = w;
    bar.style.width = '0%';
  });
 
  setTimeout(() => {
    barFills.forEach(bar => {
      bar.style.width = stored[bar];
    });
  }, 200);
}