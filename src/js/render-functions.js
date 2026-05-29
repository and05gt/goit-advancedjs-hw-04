import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a class="gallery-link" href=${largeImageURL}>
        <img
          class="gallery-image"
          src=${webformatURL}
          alt=${tags}
        />
        <ul class="info">
          <li class="info-item">
            <h3>Likes</h3>
            <p>${likes}</p>
          </li>
          <li class="info-item">
            <h3>Views</h3>
            <p>${views}</p>
          </li>
          <li class="info-item">
            <h3>Comments</h3>
            <p>${comments}</p>
          </li>
          <li class="info-item">
            <h3>Downloads</h3>
            <p>${downloads}</p>
          </li>
        </ul>
      </a>
    </li>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  if (loader) {
    loader.classList.add('loader-active');
  }
}

export function hideLoader() {
  if (loader) {
    loader.classList.remove('loader-active');
  }
}
