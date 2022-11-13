import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';

import { HeroSection, FeaturedDestination, SearchBar, TopTour } from '../components'

const Home: NextPage = () => {
  return (
    <div className="pt-11 mobile:mx-5 tablet:mx-20">
      <div className='mb-36'>
        <HeroSection />
      </div>
      <SearchBar />
      <FeaturedDestination />
      <TopTour />
    </div>
  )
}

export default Home
