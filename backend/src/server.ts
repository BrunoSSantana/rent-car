import cors from 'cors'
import express from 'express'

import { routes } from './routes'
import './data'

const app = express()
app.use(cors())

app.use(routes)

app.get('/', (request, response) => {
  return response.json({ message: 'OK' })
})

app.listen(3003, () => console.log('Template Run!'))
