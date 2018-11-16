const {json, send} = require('micro')
const {router, get, post} = require('microrouter')
const axios = require('axios')


module.exports = router(
  get('/', async (req, res) => `hello there, whatsup`),

)
