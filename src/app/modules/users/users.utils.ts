import { Users } from './users.schema'

export const findID = async () => {
  const lastID = await Users.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastID?.id
}

export const generateUserID = async (): Promise<string> => {
  const currentID = (await findID()) || (0).toString().padStart(5, '0')
  const incrementID = (parseInt(currentID) + 1).toString().padStart(5, '0')
  return incrementID
  //   currentId++
  //   const paddedId = currentId.toString().padStart(5, '0')
  //   return paddedId
}
