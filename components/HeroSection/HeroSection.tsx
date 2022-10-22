import React from 'react'
import BannerHeadline from './BannerHeadline';
import BannerImage from './BannerImage';

const HeroSection = () => {
  const banners = [
    {
      id: 1,
      image: '',
      title: 'Hotel Booking',
      headline: 'Book With Us And Enjoy Your Journey!',
      description: '',
    },
    {
      id: 2,
      image: '',
      title: 'Car Booking',
      headline: 'Find Your Best Rental Car?',
      description: 'Find and book a great experience',

    },
    {
      id: 3,
      image: '',
      title: 'Flight Booking',
      headline: 'Amazing Flight to Switzerland',
      description: 'Find and book a great experience',
    }
  ]

  return (
    <div className='flex flex-col items-center'>
      <BannerImage />
      <div className='laptop:mt-48 laptop:ml-48 mobile:mx-8 mt-20'>
        <BannerHeadline bannerHeadline={banners[1].headline} bannerDesc={banners[1].description} />
      </div>
    </div>
  )
}

export default HeroSection