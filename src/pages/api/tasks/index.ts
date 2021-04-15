import type { NextApiRequest, NextApiResponse } from 'next'

interface Task {
  id: number
  title: string
  finished: boolean
  createdAt: Date
}

export const tasks: Task[] = []

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === 'POST') return create(req, res)
  if (req.method === 'GET') {
    return res.status(200).json(tasks)
  }

  return res.status(405).json({ message: 'Method not allowed' })
}

export function create(req: NextApiRequest, res: NextApiResponse) {
  const { title } = req.body
  const lastId = tasks[tasks.length - 1]?.id || 0

  const task = {
    id: lastId + 1,
    title,
    finished: false,
    createdAt: new Date(),
  }

  tasks.push(task)
  return res.status(201).json(task)
}

export function update(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  const task = tasks.find((t) => t.id === Number(id))
  if (!task) {
    return res.status(404).json({ message: 'Task not found' })
  }

  task.finished = !task.finished
  return res.status(200).json(task)
}
