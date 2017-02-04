'use strict';
let express = require('express');
let bodyParser = require('body-parser');

let caseService = express();

caseService.use(bodyParser.json({limit: '10mb'}));

caseService.post('/api/user/validate', function(req, res) {
    var user = req.body.user;
    console.log(user);
    res.send(user);
});

module.exports = caseService;