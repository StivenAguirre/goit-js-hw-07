
import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryImages = (item) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
    </a>
 </li>`
   
}

const itemContainer = document.querySelector(".gallery");
for (const item of galleryItems) {
    const newItem = galleryImages(item);
    itemContainer.innerHTML += newItem;

 };

function inicializeSimpleLightBox() {
    const itemContainer = new SimpleLightbox('.gallery a', { /* options */ });
};

inicializeSimpleLightBox();

console.log(galleryItems);
