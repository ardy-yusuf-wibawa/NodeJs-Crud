const express = require('express');
const updateUser = require('../controllers/filter.controller')

const router = express.Router();
router.get('/update/:id', updateUser.updateUser);



module.exports = router;
