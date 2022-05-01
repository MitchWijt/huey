const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.use('/', (req, res, next) => {
  res.status(200).json({ success: true })
})

app.listen(PORT, () => console.log(`listeing on port ${PORT}`))
