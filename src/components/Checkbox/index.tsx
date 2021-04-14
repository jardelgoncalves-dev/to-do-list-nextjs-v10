import { CheckmarkIcon, Wrapper } from './styles'

interface CheckboxProp {
  checked: boolean
  onCheck?: () => void
}

export function Checkbox({ checked, onCheck }: CheckboxProp) {
  return (
    <Wrapper className={checked ? '--checked' : ''} onClick={onCheck}>
      {checked && (
        <CheckmarkIcon>
          <div className="checkmark_stem"></div>
          <div className="checkmark_kick"></div>
        </CheckmarkIcon>
      )}
    </Wrapper>
  )
}
