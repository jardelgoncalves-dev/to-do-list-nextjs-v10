import styled from 'styled-components'

interface WrapperProp {
  isVisible: boolean
}

export const Wrapper = styled.div<WrapperProp>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #222222cc;
  padding: 32x;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 999;

  .modal {
    position: relative;
    background-color: #ffffff;
    border-radius: 16px;
    height: 300px;
    max-width: 500px;
    width: 100%;
    color: #222;
    display: flex;
    flex-direction: column;
    padding: 24px;

    &__footer,
    &__header {
      width: 100%;
    }

    &__content {
      flex: 1;
      padding: 16px 0;
      width: 100%;
      height: 100%;
    }

    &__close {
      position: absolute;
      right: -20px;
      top: -20px;
      height: 56px;
      width: 56px;
      background-color: var(--primary-color);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      outline: none;
    }
  }
`
