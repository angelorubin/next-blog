import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core'
import { theme } from 'themes/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
