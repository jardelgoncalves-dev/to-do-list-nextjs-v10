/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/GlobalStyles'

type Props = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
