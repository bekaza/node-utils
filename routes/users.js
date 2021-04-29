var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let resIp = await axios.get('http://curlmyip.org')
  res.json({ data: resIp.data });
});

module.exports = router;
