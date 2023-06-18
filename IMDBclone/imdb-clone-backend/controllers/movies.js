const Movie = require('../models/Movie');

// Get all movies
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new movie
exports.createMovie = async (req, res) => {
  const { name, year, producerId, actorIds } = req.body;
  
  try {
    const movie = await Movie.create({ name, year, producerId });
    await movie.addActors(actorIds);
    res.status(201).json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a movie by ID
exports.getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByPk(id, {
      include: ['actors', 'producer'],
    });
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a movie
exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, year, producerId, actorIds } = req.body;

  try {
    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    movie.name = name;
    movie.year = year;
    movie.producerId = producerId;
    await movie.save();
    await movie.setActors(actorIds);
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    await movie.destroy();
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
