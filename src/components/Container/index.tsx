import { Wrapper } from './styles'

interface ContainerProp {
  children: React.ReactNode
}

export function Container({ children }: ContainerProp) {
  return <Wrapper>{children}</Wrapper>
}
