import createHeaderComponent from './components/header';
import createScrollToTopButton from './components/scrollToTopButton';

createHeaderComponent(document.getElementById('header-sticky'), {
  jumbotron: document.getElementById('jumbotron'),
});

createScrollToTopButton(document.getElementById('button-top'));
