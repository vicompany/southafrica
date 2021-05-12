const buttonTop = document.getElementById('button-top');

buttonTop.addEventListener('click', () => {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  });
});
