import React from 'react'
import Image from 'next/image'

interface iTrendingCitiesCard {
  title: string;
  location: string;
  rooms: number;
  costPerNight: number;
  fiveStarRating: number;
  totalReviews: number;
  image: any;
  distanceToTownCenter: string;
}

const TrendingCitiesCard = ({ image, location, fiveStarRating, totalReviews, costPerNight }: iTrendingCitiesCard) => {
  return (
    <div className='flex flex-row items-start'>
      <div className='p-[14px]'>
        <Image src={image} alt='Trending City' width={177} height={183} className='rounded-2xl' />
      </div>
      <div className='flex flex-col pl-2 tablet:gap-6 gap-2 '>
        <h3 className='dmSans font-bold text-base text-c3 pt-4'>{location}</h3>
        <div className='flex flex-row items-center'>
          {/* Star SVG */}
          <Image src='/icons/Star.svg' alt='Star' width={14} height={15} />
          <p className='pl-2 poppins font-medium text-base text-c3'>
            {fiveStarRating}
            <span className='dmSans font-medium text-c4 text-base'> ({totalReviews})</span>
          </p>
        </div>
        <div className='flex flex-row items-center'>
          <p className='dmSans font-semibold tablet:text-[25px] tablet:leading-[18px] text-sm text-c3'>
            ${costPerNight}
            <span className='dmSans font-medium text-[15px] leading-[9px] text-c4'>/night</span>
          </p>
        </div>
        <button className='flex items-center justify-center w-[99px] h-[33px]  bg-[#316BFF] rounded-md'>
          <p className='text-c9 dmSans text-[16px]'>Book Now</p>
        </button>
      </div>
    </div>
  )
}

export default TrendingCitiesCard