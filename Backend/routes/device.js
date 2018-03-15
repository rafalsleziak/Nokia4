var express = require('express');
var router = express.Router();

var device_controller = require('../controllers/deviceController.js');

router.get('/all', device_controller.device_list);

router.get('/create', device_controller.device_create_get);
router.post('/create', device_controller.device_create_post);

router.get('/:id', device_controller.device_detail);

router.get(':id/delete', device_controller.device_delete_get);
router.post(':id/delete', device_controller.device_delete_post);

router.get(':id/update', device_controller.device_update_get);
router.post(':id/update', device_controller.device_update_post);

module.exports = router;
