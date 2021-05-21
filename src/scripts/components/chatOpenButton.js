export default (element) => {
  element.hidden = false;

  element.addEventListener('click', () => {
    window._chatlio.open();
  });
};
