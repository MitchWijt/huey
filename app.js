const express = require('express')
const pino = require('pino-http')()

const api = require('./api')
const middlewares = require('./middlewares')

const app = express()
app.use(pino)

app.get('/token', api.getAuthorizationToken)

app.use(middlewares.errorHandler)

module.exports = (opts = {}, cb) => {
  const port = opts.port
  return app.listen(port, cb)
}
