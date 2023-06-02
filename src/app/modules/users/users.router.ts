import express from 'express'
import { createUser } from './users.controller'

const router = express.Router()

router.post('/createUser', createUser)

export default router
