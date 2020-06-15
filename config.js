const config = {
    SECRET: "mysupersecret",
    DB_HOSTNAME: "192.168.0.106",
    DB_PORT: 5432,
    DB_NAME: "easy_auth",
    DB_USERNAME: "kiwi",
    DB_PASSORD: "0000",

    GOOGLE: {
        clientID: "3543863861-2d1c51jtu4i17lnhesrmbbme9ledbeoi.apps.googleusercontent.com",
        clientSecret: 'Iugjwe1djZ36CFcUeNQE1ajt',
        callbackURL: "http://localhost:3001/auth/google/callback",
        scope: 'https://www.googleapis.com/auth/plus.login'
    }
}

module.exports = config