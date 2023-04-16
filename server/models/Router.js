const express = require('express');
const { signup, usersLogin } = require('./Controller');

const router = express.Router();
router.post('/users/login', usersLogin);
router.post('/users/register', signup);

module.exports = router;