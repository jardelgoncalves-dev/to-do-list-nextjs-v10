import { RaisedButton } from '../../components'
import { Input } from '../../components/Input'
import { Wrapper } from './styles'

interface AddTaskContainerProp {
  onPress: () => void
  onChange: (value: string) => void
  inputValue?: string
  inputPlaceholder?: string
}

export function AddTaskContainer({
  onPress,
  onChange,
  inputValue,
  inputPlaceholder,
}: AddTaskContainerProp) {
  return (
    <Wrapper>
      <Input
        onChange={onChange}
        placeholder={inputPlaceholder}
        value={inputValue}
      />
      <RaisedButton
        text="Add Task"
        onPress={inputValue ? onPress : () => null}
      />
    </Wrapper>
  )
}
