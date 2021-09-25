import 'reflect-metadata'
import 'express-async-errors'

import cors from 'cors'
import express from 'express'

import { routes } from './routes'

import './database'

const app = express()
app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(3003, () => console.log('Run!'))
