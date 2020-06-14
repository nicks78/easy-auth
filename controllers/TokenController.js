//controllers/TokenController.js
const pool = require('../queries')

const getTokens = (request, response) => {
    pool.query('SELECT * FROM tokens', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const getTokensById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM tokens WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const createToken = (request, response) => {
    const { lastname, firstname, provider_id, provider, email } = request.body

    pool.query('INSERT INTO tokens (token) VALUES ($1, $2)', [token], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Token added with ID: ${result.insertId}`)
    })
}

const updateToken = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE tokens SET token = $1, = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Token modified with ID: ${id}`)
        }
    )
}


const deleteToken = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM tokens WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Token deleted with ID: ${id}`)
    })
}


module.exports = {
    getTokens,
    getTokensById,
    createToken,
    updateToken,
    deleteToken,
}


