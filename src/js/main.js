const {height: main} = document
  .querySelector('.header').getBoundingClientRect();

document.querySelector('.hero').style.paddingTop = `${main}px`;
