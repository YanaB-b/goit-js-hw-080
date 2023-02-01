// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBoxRef = document.querySelector('.gallery');
const galleryBoxMarkup = createBoxItem(galleryItems);
galleryBoxRef.insertAdjacentHTML('afterbegin',galleryBoxMarkup);

function createBoxItem(galleryItems){
    return galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`)
  .join('');
}

const galleryBoxModal = new SimpleLightbox('.gallery a',
{
    captionsData : 'alt',
    captionsDelay: 250,
})
