const express = require('express');
const router = express.Router();
const Actor = require('../models/Actor');

// Get all actors
router.get('/', async (req, res) => {
  try {
    const actors = await Actor.findAll();
    res.json(actors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get an actor by ID
router.get('/:id', async (req, res) => {
  try {
    const actor = await Actor.findByPk(req.params.id);
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    res.json(actor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new actor
router.post('/', async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const actor = await Actor.create({ name, gender, dob, bio });
    res.status(201).json(actor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update an actor
router.put('/:id', async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const actor = await Actor.findByPk(req.params.id);
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    actor.name = name;
    actor.gender = gender;
    actor.dob = dob;
    actor.bio = bio;
    await actor.save();
    res.json(actor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete an actor
router.delete('/:id', async (req, res) => {
  try {
    const actor = await Actor.findByPk(req.params.id);
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    await actor.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
