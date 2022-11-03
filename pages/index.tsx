import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';

import { Destinations, HeroSection, FeaturedDestinations } from '../components'

const Home: NextPage = () => {
  return (
    <div className="pt-11 mobile:mx-5 tablet:mx-20">
      <div className='mb-36'>
        <HeroSection />
      </div>
        <Destinations />
        <FeaturedDestinations />
    </div>
  )
}

export default Home
