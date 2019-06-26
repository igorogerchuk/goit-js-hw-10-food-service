import menu from '../menu.json';
import postFeedTemplate from '../templates/post-feed.hbs';

const refs = {
  postFeed: document.querySelector('.menu'),
};

const markup = postFeedTemplate(menu);

refs.postFeed.insertAdjacentHTML('beforeend', markup);
