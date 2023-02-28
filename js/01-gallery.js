import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");


const createEL = createCards(galleryItems);

gallery.insertAdjacentHTML('beforeend', createEL)
card.addEventListener('click', onClick)
gallery.addEventListener('click', close)

function createCards(){
  return galleryItems.map(({original,preview,description}) => {
return`
<div class="gallery__item">
<a href="${original}" class="gallery__link"  rel = ”noreferrer noopener”>
<img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
</a>
</div>
`


}).join("")
}


gallery.innerHTML = createEL;

gallery.addEventListener('click', onLinkClick);

function onLinkClick(event) {
    event.preventDefault();
	const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.currentTarget.dataset.data-source}">
	`)
	instance.show()
}

console.log(galleryItems);