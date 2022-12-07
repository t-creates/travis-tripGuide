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
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.4532L3.43074 14.4147C2.91697 14.6971 2.31846 14.2374 2.4171 13.6362L3.09765 9.48853L0.213886 6.5502C-0.203981 6.12442 0.0251203 5.37905 0.600728 5.29162L4.59003 4.68568L6.37322 0.908861C6.6306 0.363713 7.3694 0.363713 7.62678 0.908861L9.40997 4.68568L13.3993 5.29162C13.9749 5.37905 14.204 6.12442 13.7861 6.5502L10.9023 9.48853L11.5829 13.6362C11.6815 14.2374 11.083 14.6971 10.5693 14.4147L7 12.4532Z" fill="#FFD166" />
          </svg>
          <p className='pl-2 poppins font-medium text-base text-c3'>
            {fiveStarRating}
            <span className='dmSans font-medium text-c4 text-base'>({totalReviews})</span>
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