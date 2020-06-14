const express = require('express')
const { getUsers } = require('../controllers/UserController')
const routes = express.Router()

routes.get('/', getUsers)




module.exports = routes