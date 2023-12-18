const User = require('../models/User');

exports.getPendingVendors = async (req, res) => {
  try {
    const pendingVendors = await User.find({ status: 'pending' });
    res.json(pendingVendors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.approveVendor = async (req, res) => {
  try {
    const userId = req.params.userId;

    const approvedUser = await User.findByIdAndUpdate(userId, { status: 'approved' }, { new: true });

    if (!approvedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Vendor request approved', user: approvedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
