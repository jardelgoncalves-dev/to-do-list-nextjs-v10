import styled from 'styled-components'

export const Wrapper = styled.button`
  height: 48px;
  width: 48px;
  background-color: transparent;
  border: 1px solid #e6e6e6ca;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
  }
  margin: 0 4px;
  &:hover {
    opacity: 0.8;
  }
`
