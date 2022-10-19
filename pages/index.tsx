import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import CarHomePage from './../components/CarHomePage';

const Home: NextPage = () => {
  return (
    <div className="pt-11">
      <CarHomePage />
    </div>
  )
}

export default Home
