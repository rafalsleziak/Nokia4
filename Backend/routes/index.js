var express = require('express');
var router = express.Router();

var device_controller = require('../controllers/deviceController.js')

/* GET home page. */
<<<<<<< HEAD
//router.get('/', function(req, res) {
//  res.json({message: 'api connected!'});
//})//device_controller.index);
=======
router.get('/', device_controller.index);
>>>>>>> b3144d031cc4cba1e14948c7a3938967670870db

module.exports = router;
