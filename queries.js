const config = require('./config')
const Pool = require('pg').Pool
const pool = new Pool({
    user: config.DB_USERNAME,
    host: config.DB_HOSTNAME,
    database: config.DB_NAME,
    password: config.DB_PASSORD,
    port: config.DB_PORT,
})


module.exports = pool;