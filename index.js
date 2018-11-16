const {json, send} = require('micro')
const {router, get} = require('microrouter')
const axios = require('axios')


module.exports = router(

  get('/', (req, res) => 'you can render'),

  get('/render/:url', async (req, res) => {
    const response = await axios(req.params.url)
    send(res, 200, response.data)

  })
  
)
