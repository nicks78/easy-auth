const config = {
    SECRET: "mysupersecret",
    DB_HOSTNAME: "",
    DB_PORT: 5432,
    DB_NAME: "easy_auth",
    DB_USERNAME: "",
    DB_PASSORD: "",

    GOOGLE: {
        clientID: "",
        clientSecret: '',
        callbackURL: "http://localhost:3001/auth/google/callback",
        scope: ['https://www.googleapis.com/auth/plus.login']
    }
}

module.exports = config