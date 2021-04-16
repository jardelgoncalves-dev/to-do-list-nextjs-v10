/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import tasks from '../data/tasks.json'

export interface Task {
  id: number
  title: string
  finished: boolean
  createdAt: Date | string
}

const dirFile = 'src/data/tasks.json'

async function writeData(data: any) {
  await fs.writeFileSync(dirFile, JSON.stringify(data, null, 4))
}

export function get() {
  return tasks
}

export async function create(title: string) {
  const _tasks: Task[] = tasks
  const lastId = _tasks[_tasks.length - 1]?.id || 0

  const task = {
    id: lastId + 1,
    title,
    finished: false,
    createdAt: new Date(),
  }

  _tasks.push(task)
  await writeData(_tasks)

  return task
}

export async function update(id: number, task: Partial<Task>) {
  const _tasks: Task[] = tasks
  const taskIndex = _tasks.findIndex((t) => t.id === Number(id))
  if (taskIndex === -1) throw new NotFoundError('Task not found')

  _tasks[taskIndex] = {
    ..._tasks[taskIndex],
    ...task,
  }

  await writeData(_tasks)
  return tasks[taskIndex]
}

export async function destroy(id: number) {
  const _tasks: Task[] = tasks
  const taskIndex = _tasks.findIndex((t) => t.id === id)
  if (taskIndex === -1) throw new NotFoundError('Task not found')

  _tasks.splice(taskIndex, 1)
  await writeData(_tasks)

  return {}
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super()
    this.message = message
  }
}
