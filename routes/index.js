var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname.substring(0,__dirname.length-6)+ "public/html/index.html");

});

module.exports = router;
