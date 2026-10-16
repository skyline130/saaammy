(function ($) {
  "use strict";
  var links = $('.navbar-nav .nav-link');
  var sections = $('main > section[id]');
  function updateNavigation() {
    var active = sections.first().attr('id');
    sections.each(function () {
      if (window.scrollY >= $(this).offset().top - 120) active = this.id;
    });
    links.each(function () {
      var selected = this.getAttribute('href') === '#' + active;
      $(this).toggleClass('active', selected);
      if (selected) this.setAttribute('aria-current', 'location');
      else this.removeAttribute('aria-current');
    });
  }
  $(window).on('scroll resize', updateNavigation);
  $(updateNavigation);
})(window.jQuery);
