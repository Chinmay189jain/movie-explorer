import axios  from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query: String, page: number = 1) => {
    const response = await axios.get(`${BASE_URL}/search/movie`,{
        params: {
            api_key: API_KEY,
            query,
            page
        }
    });
    return response.data; // returns { results, total_pages, page }
}; 

export const getMovieDetails = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};