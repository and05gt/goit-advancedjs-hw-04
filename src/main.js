import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const query = form.elements['search-text'].value.trim();

  if (query === '') {
    return iziToast.warning({
      title: 'Warning',
      titleColor: '#fff',
      message: 'Please enter a search query!',
      position: 'topRight',
      backgroundColor: '#ffa000',
      messageColor: '#fff',
      theme: 'dark',
    });
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.error({
          title: 'Error',
          titleColor: '#fff',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          theme: 'dark',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(error => {
      return iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        message: `${error}`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        theme: 'dark',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
