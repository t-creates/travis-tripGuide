import React from 'react'
import BannerHeadline from './BannerHeadline';
import BannerImage from './BannerImage';

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center'>
      <BannerImage />
      <div className='laptop:mt-48 laptop:ml-48 mobile:mx-8 mt-20'>
        <BannerHeadline />
      </div>
    </div>
  )
}

export default HeroSection