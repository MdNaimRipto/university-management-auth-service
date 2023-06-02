import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.router'

// Configuring app
const app: Application = express()

// middleWire
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.status(201).send({
    message: 'Auth Service Management Server is running successfully.',
    statusCode: 201,
  })
})

app.use('/api/v1/users', userRouter)

export default app
