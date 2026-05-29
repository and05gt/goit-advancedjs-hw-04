import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '45098257-09112d803d024f473cdacef7f';

export async function getImagesByQuery(query, page = 1) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };

  const response = await axios.get(BASE_URL, { params: searchParams });
  return response.data;
}
