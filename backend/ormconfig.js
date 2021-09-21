const dortenv = require('dotenv').config()

module.exports = {
  "type": "postgres",
  "port": 5432,
  "host": "localhost",
  "username": `${process.env.USER_DATABASE}`,
  "password": `${process.env.PASSWORD_DATABASE}`,
  "database": "rentcar",
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "entities": [
    "./src/modules/**/entities/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations",
    "entitiesDir": "./src/entities"
  }
}