const express = require('express');
const Controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/user', Controller.getUser)
router.post('/register', Controller.register)
router.get('/userdetail/:id', Controller.getDetailUser)
router.delete('/userdelete/:id', Controller.deleteUser)
router.put('/userupdate/:id', Controller.updateUser)

module.exports = router;
