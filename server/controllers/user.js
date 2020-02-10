const { User } = require('../models')
const generateToken = require('../helpers/generateToken')
const createError = require('http-errors')
class Controller {
  static login(req, res, next) {
    let userData
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        let err = createError(401, 'Login error')
        if (!user) {
          next(err)
        } else if (user.password != req.body.password) {
          next(err)
        } else {
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email
          }
          const token = generateToken(payload)
          res.status(200).json({
            access_token: token
          })
        }
      })
      .catch((err) => {
        next(err)
      })
  }

  static register(req, res, next) {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    User.create(data)
      .then((newUser) => {
        const payload = {
          id: newUser.id,
          name: newUser.username,
          email: newUser.email
        }
        const token = generateToken(payload)
        res.status(201).json({
          access_token: token
        })
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = Controller
