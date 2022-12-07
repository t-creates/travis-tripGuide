import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';

import { HeroSection, FeaturedDestinations, SearchBar, Destinations, TopTour, ExploreTheWorld, TrendingCities, TravelYourPassion } from '@/components'
import { CarHomePage, NewsLetter, ToggleThemeButton } from "../components"
import FooterNav from '../components/FooterComponent';

const Home: NextPage = () => {
  return (
    <>
      <div className='mb-36 pt-11 mobile:mx-5 tablet:mx-20 laptop:mx-36 desktop:mx-48'>
        <HeroSection />
      </div>
      <div className='pt-11 mobile:px-5 tablet:px-20 laptop:px-36 desktop:px-48 bg-bg'>
        <SearchBar />
        <Destinations />
        <FeaturedDestinations />
        <TopTour />
        <ExploreTheWorld />
      </div>
      <div className='mobile:px-5 tablet:px-20 laptop:px-36 desktop:px-48 pb-36 bg-bg1'>
        <TrendingCities />
      </div>
      <div className='mobile:px-5 tablet:px-20 laptop:px-36 desktop:px-48 pb-36 bg-bg'>
        <TravelYourPassion />
      </div>
      <FooterNav />
    </>
  );
};

export default Home;
