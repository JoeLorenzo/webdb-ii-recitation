const knex = require("knex")
const knexConfig = require("../knexfile")

// the .env is for heroku
// const db = knex(knexConfig[process.env.NODE_ENV || "development" ])
const db = knex(knexConfig.development)

module.exports = db