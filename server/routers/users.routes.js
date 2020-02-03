const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/users.controllers');

//Define API
router.post('/register', UserCtrl.saveUser);
router.post('/login', UserCtrl.loginUser);


module.exports = router;