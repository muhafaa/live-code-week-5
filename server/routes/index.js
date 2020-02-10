const mainRouter = require('express').Router()

const userRouter = require('./user')

const comicRouter = require('./comic')

mainRouter.use('/', userRouter)

mainRouter.use('/comics', comicRouter)

module.exports = mainRouter
