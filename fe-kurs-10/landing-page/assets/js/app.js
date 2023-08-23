
// Setup module
// ------------------------------

const ecommerceBasic = (function () {
  //
  // Setup module components
  //

  // Variables 
  const header = document.querySelector('.js-header');
  const navbarMobileTrigger = document.querySelector('.js-navbar-mobile-trigger');
  const navbarMobile = document.querySelector('.js-navbar-mobile');
  const navMobile = navbarMobile.querySelector('nav');

  // Event Listeners
  const _eventListeners = function () {
    document.addEventListener('scroll', _windowScrollCheck);
    navbarMobileTrigger.addEventListener('click', _navbarMobileToggler);
  }

  // Window Scroll Check
  const _windowScrollCheck = function () {
    let scrollYPosition = window.scrollY;
    scrollYPosition > 1 ? header.classList.add('sticky') : header.classList.remove('sticky')
  };

  const _navbarMobileToggler = function () {
    navbarMobile.classList.contains('active')
      ? navbarMobile.classList.remove('active')
      : navbarMobile.classList.add('active');

    navbarMobile.classList.contains('active')
      ? navMobile.classList.add('drop_menu_animation_half_second')
      : navMobile.classList.remove('drop_menu_animation_half_second');
  }


  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _eventListeners();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  ecommerceBasic.init();
});
