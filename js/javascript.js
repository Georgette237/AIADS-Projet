// Shared JS: mobile menu, smooth scroll, nav active state, simple form handler
document.addEventListener('DOMContentLoaded', function() {

  /* Smooth scroll for same-page anchors */
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  /* Mobile menu toggle (simple) */
  function toggleMobileMenu() {
    const menu = document.querySelector('.mainnav');
    if(!menu) return;
    menu.classList.toggle('open');
  }
  document.querySelectorAll('.mobile-menu-btn').forEach(btn=>{
    btn.addEventListener('click', toggleMobileMenu);
  });

  /* Add active class to nav based on current file name */
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.mainnav .nav-link').forEach(link=>{
    const href = link.getAttribute('href');
    if(href === path || (href === 'index.html' && (path === '' || path === 'index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  /* Simple forms handler (demo - replace by server integration) */
  document.querySelectorAll('form').forEach(form=>{
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const msgEl = this.querySelector('.notice') || document.getElementById('contactMsg');
      if(msgEl){
        msgEl.style.display = 'block';
        msgEl.textContent = 'Merci — votre message a été pris en compte. Nous vous contacterons sous 48h ouvrées.';
      } else {
        alert('Merci — message envoyé (mode démo).');
      }
      this.reset();
      setTimeout(()=>{ if(msgEl) msgEl.style.display='none' }, 5000);
    });
  });

});
