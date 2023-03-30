var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var d1 = Math.floor(Math.random() * 10);
    var d2 = Math.floor(Math.random() * 02);
    var d3 = Math.floor(Math.random() * 10);
    var d4 = Math.floor(Math.random() * 10);
    var powFunction = Math.pow(d1);
    var signFunction = Math.sign(d2);
    var tanhFunction = Math.tanh(d3);
    var truncFunction = Math.trunc(d4);
    res.render('computation',
                {
                    title: 'Yagna Venkata Teja Kanukonala functions for  computations. ',
                    d1: d1,
                    d2: d2,
                    d3: d3,
                    d4: d4,
                    pow: powFunction,
                    sign: signFunction,
                    tanh: tanhFunction,
                    trunc: truncFunction
                });
});
module.exports = router;