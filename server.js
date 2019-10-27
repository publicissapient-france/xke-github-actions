const express = require('express')
const morgan = require('morgan')
const app = express()
const redis = require('redis')

let client

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
}
app.use(morgan('combined'))
app.use(allowCrossDomain)

app.delete('/hello', function (req, res) {
  client.set('hellos', '0')
  res.end()
})

app.post('/hello', function (req, res) {
  client.incr('hellos')
  res.end()
})

app.get('/hello', function (req, res) {
  client.get('hellos', (err, value) => {
    if (err) throw (err)
    const count = parseInt(value) || 0
    res.end(JSON.stringify({hello_count: count}))
  })
})

const server = app.listen(8081, function () {

  const host = server.address().address
  const port = server.address().port
  client = redis.createClient({
    'host': process.env['REDIS_HOST'] || 'localhost'
  })
  console.log('Example app listening at http://%s:%s', host, port)

})
