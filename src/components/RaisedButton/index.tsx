import { Wrapper } from './styles'

interface RaisedButtonProps {
  text: string
  className?: string
  disabled?: boolean
  onPress?: () => void
}

export function RaisedButton({
  text,
  disabled,
  onPress,
  className,
}: RaisedButtonProps) {
  return (
    <Wrapper
      className={`${className} ${disabled ? '--disabled' : ''}`}
      onClick={onPress}
    >
      {text}
    </Wrapper>
  )
}
