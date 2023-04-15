const { response } = require("express");

exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello World!</h1>');
};

exports.helloPhone = (req, res, next) => {
    console.log('ini request : >> ', req.query);
    res.send({

        response: req.model
    }
    )
}

