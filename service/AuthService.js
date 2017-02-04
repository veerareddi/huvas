'use strict';
let express = require('express');
let bodyParser = require('body-parser');

let facker  = require('faker');
import FakerAPI from './FakerService';

let caseService = express();
const fakerService = new FakerAPI(facker);

caseService.use(bodyParser.json({limit: '10mb'}));

caseService.post('/api/user/validate', function(req, res) {
    var user = req.body.user;
    console.log(user);
    res.send(fakerService.getLogedInUser(user));
});

module.exports = caseService;