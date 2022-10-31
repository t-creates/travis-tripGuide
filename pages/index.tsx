import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';

import { Destinations, HeroSection } from '../components'

const Home: NextPage = () => {
  return (
    <div className="pt-11 mx-5">
      <div className='mb-36'>
        <HeroSection />
      </div>
        <Destinations />
    </div>
  )
}

export default Home
