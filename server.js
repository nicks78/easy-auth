const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require("./routes")
const app = express()
const port = 3001

app.use(cors())

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// API GATEWAY
app.use('/', routes);

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
})



app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})