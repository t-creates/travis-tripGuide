import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HeroSection from '../components/HeroSection/HeroSection';

const Home: NextPage = () => {
  return (
    <div className="pt-11">
      <HeroSection />
    </div>
  )
}

export default Home
