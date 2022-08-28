import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallaryListEl = document.querySelector('.gallery');

const galleryItemsEl = createGalery(galleryItems);

gallaryListEl.innerHTML = galleryItemsEl;

function createGalery(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title= "${description}"/>
</a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
