const express = require('express');
const router = express.Router();
const { getGallery, createGallery, deleteGallery } = require('../controllers/galleryController');
const { protect } = require('../middleware/auth');

router.get('/', getGallery);
router.post('/', protect, createGallery);
router.delete('/:id', protect, deleteGallery);

module.exports = router;
