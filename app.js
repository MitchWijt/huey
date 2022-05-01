const express = require('express')
const pino = require('pino-http')()

const app = express()
app.use(pino)

app.get('/', (req, res) => {
  res.status(200).json({ success: true })
})

module.exports = (opts = {}, cb) => {
  const port = opts.port
  return app.listen(port, cb)
}
