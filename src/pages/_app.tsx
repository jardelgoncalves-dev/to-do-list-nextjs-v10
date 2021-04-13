/* eslint-disable @typescript-eslint/no-explicit-any */
import { GlobalStyle } from '../styles/GlobalStyles'

type Props = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
