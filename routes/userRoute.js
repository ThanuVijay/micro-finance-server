const express = require('express');
const {registerController, loginController, updateUserController, deleteUserController} = require('../controllers/userController')

const router = express.Router();

//routes 
router.post('/signin', loginController)
router.post('/signup', registerController)
router.put('/update',updateUserController)
router.delete('/delete',deleteUserController)


module.exports = router;



