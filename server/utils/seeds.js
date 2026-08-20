const Admin = require('../models/Admin');

const seedAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists, skipping seed.');
      return;
    }

    await Admin.create({
      username: 'admin',
      password: 'MountCarmel@2024',
    });

    console.log('Default admin user created successfully.');
  } catch (error) {
    console.error('Error seeding admin:', error.message);
  }
};

module.exports = seedAdmin;
