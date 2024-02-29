import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

import markup from './markup';
import refs from './refs';

refs.gallery.innerHTML = markup;

// console.log(refs.gallery);
// simpleLightbox(refs.gallery);
let gallery = new SimpleLightbox('.gallery a', {
  //   overlay: false,+
  overlayOpacity: 0.7,
  //   captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.on('show.simplelightbox', function () {
  //   // Do something…
});

gallery.on('error.simplelightbox', function (e) {
  console.log(e); // Some usefull information
});
