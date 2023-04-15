require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models')

const router = require('./routes/router');
const userRouter = require('./routes/user.router')
const filterUser = require('./routes/filter.router')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

sequelize.authenticate().then(function(err) {
    console.log('database has been connected')
}).catch(function(err) {
    console.log('unable to connect', err)
})

app.use('/', router);
app.use('/', userRouter);
app.use('/', filterUser);

app.listen(process.env.SERVER_PORT, () => { console.log('Server Running on ' + process.env.SERVER_PORT) });
