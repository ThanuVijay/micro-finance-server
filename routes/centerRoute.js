const express = require('express');
const { createCenter, getAllCenters , getCenterById , updateCenterById } = require('../controllers/centerController');

const router = express.Router();

//routes
router.post('/add', createCenter);
router.get('/getall',getAllCenters);
router.get('/branches/:id', getCenterById);
router.put('/branches/:id', updateCenterById);





module.exports = router;