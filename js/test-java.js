// Simple interactions: fill year and smooth anchor scroll
document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target){
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 24,
          behavior: 'smooth'
        });
        // set focus for accessibility
        target.setAttribute('tabindex','-1');
        target.focus();
      }
    });
  });

  // Improve keyboard expand/collapse for details (open on Enter/Space)
  document.querySelectorAll('details summary').forEach(summary=>{
    summary.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        const details = this.parentElement;
        details.open = !details.open;
      }
    });
  });
});

