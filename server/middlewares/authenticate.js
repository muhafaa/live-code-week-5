const jwt = require('jsonwebtoken')
function authenticate(req, res, next) {
  try {
    req.userInfo = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authenticate
