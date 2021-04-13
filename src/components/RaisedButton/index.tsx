import { Wrapper } from './styles'

interface RaisedButtonProps {
  text: string
  onPress: () => void
}

export function RaisedButton({ text, onPress }: RaisedButtonProps) {
  return <Wrapper onClick={onPress}>{text}</Wrapper>
}
