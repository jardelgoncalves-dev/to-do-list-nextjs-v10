import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #0466c8;
  }

  body {
    font-family: 'Lato', sans-serif;
    color: #ffffff;
  }

  .radius {
    border-radius: 8px;
  }

  .modal-header-custom {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .modal-footer-custom {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

`
