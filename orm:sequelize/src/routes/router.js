const express = require('express');
const Controller = require('../controllers/controller');
const Middleware = require('../../middleware/middleware');





const router = express.Router();

router.get('/api', Controller.helloWorld);
router.get('/phone/:id', Middleware.myMiddleware, Controller.helloPhone);




module.exports = router;
