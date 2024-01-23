const express = require('express');
const { createBranch, getAllBranches ,  getBranchById , updateBranchById, deleteBranchById  } = require('../controllers/branchController')
const router = express.Router();

//routes
router.post('/add',createBranch);
router.get('/getall',getAllBranches);
router.get('/get', getBranchById);
router.put('/update/:id', updateBranchById);
router.delete('/delete/:id', deleteBranchById);


module.exports = router;