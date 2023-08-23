// Setup module
// ------------------------------

const ecommerceBasic = (function () {
  //
  // Setup module components
  //


  // Variables
  const colors = {
    dark: {
      bulbGlass: '#010A13',
      bulbBlare: '#0A1428',
      bulbFilament: '#785A28',
    },
    light: {
      bulbGlass: '#C4C4C4',
      bulbBlare: '#ffffff',
      bulbFilament: '#C89B3C',
    }
  }

  const container = document.querySelector('.js-container');
  const bulb = document.querySelector('.js-lightbulb');
  const switchButton = document.querySelector('.js-switch-button');

  // EventListeners
  const _eventListeners = function () {
    switchButton.addEventListener('click', _toggleLightbulb)
  }

  // Toggle Lightbulb Effect
  const _toggleLightbulb = function () {
    const bulbGlass = bulb.getSVGDocument().getElementById("bulbGlass");
    const bulbBlare = bulb.getSVGDocument().getElementById("bulbBlare");
    const bulbFilament = bulb.getSVGDocument().getElementById("bulbFilament");

    if (!bulb.classList.contains('lighted')) {
      bulb.classList.add('lighted');
      container.classList.add('active');
      bulbGlass.setAttribute("stroke", colors.light.bulbGlass);
      bulbBlare.setAttribute("stroke", colors.light.bulbBlare);
      bulbFilament.setAttribute("stroke", colors.light.bulbFilament);
      this.innerHTML = 'Off'
    } else {
      bulb.classList.remove('lighted');
      container.classList.remove('active');
      bulbGlass.setAttribute("stroke", colors.dark.bulbGlass);
      bulbBlare.setAttribute("stroke", colors.dark.bulbBlare);
      bulbFilament.setAttribute("stroke", colors.dark.bulbFilament);
      this.innerHTML = 'On'
    }

  };


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
