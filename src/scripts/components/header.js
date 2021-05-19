export default (element, { jumbotron }) => {
  const observer = new IntersectionObserver(([entry]) => {
    element.hidden = entry.isIntersecting;
  });

  observer.observe(jumbotron);
};
