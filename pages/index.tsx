import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';

import { HeroSection, FeaturedDestinations, SearchBar, Destinations, TopTour } from '../components'

import CarHomePage from '@/components/CarHomePage';
import NewsLetter from '@/components/home/newsletter';
import { ToggleThemeButton } from '../components';

const Home: NextPage = () => {
  return (
    <div className="pt-11 mobile:mx-5 tablet:mx-20 desktop:mx-72">
      <div className='mb-36'>
        <HeroSection />
      </div>
      <SearchBar />
      <Destinations />
      <FeaturedDestinations />
      <TopTour />
    </div>
  )
}

export default Home;
