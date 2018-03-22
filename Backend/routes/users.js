var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.json({message: 'respond with a resource'});
=======
  res.send('respond with a resource');
>>>>>>> b3144d031cc4cba1e14948c7a3938967670870db
});

module.exports = router;
