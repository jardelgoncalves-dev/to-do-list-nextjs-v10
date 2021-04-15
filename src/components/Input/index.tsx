import { Wrapper } from './styles'

interface InputProp {
  value?: string
  placeholder?: string
  onChange: (value: string) => void
}

export function Input({ value, placeholder, onChange }: InputProp) {
  return (
    <Wrapper
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
