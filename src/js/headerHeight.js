const {height: headerHeight} = document
  .querySelector('.header').getBoundingClientRect();

document.querySelector('.hero').style.paddingTop = `${headerHeight}px`;
