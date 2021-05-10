const elementHeader = document.getElementById('header');
const elementJumbotron = document.getElementById('jumbotron');

const observer = new IntersectionObserver(([state]) => {
  if (state.isIntersecting) {
    elementHeader.classList.remove('header--sticky');
  } else {
    console.log('make sticky');
    elementHeader.classList.add('header--sticky');
    elementHeader.classList.add('header--sticky-animation-start');

    setTimeout(() => {
      elementHeader.classList.remove('header--sticky-animation-start');
    }, 100);
  }
});

observer.observe(elementJumbotron);
