import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../redux/actions';

const AddMovie = ({ addMovie }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ name, year });
    // Reset form after submitting
    setName('');
    setYear('');
  };

  return (
    <div>
      <h1>Add Movie</h1>
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
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addMovie,
};

export default connect(null, mapDispatchToProps)(AddMovie);
