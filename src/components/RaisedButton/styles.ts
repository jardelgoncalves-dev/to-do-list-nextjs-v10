import styled from 'styled-components'

export const Wrapper = styled.button`
  height: 56px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  background-color: #fff;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 17px;
  border: none;
  border-radius: 8px;
  outline: none;
  transition: opacity 0.2s;

  &.primary {
    background-color: var(--primary-color);
    color: #fff;
  }
  &:hover {
    opacity: 0.8;
  }

  &.--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`
