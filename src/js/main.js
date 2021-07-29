// CLOSE MOBILE MENU

function closeMenu() {
  document.querySelector('.mobile-menu').classList.remove('is-open');
  // document.querySelector('.svg-icon').classList.replace('burger', 'cross');
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
  $('.products-modal-1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});
$('button.btn-2').click(function () {
  $('.products-modal-2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});
$('button.btn-3').click(function () {
  $('.products-modal-3')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
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
  $(".navigation, .mobile-menu__navigation, .button-scroll").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top + (-50);
    $('body,html').animate({scrollTop: top}, 1250);
  });
});