import { galleryItems } from './gallery-items.js';



const galleryList = document.querySelector('.gallery');
const galleryItem = document.querySelector('.gallery__item');

const markup = galleryItems.map
    (item => {
    return `<div class="gallery__item"> <a class="gallery__link" href="large-image.jpg"> <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`
    } ).join('')
galleryList.innerHTML = markup

function onGalleryItemClick(e) {
    e.preventDefault()
    // console.log(e.target);
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const origImage = e.target.dataset.source
    const instance = basicLightbox.create(`<img src="${origImage}">`)
    instance.show()
    const visible = instance.visible()
    if (visible) {
        galleryList.addEventListener('keydown', (e) => {
            console.log(e.code);
            if (e.code === 'Escape') {
                instance.close()
            }
        })
    }
}

galleryList.addEventListener('click', onGalleryItemClick)