const express = require('express');
const karyawanControllers = require('../controller/karyawan.js');

const router = express.Router();

//CREATE - POST
router.post('/', karyawanControllers.createNewKaryawan);

//READ - GET
router.get('/', karyawanControllers.getAllKaryawan);
router.get('/:no_induk', karyawanControllers.getKaryawanCuti);

//UPDATE - PATCH
router.patch('/:no_induk', karyawanControllers.updateKaryawan);

//DELETE - DELETE
router.delete('/:no_induk', karyawanControllers.deleteKaryawan);


module.exports = router;