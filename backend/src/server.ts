import 'reflect-metadata'
import 'express-async-errors'

import cors from 'cors'
import express from 'express'
import path from 'path'

import { routes } from './routes'

import './database'

const app = express()
app.use(cors())

app.use(express.json())

app.use(routes)
app.get('/file', (request, response, next) => {
  return response.sendFile(
    path.join(__dirname, '..', 'tmp/10-2021-Bruninho.csv')
  )
})

app.listen(3003, () => console.log('Run!'))
