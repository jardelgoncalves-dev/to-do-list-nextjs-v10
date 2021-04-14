import styled from 'styled-components'

export const Wrapper = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 8px;
  border: 2px solid var(--primary-color);
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: background-color 0.2s;
  outline: none;
  &.--checked {
    background-color: var(--primary-color);
  }
`

export const CheckmarkIcon = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);

  .checkmark_stem {
    position: absolute;
    width: 3px;
    height: 9px;
    background-color: #ffffff;
    left: 11px;
    top: 6px;
  }

  .checkmark_kick {
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: #ffffff;
    left: 8px;
    top: 12px;
  }
`
