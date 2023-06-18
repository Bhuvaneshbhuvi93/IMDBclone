const Producer = require('../models/Producer');

// Get all producers
exports.getProducers = async (req, res) => {
  try {
    const producers = await Producer.findAll();
    res.json(producers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new producer
exports.createProducer = async (req, res) => {
  const { name, gender, dob, bio } = req.body;
  
  try {
    const producer = await Producer.create({ name, gender, dob, bio });
    res.status(201).json(producer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a producer by ID
exports.getProducerById = async (req, res) => {
  const { id } = req.params;

  try {
    const producer = await Producer.findByPk(id);
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    res.json(producer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a producer
exports.updateProducer = async (req, res) => {
  const { id } = req.params;
  const { name, gender, dob, bio } = req.body;

  try {
    const producer = await Producer.findByPk(id);
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    producer.name = name;
    producer.gender = gender;
    producer.dob = dob;
    producer.bio = bio;
    await producer.save();
    res.json(producer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a producer
exports.deleteProducer = async (req, res) => {
  const { id } = req.params;

  try {
    const producer = await Producer.findByPk(id);
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    await producer.destroy();
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
