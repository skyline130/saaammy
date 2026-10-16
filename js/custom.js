(function ($) {
  "use strict";
  $(window).on('load', function () { $('.preloader').fadeOut(150); });
  $('a[href^="#"]').on('click', function (event) {
    var target = document.getElementById(this.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 100, behavior: reduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', this.hash);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    var menu = document.getElementById('navbarNav');
    if (menu.classList.contains('collapsing')) {
      menu.addEventListener('shown.bs.collapse', function () {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }, { once: true });
    } else if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
})(window.jQuery);
