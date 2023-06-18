const Actor = require('../models/Actor');

// Get all actors
exports.getActors = async (req, res) => {
  try {
    const actors = await Actor.findAll();
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new actor
exports.createActor = async (req, res) => {
  const { name, gender, dob, bio } = req.body;
  
  try {
    const actor = await Actor.create({ name, gender, dob, bio });
    res.status(201).json(actor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get an actor by ID
exports.getActorById = async (req, res) => {
  const { id } = req.params;

  try {
    const actor = await Actor.findByPk(id);
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    res.json(actor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update an actor
exports.updateActor = async (req, res) => {
  const { id } = req.params;
  const { name, gender, dob, bio } = req.body;

  try {
    const actor = await Actor.findByPk(id);
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    actor.name = name;
    actor.gender = gender;
    actor.dob = dob;
    actor.bio = bio;
    await actor.save();
    res.json(actor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete an actor
exports.deleteActor = async (req, res) => {
  const { id } = req.params;

  try {
    const actor = await Actor.findByPk(id);
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    await actor.destroy();
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
