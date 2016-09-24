var express = require('express');
var passport = require('passport');
var router = express.Router();
var path = require('path');



/* GET home page. */
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});



module.exports = router;
