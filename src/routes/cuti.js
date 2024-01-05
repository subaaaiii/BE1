const express = require('express');
const cutiControllers = require('../controller/cuti');

const router = express.Router();

//CREATE - POST
router.post('/', cutiControllers.createNewCuti);

//READ - GET
router.get('/', cutiControllers.getAllCuti);

//UPDATE - PATCH
router.patch('/:id', cutiControllers.updateCuti);

//DELETE - DELETE
router.delete('/:id', cutiControllers.deleteCuti);

module.exports = router;