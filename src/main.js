// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Custom CSS
import './css/styles.css';

import { fetchImages as pixabayFetchImages } from './js/pixabay-api.js'; // Импорт API-запросов
import { displayImages } from './js/render-functions.js';


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const searchForm = document.getElementById('search-form');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

// Функции для управления загрузчиком
function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

// Обновленная функция fetchImages с управлением загрузчиком
async function fetchImages(query) {
  try {
    showLoader();
      const response = await pixabayFetchImages(query);
      console.log('API Response:', response);  // Проверяем ответ API
    return response; // Возвращаем результат
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error; // Пробрасываем ошибку дальше
  } finally {
    hideLoader();
  }
}

// Обработчик отправки формы
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log('Form submitted');

  const searchQuery = searchForm.elements.query.value.trim();
  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  // Очистка галереи перед новым запросом
  gallery.innerHTML = '';

  try {
    const images = await fetchImages(searchQuery); 
      displayImages(images, gallery);
      lightbox.refresh();
  } catch (error) {
      console.log(error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images.',
    });
  }
});

// Функция для отображения изображений перенесла в рендер
