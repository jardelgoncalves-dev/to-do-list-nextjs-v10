import { formatDate } from '../../utils/format'
import { ActionButton } from '../ActionButton'
import { Checkbox } from '../Checkbox'
import { IconName } from '../Icon'

export interface Task {
  id?: number
  title: string
  finished: boolean
  createdAt: string
}

export interface ItemProp {
  task: Task
  onCheck?: (id?: number) => void
  onEdit?: (task: Task) => void
  onDelete?: (id?: number) => void
}

export function Item({ task, onCheck, onEdit, onDelete }: ItemProp) {
  return (
    <div className="card-item">
      <div className="card-item__finished">
        <Checkbox checked={task.finished} onCheck={() => onCheck?.(task.id)} />
      </div>
      <div className="card-item__content">
        <span className={`text ${task.finished ? '--checked' : ''}`}>
          {task.title}
        </span>
        <span className="date">Created at {formatDate(task.createdAt)}</span>
      </div>
      <div className="card-item__action">
        {!task.finished && (
          <ActionButton icon={IconName.edit} onPress={() => onEdit?.(task)} />
        )}
        <ActionButton
          icon={IconName.trash}
          onPress={() => onDelete?.(task.id)}
        />
      </div>
    </div>
  )
}
