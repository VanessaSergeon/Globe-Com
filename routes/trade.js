var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('trade', { title: 'Dashboard' });
});

module.exports = router;
