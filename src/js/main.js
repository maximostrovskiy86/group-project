const {height: main} = document
  .querySelector('.header').getBoundingClientRect();

document.querySelector('.hero').style.paddingTop = `${main}px`;


$('.wrapper-slayder').slick({
  dots: true,
  speed: 1000,
  easing: 'ease',
  // autoplay: true,
  autoplayspeed: 3500,
  adaptiveHeight: true,
  arrows: false,
});