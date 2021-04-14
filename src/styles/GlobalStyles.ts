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

`
