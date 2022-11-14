import Head from 'next/head'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css'
import { store } from '@/store'
//import Navbar from '../components/Navbar'
import SessionCheck from '@/helpers/sessionCheck'
import MainLayout from '@/components/layouts/layout.main'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp;
