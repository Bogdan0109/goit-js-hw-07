import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("ul.gallery");

const galleryImgs = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
    })
    .join("");
};

const photos = galleryImgs(galleryItems);
gallery.insertAdjacentHTML("beforeend", photos);

let gallerySimpleLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
gallerySimpleLightbox.on("show.simplelightbox", function () {
  gallerySimpleLightbox.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      close.simplelightbox;
    }
  });
});

// gallery.addEventListener("click", markup);

// function markup(evt) {
//   evt.preventDefault();

//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }

//   lightbox.on("show.simplelightbox", function (evt) {
//     evt.preventDefault();

//     if (evt.target.nodeName !== "IMG") {
//       return;
//     }

//     galleryA.next(
//       `<img src="${evt.target.dataset.source}" width="800" height="600" />`
//     ); // Next
//   });

//   gallery.addEventListener("keydown", (evt) => {
//     if (evt.code === "Escape") {
//       instance.close();
//     }
//   });
// }

// console.log(galleryItems);
