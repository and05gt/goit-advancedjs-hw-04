import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '45098257-09112d803d024f473cdacef7f';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params: searchParams })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data', error);
      throw error;
    });
}
