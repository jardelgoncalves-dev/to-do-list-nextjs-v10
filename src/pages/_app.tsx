/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head'
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
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <title>to.do</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
