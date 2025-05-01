import axios from 'axios';

const API_KEY = '264c86aa07cd5f07be6a0b0ce77a42b2';
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',   // TMDB base URL
});

export const searchMovies = async (query, page = 1) => {
  try {
    // Make a GET request to /search/movie with query and page parameters
    const response = await api.get('/search/movie', {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    });
    return response.data; // Contains results and pagination info
  } catch (error) {
    console.error('Error fetching movies:', error);
    // On error, return an empty structure
    return { results: [], total_pages: 0 };
  }
};
