var express = require('express');
var router = express.Router();

<<<<<<< HEAD
var Device = require('../models/device');
//var device_controller = require('../controllers/deviceController.js');

router.route('/')
.get(function(req, res){
  Device.find(function(err, devices){
    if(err){res.send(err)}
    res.json(devices)
  });
})
.post(function(req, res){
console.log(req.body);
  var device = new Device();
  (req.body.name) ? device.name = req.body.name : null;
  (req.body.numLeft) ? device.numLeft = req.body.numLeft : null;

  device.save(function(err, result){
    if(err) return res.send(err);
    res.json(result);
  });
});

router.route('/:device_id')
//The put method gives us the chance to update our comment based on the ID passed to the route
  .put(function(req, res) {
    Device.findById(req.params.device_id, function(err, device) {
      if (err) {        res.send(err); }
      //setting the new author and text to whatever was changed. If nothing was changed
      // we will not alter the field.
      (req.body.name) ? device.name = req.body.name : null;
      (req.body.numLeft) ? device.numLeft= req.body.numLeft : null;
      //save comment
     device.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'device has been updated' });
      });
    });
  })
  //delete method for removing a comment from our database
  .delete(function(req, res) {
    //selects the comment by its ID, then removes it.
    Device.remove({ _id: req.params.device_id }, function(err, device){
      if (err)
        res.send(err);
      res.json({ message: 'device has been deleted' })
    })
});
//router.get('/', function(req, res) {res.json({message: 'API connected'})})//('/all', device_controller.device_list);

//router.get('/create', device_controller.device_create_get);
//router.route.post('/', device_controller.device_create_post);

//router.get('/:id', device_controller.device_detail);

//router.route('/:device_id')
//.delete(device_controller.device_delete);
//router.post(':id/delete', device_controller.device_delete_post);

//router.get(':id/update', device_controller.device_update_get);
//router.post(':id/update', device_controller.device_update_post);
=======
var device_controller = require('../controllers/deviceController.js');

router.get('/all', device_controller.device_list);

router.get('/create', device_controller.device_create_get);
router.post('/create', device_controller.device_create_post);

router.get('/:id', device_controller.device_detail);

router.get(':id/delete', device_controller.device_delete_get);
router.post(':id/delete', device_controller.device_delete_post);

router.get(':id/update', device_controller.device_update_get);
router.post(':id/update', device_controller.device_update_post);
>>>>>>> b3144d031cc4cba1e14948c7a3938967670870db

module.exports = router;
