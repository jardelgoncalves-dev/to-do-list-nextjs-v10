import { AxiosError } from 'axios'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { RaisedButton } from '../components'
import { Input } from '../components/Input'
import { ListTask } from '../components/ListTask'
import { Task } from '../components/ListTask/Item'
import { Modal } from '../components/Modal'

import { AddTaskContainer } from '../conteiners/AddTask'
import api from '../services/api'

export default function Home() {
  const queryClient = useQueryClient()

  const [title, setTitle] = useState('')
  const [taskEdit, setTaskEdit] = useState<Task | null>(null)
  const [visible, setVisible] = useState(false)

  const { data } = useQuery('tasks', () =>
    api.get('/tasks').then((response) => response.data)
  )

  const createMutation = useMutation<Response, AxiosError, string>(
    () => api.post('/tasks', { title }),
    {
      onSuccess: () => queryClient.invalidateQueries('tasks'),
    }
  )

  const onCheckMutation = useMutation<Response, AxiosError, Task>(
    (task) => api.put(`/tasks/${task.id}`, { finished: !task.finished }),
    {
      onSuccess: () => queryClient.invalidateQueries('tasks'),
    }
  )

  const onEditMutation = useMutation<Response, AxiosError, Task>(
    (task) => api.put(`/tasks/${task.id}`, { title: task.title }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('tasks')
        setVisible(false)
      },
    }
  )

  const deleteMutation = useMutation<Response, AxiosError, number | undefined>(
    (id) => api.delete(`/tasks/${id}`),
    {
      onSuccess: () => queryClient.invalidateQueries('tasks'),
    }
  )

  return (
    <>
      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        header={
          <div className="modal-header-custom">
            <h3 className="modal-header-custom__title">Edit Task</h3>
          </div>
        }
        footer={
          <div className="modal-footer-custom">
            <RaisedButton
              text="Save"
              disabled={!taskEdit?.title}
              className="primary radius"
              onPress={() => {
                onEditMutation.mutate(taskEdit as Task, {})
              }}
            />
          </div>
        }
      >
        <Input
          className="darken block radius"
          value={taskEdit?.title}
          onChange={(value) =>
            setTaskEdit({
              ...((taskEdit as Task) || {}),
              title: value,
            })
          }
        />
      </Modal>
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
        onEdit={(task) => {
          setVisible(!visible)
          setTaskEdit(task)
        }}
        onCheck={(task) => {
          onCheckMutation.mutate(task, {})
        }}
        onDelete={(id) => {
          deleteMutation.mutate(id, {})
        }}
      />
    </>
  )
}
