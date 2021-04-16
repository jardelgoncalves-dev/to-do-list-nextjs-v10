import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiError } from '../../../helpers/api-error'
import * as userRepository from '../../../helpers/task-repository'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') return createTask(req, res)
  if (req.method === 'GET') return getAllTask(req, res)

  return res.status(405).json({ message: 'Method not allowed' })
}

async function createTask(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title } = req.body
    const data = await userRepository.create(title)

    res.status(201).json(data)
  } catch (error) {
    return ApiError.errorHandler(error, res)
  }
}

async function getAllTask(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await userRepository.get()

    res.status(200).json(data)
  } catch (error) {
    return ApiError.errorHandler(error, res)
  }
}
