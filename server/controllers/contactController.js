const ContactEnquiry = require('../models/ContactEnquiry');
const { sendContactEmail } = require('../utils/email');

exports.createContact = async (req, res, next) => {
  try {
    const enquiry = await ContactEnquiry.create(req.body);
    sendContactEmail(enquiry).catch((err) => console.error('Email send failed:', err.message));
    res.status(201).json({ success: true, data: enquiry });
  } catch (error) {
    next(error);
  }
};

exports.getContacts = async (req, res, next) => {
  try {
    const enquiries = await ContactEnquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    next(error);
  }
};

exports.updateContact = async (req, res, next) => {
  try {
    const enquiry = await ContactEnquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!enquiry) {
      return res.status(404).json({ message: 'Contact enquiry not found' });
    }
    res.status(200).json({ success: true, data: enquiry });
  } catch (error) {
    next(error);
  }
};
