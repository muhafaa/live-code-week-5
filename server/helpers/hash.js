function hashPassword(password) {
  const bcrypt = require('bcrypt')
  const saltRounds = 8
  return bcrypt.hashSync(password, saltRounds)
}

module.exports = hashPassword
