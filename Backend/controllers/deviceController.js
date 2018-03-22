<<<<<<< HEAD
var Device = require('../models/device');
=======
var models = require('../models/');
>>>>>>> b3144d031cc4cba1e14948c7a3938967670870db

const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');


<<<<<<< HEAD
exports.index = function(req, res, next) {
  res.json({express: 'API works!'});
  console.log('hello there');
}

exports.device_list = function(req, res, next) {
  Device.find(function(err, devices) {
     if (err)
       res.send(err);
     res.json(devices)
   });
=======
exports.index = function(req, res) {
  res.render('index');
}

exports.device_list = function(req, res) {
  models.devices.findAll({  }).then((result) => {
    res.render('all', {title: 'Nokia Garage Home Page', device_list: result});
  });
>>>>>>> b3144d031cc4cba1e14948c7a3938967670870db
};

exports.device_detail = function(req, res) {
    models.devices.findOne({where: {'id': req.params.id}}).then((result) =>{
<<<<<<< HEAD
      //res.render('device_detail', {title: "Device details", device_detail: result});
      res.json(result);
  //  res.json({expess: 'hello there'});
=======
      res.render('device_detail', {title: "Device details", device_detail: result});
>>>>>>> b3144d031cc4cba1e14948c7a3938967670870db
    });
};

exports.device_create_get = function(req, res) {
<<<<<<< HEAD

=======
  res.render('form_device', {title: 'Create device'});
>>>>>>> b3144d031cc4cba1e14948c7a3938967670870db
}

//no validation...yet
exports.device_create_post = function(req, res) {
<<<<<<< HEAD
  var device = new Device();
  (req.body.name) ? device.name = req.body.name : null;
  (req.body.numLeft) ? device.numLeft= req.body.numLeft : null;

  device.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Device successfully added!' });
  });
}

exports.device_delete = function(req, res) {
  Device.remove({ _id: req.params.device_id }, function(err, device) {
    if (err)
      res.send(err);
    res.json({ message: 'device has been deleted' })
  });
=======
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
>>>>>>> b3144d031cc4cba1e14948c7a3938967670870db
}

exports.device_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: device update GET');
}

exports.device_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: device update POST');
}
