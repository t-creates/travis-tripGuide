import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Destinations from '../components/Destinations/Destinations';

import HeroSection from '../components/HeroSection/HeroSection';

const Home: NextPage = () => {
  return (
    <div className="pt-11 w-fit">
      <HeroSection />
      <Destinations />
    </div>
  )
}

export default Home
