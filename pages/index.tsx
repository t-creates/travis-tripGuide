import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';

import { HeroSection, FeatureDestinations, SearchBar, Destinations } from '../components'

const Home: NextPage = () => {
  return (
    <div className="pt-11 mobile:mx-5 tablet:mx-20">
      <div className='mb-36'>
        <HeroSection />
      </div>
      <SearchBar />
      <Destinations />
      <FeatureDestinations />
    </div>
  )
}

export default Home
