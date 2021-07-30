import '/js/mobile-menu.js';
import '/js/modal-menu.js';
import '/js/modal-hero.js';
import '/js/products-modal-1.js';
import '/js/products-modal-2.js';
import '/js/products-modal-3.js';
import '/js/modal_about.js';
import '/js/modal-contacts.js';
import '/js/map-modal.js';

// CLOSE MOBILE MENU
function closeMenu() {
  document.querySelector('.mobile-menu').classList.remove('is-open');
  document.querySelector('.burger').classList.toggle('icon');
}

document.querySelectorAll('.mobile-menu-link').forEach(elem => {
  elem.onclick = closeMenu;
});

// SLICK
$('.wrapper-slayder').slick({
  dots: true,
  speed: 1000,
  easing: 'ease',
  autoplay: true,
  autoplayspeed: 3500,
  adaptiveHeight: true,
  arrows: false,
});

//MODAL PRODUCTS
$('button.btn-1').click(function () {
  $('.products-modal-1')[0].contentWindow.postMessage(
    '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
    '*',
  );
});
$('button.btn-2').click(function () {
  $('.products-modal-2')[0].contentWindow.postMessage(
    '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
    '*',
  );
});
$('button.btn-3').click(function () {
  $('.products-modal-3')[0].contentWindow.postMessage(
    '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
    '*',
  );
});

//HEADER
jQuery(function (jQuery) {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 140) {
      jQuery('.header').addClass('header-scroll');
    } else if ($(this).scrollTop() < 140) {
      jQuery('.header').removeClass('header-scroll');
    }
  });
});

// SCROLL
$(document).ready(function () {
  $('.navigation, .mobile-menu__navigation, .button-scroll').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top + -50;
    $('body,html').animate({ scrollTop: top }, 1250);
  });
});

// AOS.init();
