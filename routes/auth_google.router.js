const express = require('express')
const routes = express.Router()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;



// Use the GoogleStrategy within Passport.
passport.use(new GoogleStrategy({
    clientID: config.GOOGLE.clientID,
    clientSecret: config.GOOGLE.clientSecret,
    callbackURL: config.GOOGLE.callbackURL
},
    async function (accessToken, refreshToken, profile, done) {
        // Save or create a user
        const createOrSave = () => {

        }

        return done(profile)
    }
))


routes.get('/',
    passport.authenticate('google', { scope: config.GOOGLE.scope }))



routes.get('/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {

        // Redirect to the webpage
        res.redirect("/")
    });


module.exports = routes