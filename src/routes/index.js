const express = require('express');
const router = express.Router();
const MahasiswaController = require('../controllers/MahasiswaController');

router.get('/mhs', MahasiswaController.getAllMahasiswa);
router.get('/mhs/:id', MahasiswaController.getMahasiswaByNim);
router.post('/mhs', MahasiswaController.createMahasiswa);
router.put('/mhs/:id', MahasiswaController.updateMahasiswa);
router.delete('/mhs/:id', MahasiswaController.deleteMahasiswa);

module.exports = router;
