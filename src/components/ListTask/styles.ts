import styled from 'styled-components'

export const Wraper = styled.section`
  margin-top: -45px;
  display: flex;
  flex-direction: column;
  padding: 0 200px;

  .card-item {
    display: flex;
    background-color: #ffffff;
    border: 1px solid #e6e6e6ca;
    border-radius: 8px;
    padding: 24px 48px;

    &__finished {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__content {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      padding: 0 12px;
      flex: 1;
      .text {
        color: #121212;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          top: 0;
          width: 0;
          height: 2px;
          background-color: red;
          margin: auto 0;
          z-index: 1;
          transition: width 0.4s ease-in;
        }
        &.--checked::after {
          transition: width 0.4s ease-out;

          width: 100%;
        }
      }
      .date {
        margin-top: 8px;
        font-size: 14px;
        color: #555;
      }
    }
    &__action {
      display: flex;
    }
  }
  .card-item + .card-item {
    margin-top: 16px;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0 60px;
  }

  @media only screen and (max-width: 700px) {
    padding: 0 20px;
  }
`
