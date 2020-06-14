//routes/v1/index.js
const express = require('express');
const router = express.Router();

const usersRoutes = require("./users.router.js")
const authGoogleRoutes = require("./auth_google.router.js")


// ROUTES
router.use('/users', usersRoutes)

router.use('/auth/google', authGoogleRoutes)


module.exports = router