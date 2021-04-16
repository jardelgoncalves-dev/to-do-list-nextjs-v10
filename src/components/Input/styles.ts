import styled from 'styled-components'

export const Wrapper = styled.input`
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 56px;
  width: 500px;
  background-color: transparent;
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  outline: none;

  &.darken {
    color: var(--primary-color);
    border: 2px solid #e6e6e6ca;
  }

  &.block {
    max-width: 100%;
  }

  &::placeholder {
    font-size: 15px;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.7);
  }

  @media only screen and (max-width: 650px) {
    & {
      flex: 1;
    }
  }
`
