import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import markup from './gallery-app/markup';
import refs from './gallery-app/refs';

refs.gallery.innerHTML = markup;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log('hello World');
