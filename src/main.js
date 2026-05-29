import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

searchForm.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', handleLoadMore);

let searchQuery = '';
let currentPage = 1;
const PER_PAGE = 15;

async function handleSearch(e) {
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

  searchQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);
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

    if (data.totalHits > PER_PAGE) {
      showLoadMoreButton();
    }
  } catch (error) {
    return iziToast.error({
      title: 'Error',
      titleColor: '#fff',
      message: `${error}`,
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      theme: 'dark',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function handleLoadMore() {
  currentPage += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);

    createGallery(data.hits);
    smoothScroll();

    const totalPage = Math.ceil(data.totalHits / PER_PAGE);

    if (currentPage >= totalPage) {
      iziToast.info({
        title: 'Info',
        titleColor: '#fff',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: '#0099ff',
        messageColor: '#fff',
        theme: 'dark',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    return iziToast.error({
      title: 'Error',
      titleColor: '#fff',
      message: `${error}`,
      position: 'topRight',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      theme: 'dark',
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');

  if (galleryItem) {
    const { height: cardHeight } = galleryItem.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
