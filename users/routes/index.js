const express = require('express');
const {registerNewUser} = require('../controllers');
const router = express.Router();

router.post('/users', registerNewUser);

module.exports = router;