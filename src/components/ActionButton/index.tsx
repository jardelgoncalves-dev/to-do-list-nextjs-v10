import { Wrapper } from './styles'
import { Icon, IconName } from '../Icon'

interface ActionButtonProp {
  icon: IconName
  onPress?: () => void
}
export function ActionButton({ icon, onPress }: ActionButtonProp) {
  return (
    <Wrapper onClick={onPress}>
      <Icon name={icon} />
    </Wrapper>
  )
}
