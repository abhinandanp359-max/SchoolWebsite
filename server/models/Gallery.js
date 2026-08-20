const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  category: {
    type: String,
    enum: ['campus', 'students', 'assembly', 'events', 'yoga', 'sports', 'cultural', 'celebrations', 'activities'],
    default: 'campus',
  },
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
