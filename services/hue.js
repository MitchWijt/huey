const superagent = require('superagent')
const _ = require('lodash')

module.exports = {
  getUsername
}

async function getUsername (bridgeIp) {
  const res = await superagent
    .post(`http://${bridgeIp}/api`)
    .send({ devicetype: 'new huey controller' })
    .set('accept', 'json')

  const error = _.get(res.body, '[0].error', null)
  if (error) {
    throw new Error(error.description)
  }

  console.log(res.body)

  return 1

  //   return res.body.internalipaddress
}
