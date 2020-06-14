const express = require('express')
const { getTokens } = require('../controllers/TokenController')
const routes = express.Router()

routes.get('/', getTokens)




module.exports = routes