import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiError } from '../../../helpers/api-error'
import * as userRepository from '../../../helpers/task-repository'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') return updateTask(req, res)
  if (req.method === 'DELETE') return destroyTask(req, res)

  return res.status(405).json({ message: 'Method not allowed' })
}

async function destroyTask(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query
    const data = await userRepository.destroy(Number(id))

    res.status(204).json(data)
  } catch (error) {
    return ApiError.errorHandler(error, res)
  }
}

async function updateTask(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query
    const task = req.body

    const data = await userRepository.update(Number(id), task)

    res.status(200).json(data)
  } catch (error) {
    return ApiError.errorHandler(error, res)
  }
}
