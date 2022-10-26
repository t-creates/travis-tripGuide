import React from 'react'
import BannerHeadline from './BannerHeadline';
import BannerImage from './BannerImage';

// Images
import carBanner from '../../public/carBanner.png'
import flightBanner from '../../public/flightBanner.png'
import palmBeach from '../../public/palmBeach.png'

// Temporary data till we decide on pages or dynamic front-end
const banners = [
  {
    id: 0,
    image: palmBeach,
    title: 'Hotel Booking',
    headline: 'Book With Us And Enjoy Your Journey!',
    description: '',
  },
  {
    id: 1,
    image: carBanner,
    title: 'Car Booking',
    headline: 'Find Your Best Rental Car?',
    description: 'Find and book a great experience',

  },
  {
    id: 2,
    image: flightBanner,
    title: 'Flight Booking',
    headline: 'Amazing Flight to Switzerland',
    description: 'Find and book a great experience',
  }
]
const HeroSection = () => {

  return (
    <div className='mobile:mx-5 flex flex-auto'>
      <BannerHeadline bannerHeadline={banners[2].headline} bannerDesc={banners[2].description} />
      <BannerImage image={banners[2].image} />
    </div>
  )
}

export default HeroSection