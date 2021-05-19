export default (element) => {
  element.addEventListener('click', () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  });
};
