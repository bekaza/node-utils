var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res) {
  let resIp = await axios.get('http://curlmyip.org')
  res.json({ ip: resIp.data })
});

module.exports = router;
