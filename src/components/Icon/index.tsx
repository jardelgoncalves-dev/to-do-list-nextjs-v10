import { Edit } from './Edit'
import { Trash } from './Trash'

const icons = {
  edit: <Edit />,
  trash: <Trash />,
}

export enum IconName {
  edit = 'edit',
  trash = 'trash',
}

interface IconProp {
  name: IconName
}

export function Icon({ name }: IconProp) {
  return icons[name]
}
