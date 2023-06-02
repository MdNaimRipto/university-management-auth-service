import { Request, Response } from 'express'
import usersService from './users.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUserToDB(user)
    res.status(201).send({
      statusCode: 201,
      message: 'User Created Successfully',
      user: result,
    })
  } catch (error) {
    res.status(401).send({
      statusCode: 401,
      errorMessage: error,
    })
  }
}
