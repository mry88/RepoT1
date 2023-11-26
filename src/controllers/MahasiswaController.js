// MahasiswaController.js
const Mahasiswa = require('../models/MahasiswaModels');

const MahasiswaController = {
  getAllMahasiswa: (req, res) => {
    Mahasiswa.getAllMahasiswa((err, results) => {
      if (err) throw err;
      res.json(results);
    });
  },
  
  getMahasiswaByNim: (req, res) => {
    const nim = req.params.nim;
    Mahasiswa.getMahasiswaByNim(nim, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  },
  
  createMahasiswa: (req, res) => {
    const mahasiswa = req.body;
    Mahasiswa.createMahasiswa(mahasiswa, (err, result) => {
      if (err) throw err;
      res.json({ message: 'Mahasiswa created successfully', nim: result.nim });
    });
  },
  
  updateMahasiswa: (req, res) => {
    const nim = req.params.nim;
    const mahasiswa = req.body;
    Mahasiswa.updateMahasiswa(nim, mahasiswa, (err) => {
      if (err) throw err;
      res.json({ message: 'Mahasiswa updated successfully' });
    });
  },
  
  deleteMahasiswa: (req, res) => {
    const nim = req.params.nim;
    Mahasiswa.deleteMahasiswa(nim, (err) => {
      if (err) throw err;
      res.json({ message: 'Mahasiswa deleted successfully' });
    });
  },
};

module.exports = MahasiswaController;
