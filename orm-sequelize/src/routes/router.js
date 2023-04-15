const express = require('express');
const Controller = require('../controllers/controller');






const router = express.Router();

router.get('/api', Controller.helloWorld);
router.get('/phone/:id', Controller.helloPhone);




module.exports = router;
