const { getUsername } = require('./services/hue')

module.exports = {
  getAuthorizationToken
}

async function getAuthorizationToken (req, res, next) {
  try {
    const { bridgeIp } = req.query

    const username = await getUsername(bridgeIp)
    const authData = `${username}\\${bridgeIp}`
    // const token = Buffer.from(JSON.stringify(hueConfigData)).toString('base64')

    res.json({ success: true, authData })
  } catch (err) {
    console.log(err.status)
    next(err)
  }
}
