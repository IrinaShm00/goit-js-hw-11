// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Custom CSS
import '../css/styles.css';

import { fetchImages } from './api.js'; // Импорт API-запросов

const searchForm = document.getElementById('search-form');
const gallery = document.getElementById('gallery');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.query.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  // Отправляем запрос к API
  try {
    const images = await fetchImages(query);
    displayImages(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images.',
    });
  }
});

function displayImages(images) {
  gallery.innerHTML = ''; // Очистка галереи перед добавлением новых изображений
  if (images.hits.length === 0) {
    iziToast.info({
      title: 'Info',
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  images.hits.forEach(image => {
    const item = document.createElement('a');
    item.href = image.largeImageURL;
    item.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.classList.add('gallery-image');

    item.appendChild(img);
    gallery.appendChild(item);
  });

  // Подключаем библиотеку SimpleLightbox
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
