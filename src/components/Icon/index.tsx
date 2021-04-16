import { Edit } from './Edit'
import { Trash } from './Trash'
import { Close } from './Close'

const icons = {
  edit: <Edit />,
  trash: <Trash />,
  close: <Close />,
}

export enum IconName {
  edit = 'edit',
  trash = 'trash',
  close = 'close',
}

interface IconProp {
  name: IconName
}

export function Icon({ name }: IconProp) {
  return icons[name]
}
