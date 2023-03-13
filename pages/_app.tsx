import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Component {...pageProps} />

  <header className='App-header'>
    <div className='nav-area'>
      <a href='#/' className='logo'>

      </a>

    </div>

  </header>
  </>
  )
}
