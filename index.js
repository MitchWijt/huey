const { loadEnv } = require('./config')
const { name } = require('./package.json')

loadEnv()
const PORT = process.env.PORT || 3000

require('./app')({ port: PORT }, () => {
  console.log(`${name} listening on port ${PORT}`)
})
