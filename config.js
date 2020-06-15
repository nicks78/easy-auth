const config = {
    SECRET: "mysupersecret",
    DB_HOSTNAME: "192.168.0.106",
    DB_PORT: 5432,
    DB_NAME: "easy_auth",
    DB_USERNAME: "kiwi",
    DB_PASSORD: "0000",

    GOOGLE: {
        clientID: "",
        clientSecret: '',
        callbackURL: "http://localhost:3001/auth/google/callback",
        scope: 'https://www.googleapis.com/auth/plus.login'
    }
}

module.exports = config