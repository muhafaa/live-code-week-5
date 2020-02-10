const { Comic } = require('../models')
class Controller {
  static read(req, res, next) {
    Comic.findAll()
      .then((comics) => {
        res.status(200).json(comics)
      })
      .catch((err) => {
        next(err)
      })
  }

  static readOne(req, res, next) {
    Comic.findOne({
      where: {
        id: req.params.id
      }
    })
      .then((comic) => {
        res.status(200).json(comic)
      })
      .catch((err) => {
        next(err)
      })
  }

  static update(req, res, next) {
    const data = {
      title: req.body.title,
      author: req.body.author,
      imageUrl: req.body.imageUrl
    }
    Comic.update(data, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })
      .then((result) => {
        res.status(200).json(result[1])
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = Controller
