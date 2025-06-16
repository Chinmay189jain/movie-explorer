import axios  from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const searchMovies = async (query: String) => {
    const response = await axios.get(`${BASE_URL}/search/movie`,{
        params: {
            api_key: API_KEY,
            query
        }
    });
    return response.data.results;
}; 