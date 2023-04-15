require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const userRouter = require('./routes/user.router')
const filterUser = require('./routes/filter.router')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/', userRouter);
app.use('/', filterUser);

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running on ' + process.env.SERVER_PORT)});
