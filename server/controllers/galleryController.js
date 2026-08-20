const Gallery = require('../models/Gallery');

exports.getGallery = async (req, res, next) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const gallery = await Gallery.find(filter).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: gallery.length, data: gallery });
  } catch (error) {
    next(error);
  }
};

exports.createGallery = async (req, res, next) => {
  try {
    const gallery = await Gallery.create(req.body);
    res.status(201).json({ success: true, data: gallery });
  } catch (error) {
    next(error);
  }
};

exports.deleteGallery = async (req, res, next) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);
    if (!gallery) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.status(200).json({ success: true, message: 'Gallery item deleted' });
  } catch (error) {
    next(error);
  }
};
