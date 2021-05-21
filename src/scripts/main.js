import createChatOpenButton from './components/chatOpenButton';
import createHeaderComponent from './components/header';
import createScrollToTopButton from './components/scrollToTopButton';

for (const button of document.querySelectorAll('[data-chat-open]')) {
  createChatOpenButton(button);
}

createHeaderComponent(document.getElementById('header-sticky'), {
  jumbotron: document.getElementById('jumbotron'),
});

createScrollToTopButton(document.getElementById('button-top'));
