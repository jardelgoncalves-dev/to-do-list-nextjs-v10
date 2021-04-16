import { Wraper } from './styles'
import { Item, Task } from './Item'

interface ListTaskProp {
  tasks: Task[]
  onCheck?: (task: Task) => void
  onEdit?: (task: Task) => void
  onDelete?: (id?: number) => void
}

export function ListTask({ tasks, onCheck, onDelete, onEdit }: ListTaskProp) {
  return (
    <Wraper>
      {(tasks || []).map((task, i) => (
        <Item
          key={task.id || i}
          task={task}
          onCheck={onCheck}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </Wraper>
  )
}
