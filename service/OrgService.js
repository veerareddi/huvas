'use strict';
let express = require('express');
let bodyParser = require('body-parser');

let facker  = require('faker');
import FakerAPI from './FakerService';

let orgService = express();
const fakerService = new FakerAPI(facker);

orgService.use(bodyParser.json({limit: '10mb'}));

orgService.get('/api/org/doctors/:orgId', function(req, res) {
    let orgId = req.params.orgId;
    res.send(fakerService.getAllDoctorsPerOrg(orgId));
});

module.exports = orgService;