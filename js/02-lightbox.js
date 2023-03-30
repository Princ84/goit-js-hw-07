import { galleryItems } from "./gallery-items.js";
// Change code below this line
const renderListGalarry = document.querySelector(".gallery");
// console.log(renderListGalarry);

const galleryListToString = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (acc += `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        
        `);
  },
  ""
);
renderListGalarry.insertAdjacentHTML("beforeend", galleryListToString);
const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 1000,
});

// console.log(galleryItems);
