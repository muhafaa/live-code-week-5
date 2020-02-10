const router = require('express').Router()

const Controller = require('../controllers/comic')

const authenticate = require('../middlewares/authenticate')

router.use(authenticate)

router.get('/', Controller.read)

router.get('/:id', Controller.readOne)

router.put('/:id', Controller.update)

module.exports = router
