import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editMovie } from '../redux/actions';

const EditMovie = ({ movie, editMovie }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (movie) {
      setName(movie.name);
      setYear(movie.year);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editMovie(movie.id, { name, year });
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  movie: state.movies.find((movie) => movie.id === ownProps.match.params.id),
});

const mapDispatchToProps = {
  editMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
