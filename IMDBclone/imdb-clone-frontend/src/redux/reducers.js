const initialState = {
    movies: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_SUCCESS':
        return { ...state, movies: action.payload };
      case 'ADD_MOVIE_SUCCESS':
        return { ...state, movies: [...state.movies, action.payload] };
      case 'EDIT_MOVIE_SUCCESS':
        return {
          ...state,
          movies: state.movies.map((movie) =>
            movie.id === action.payload.id ? action.payload : movie
          ),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  