import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

function createMarkUp(arr) {
    return arr.map (({preview, description, original})=>{
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`
    }).join("")

}

const markUp = createMarkUp(galleryItems)
console.log(markUp);

gallery.insertAdjacentHTML('beforeend', markUp)

const lightBox = new SimpleLightbox('.gallery__link', { captionsData:"alt", captionDelay:250 });

gallery.addEventListener("click", onClick)
function onClick(evt){
    evt.preventDefault()
    lightBox.open()
  
}