var models = require('../models/');

const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');


exports.index = function(req, res) {
  res.render('index');
}

exports.device_list = function(req, res) {
  models.devices.findAll({  }).then((result) => {
    res.render('all', {title: 'Nokia Garage Home Page', device_list: result});
  });
};

exports.device_detail = function(req, res) {
    models.devices.findOne({where: {'id': req.params.id}}).then((result) =>{
      res.render('device_detail', {title: "Device details", device_detail: result});
    });
};

exports.device_create_get = function(req, res) {
  res.render('form_device', {title: 'Create device'});
}

//no validation...yet
exports.device_create_post = function(req, res) {
  models.devices.create({
    deviceName: req.body.deviceName,
    numLeft: req.body.numLeft
  }).then(function() {
    res.redirect('/');
  });
}

exports.device_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: device delete GET');
}

exports.device_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: device delete POST');
}

exports.device_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: device update GET');
}

exports.device_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: device update POST');
}
