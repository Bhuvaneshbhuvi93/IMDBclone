const express = require('express');
const router = express.Router();
const Producer = require('../models/Producer');

// Get all producers
router.get('/', async (req, res) => {
  try {
    const producers = await Producer.findAll();
    res.json(producers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a producer by ID
router.get('/:id', async (req, res) => {
  try {
    const producer = await Producer.findByPk(req.params.id);
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    res.json(producer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new producer
router.post('/', async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const producer = await Producer.create({ name, gender, dob, bio });
    res.status(201).json(producer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a producer
router.put('/:id', async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const producer = await Producer.findByPk(req.params.id);
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    producer.name = name;
    producer.gender = gender;
    producer.dob = dob;
    producer.bio = bio;
    await producer.save();
    res.json(producer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a producer
router.delete('/:id', async (req, res) => {
  try {
    const producer = await Producer.findByPk(req.params.id);
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    await producer.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
