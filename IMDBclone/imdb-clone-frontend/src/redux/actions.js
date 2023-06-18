import axios from 'axios';

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/movies');
      dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const addMovie = (movieData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/movies', movieData);
      dispatch({ type: 'ADD_MOVIE_SUCCESS', payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const editMovie = (movieId, movieData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/movies/${movieId}`, movieData);
      dispatch({ type: 'EDIT_MOVIE_SUCCESS', payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};
