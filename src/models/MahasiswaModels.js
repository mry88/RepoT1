const db = require('../db');

const Mahasiswa = {
  getAllMahasiswa: (callback) => {
    const query = 'SELECT * FROM mahasiswa';
    db.query(query, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getMahasiswaByNim: (nim, callback) => {
    const query = 'SELECT * FROM mahasiswa WHERE nim = ?';
    db.query(query, [nim], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  createMahasiswa: (mahasiswa, callback) => {
    const query = 'INSERT INTO mahasiswa (nim, nama_mhs, alamat_mhs, prodi) VALUES (?, ?, ?, ?)';
    const { nim, nama_mhs, alamat_mhs, prodi } = mahasiswa;

    db.query(query, [nim, nama_mhs, alamat_mhs, prodi], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, { nim: result.insertId });
      }
    });
  },

  updateMahasiswa: (nim, mahasiswa, callback) => {
    const query = 'UPDATE mahasiswa SET nama_mhs = ?, alamat_mhs = ?, prodi = ? WHERE nim = ?';
    const { nama_mhs, alamat_mhs, prodi } = mahasiswa;

    db.query(query, [nama_mhs, alamat_mhs, prodi, nim], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  },

  deleteMahasiswa: (nim, callback) => {
    const query = 'DELETE FROM mahasiswa WHERE nim = ?';

    db.query(query, [nim], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  },
};

module.exports = Mahasiswa;
