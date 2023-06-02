import { Error } from 'mongoose'
import config from '../../../config'
import { IUsers } from './users.interface'
import { Users } from './users.schema'
import { generateUserID } from './users.utils'

const createUserToDB = async (user: IUsers): Promise<IUsers | null> => {
  const id = await generateUserID()
  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createUser = await Users.create(user)
  if (!createUser) {
    const error: Error = new Error('Failed to Create User! Please Try Again.')
    throw error
  } else {
    return createUser
  }
}

export default {
  createUserToDB,
}
