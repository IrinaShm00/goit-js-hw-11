export function displayImages(images, galleryElement) {
  galleryElement.innerHTML = ''; // Очистка галереи перед добавлением новых изображений
  if (images.hits.length === 0) {
    iziToast.info({
      title: 'Info',
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  const markup = images.hits
    .map(
      (image) => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
    </a>
  `
    )
    .join('');
  galleryElement.insertAdjacentHTML('beforeend', markup);
     setTimeout(() => {
    lightbox.refresh();
  }, 0);
}

 
