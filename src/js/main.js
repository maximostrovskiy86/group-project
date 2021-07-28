// const {height: main} = document
//   .querySelector('.header').getBoundingClientRect();
//
// document.querySelector('.hero').style.paddingTop = `${main}px`;

function closeMenu() {
  document.querySelector('.mobile-menu').classList.remove('is-open');
}
document.querySelectorAll('.mobile-menu-link').forEach(elem => {
  elem.onclick = closeMenu;
});

$('.wrapper-slayder').slick({
  dots: true,
  speed: 1000,
  easing: 'ease',
  // autoplay: true,
  autoplayspeed: 3500,
  adaptiveHeight: true,
  arrows: false,
});

jQuery(function (jQuery) {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 140) {
      jQuery('.header').addClass('header-scroll');
    } else if ($(this).scrollTop() < 140) {
      jQuery('.header').removeClass('header-scroll');
    }
  });
});


$(document).ready(function () {
  $(".navigation, .mobile-menu__navigation, .button-scroll").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top + (-50);
    $('body,html').animate({scrollTop: top}, 1250);
  });
});