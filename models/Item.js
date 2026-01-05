const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  collection: 'tybscit_project'
});

module.exports = mongoose.model('Item', itemSchema);
