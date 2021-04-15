import { AxiosError } from 'axios'
import { finished } from 'node:stream'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { ListTask } from '../components/ListTask'

import { AddTaskContainer } from '../conteiners/AddTask'
import api from '../services/api'

export default function Home() {
  const queryClient = useQueryClient()

  const [title, setTitle] = useState('')
  const { isLoading, isError, data } = useQuery('tasks', () =>
    api.get('/tasks').then((response) => response.data)
  )

  const createMutation = useMutation<Response, AxiosError, string>(
    () => api.post('/tasks', { title }),
    {
      onSuccess: () => queryClient.invalidateQueries('tasks'),
    }
  )

  const finishedtaskMutation = useMutation<
    Response,
    AxiosError,
    number | undefined
  >((id) => api.put(`/tasks/${id}`), {
    onSuccess: () => queryClient.invalidateQueries('tasks'),
  })

  return (
    <>
      <AddTaskContainer
        onPress={() =>
          createMutation.mutate(title, {
            onSuccess: () => {
              setTitle('')
            },
          })
        }
        onChange={(value: string) => setTitle(value)}
        inputPlaceholder="inform your task to do"
        inputValue={title}
      />
      <ListTask
        tasks={data}
        onCheck={(id) => {
          finishedtaskMutation.mutate(id, {})
        }}
      />
    </>
  )
}
