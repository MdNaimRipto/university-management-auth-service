import express, { Application, Request, Response } from "express"
import cors from "cors"
require("dotenv").config()

const app: Application = express()

// middleWire
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send(201).send({
        message: "Auth Service Management Server is running successfully.",
        statusCode: 201
    })
})

export default app