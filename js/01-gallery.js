import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на ul.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

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
renderListGalarry.addEventListener("click", selectGallaryEl);

function selectGallaryEl(event) {
  const imageGallary = event.target.classList.contains("gallery__image");
  // console.log(event.target);
  event.preventDefault();
  if (!imageGallary) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`
  );

  instance.show();
}
// console.log(galleryItems);
