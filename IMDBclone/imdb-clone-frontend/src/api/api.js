import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const response = await axios.get('/api/movies');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch movies');
  }
};

export const addMovie = async (movieData) => {
  try {
    const response = await axios.post('/api/movies', movieData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add movie');
  }
};

export const editMovie = async (movieId, movieData) => {
  try {
    const response = await axios.put(`/api/movies/${movieId}`, movieData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to edit movie');
  }
};
