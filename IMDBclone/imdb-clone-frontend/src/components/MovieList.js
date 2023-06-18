import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../redux/actions';

const MovieList = ({ movies, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <p>{movie.year}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
