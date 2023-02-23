const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.getAllAdmins);

router.post('/admintable', adminController.createAdminTable);

router.get('/:id', adminController.getAdminById);

router.post('/save', adminController.createAdmin);

router.put('/:id', adminController.updateAdmin);

router.delete('/:id', adminController.deleteAdmin);

module.exports = router;