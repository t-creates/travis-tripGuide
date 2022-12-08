import React from 'react'
import Image from 'next/image'

interface iExploreTheWorld {
  title: string;
  location: string;
  rooms: number;
  costPerNight: number;
  fiveStarRating: number;
  totalReviews: number;
  image: any;
  distanceToTownCenter: string;
}

const ExploreTheWorldCard = ({ image, fiveStarRating, totalReviews, costPerNight, title, distanceToTownCenter, location, rooms }: iExploreTheWorld) => {
  return (
    <>
      <Image src={image} alt='Explore The World' width={242} height={152} className='rounded-2xl' />
      <div className='flex flex-row items-center mt-2 mb-5'>
        {/* Star SVG */}
        <Image src='/icons/Star.svg' alt='Star' width={14} height={15} />
        <p className='pl-2 dmSans font-medium text-c3'>
          {fiveStarRating}
          <span className='dmSans font-medium text-c4'> ({totalReviews})</span>
        </p>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <h3 className='dmSans font-medium text-c3'>{title}</h3>
        <button
          className='flex flex-row justify-center items-center w-[60px] h-[30px] bg-[#316BFF] rounded-md px-5 py-2 text-c9 dmSans'>
          ${costPerNight}
        </button>
      </div>
      <h4 className='mb-5 dmSans font-medium text-c4'>{distanceToTownCenter} to Town Center</h4>
      <div className='flex flex-row items-center'>
        {/* Location SVG */}
        <Image src='/icons/Location.svg' alt='Location' width={18} height={18} />
        <p className='p-1 dmSans font-normal text-c4'>{location}</p>
      </div>
      <div className='flex flex-row items-center'>
        {/* Building SVG */}
        <Image src='/icons/Building.svg' alt='Building' width={18} height={18} />
        <p className='p-1 dmSans font-normal text-c4'>Rooms available: {rooms}</p>
      </div>
    </>
  )
}

export default ExploreTheWorldCard