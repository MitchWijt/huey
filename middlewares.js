const _ = require('lodash')

function errorHandler (err, req, res, next) {
  if (res.headersSent) return next(err)

  const { name, status, description, message } = err
  res.status(status || 500).json(
    _.assign({
      name,
      status: status || 500,
      path: req.path,
      timestamp: new Date().getTime(),
      description: description || message,
      message
    })
  )
}

module.exports = {
  errorHandler
}
