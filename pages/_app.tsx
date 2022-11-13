import '../styles/globals.css'
import Navbar from '../components/Navbar'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=''>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
