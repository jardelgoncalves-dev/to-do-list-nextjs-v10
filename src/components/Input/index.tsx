import { Wrapper } from './styles'

interface InputProp {
  value?: string
  className?: string
  placeholder?: string
  onChange: (value: string) => void
}

export function Input({ value, className, placeholder, onChange }: InputProp) {
  return (
    <Wrapper
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
