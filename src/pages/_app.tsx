/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient, QueryClientProvider } from 'react-query'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/GlobalStyles'

type Props = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </QueryClientProvider>
  )
}

export default MyApp
