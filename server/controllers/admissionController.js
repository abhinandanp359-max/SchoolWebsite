const AdmissionEnquiry = require('../models/AdmissionEnquiry');
const { sendAdmissionEmail } = require('../utils/email');

exports.createAdmission = async (req, res, next) => {
  try {
    const enquiry = await AdmissionEnquiry.create(req.body);
    sendAdmissionEmail(enquiry).catch((err) => console.error('Email send failed:', err.message));
    res.status(201).json({ success: true, data: enquiry });
  } catch (error) {
    next(error);
  }
};

exports.getAdmissions = async (req, res, next) => {
  try {
    const enquiries = await AdmissionEnquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    next(error);
  }
};

exports.updateAdmission = async (req, res, next) => {
  try {
    const enquiry = await AdmissionEnquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!enquiry) {
      return res.status(404).json({ message: 'Admission enquiry not found' });
    }
    res.status(200).json({ success: true, data: enquiry });
  } catch (error) {
    next(error);
  }
};
