import React from 'react'
import Image from 'next/image'

interface iHotelListingCards {
  title: string
  location: string
  rooms: number
  costPerNight: number
  fiveStarRating: number
  totalReviews: number
  image: any
  distanceToTownCenter: string
  depatureLocation: string
  checkInDate: string
  checkOutDate: string
  propertyType: string
  facilities: Array
  specialOffer: boolean
  website: string
  safetyMeasures: boolean
  children?: React.ReactNode
}

const HotelListingCards = ({ title, location, checkInDate, checkOutDate, costPerNight, fiveStarRating, totalReviews, image,
  depatureLocation, facilities, website, propertyType }: iHotelListingCards) => {
  return (
    <>
      <div className='w-[420px] h-[465px] container absolute'>
        <Image
          src={image}
          alt={title}
          layout='fill'
          className="object-fill rounded-l-xl"
          priority
        />
      </div>
      <div
        className='border-slate-100 border-4 rounded-xl border-l-none h-[465px] w-[970px]
          flex flex-col items-start pl-[446px]'>
        {/* Card Heading, Reviews */}
        <div>
          <h3 className='text-[40px] text-[#23262F] leading-[60px] dmSans font-bold tracking-tighter-[-0.005em]
              pt-10'>
            {location}
          </h3>
        </div>
        <div className='flex flex-row items-center flex-wrap pt-[22px] gap-5'>
          <div className='flex flex-row items-center'>
            <Image src={'/icons/star.svg'} alt='star' width={20} height={20} />
            <p className='pl-2 dmSans font-semibold text-c3 text-[14px] leading-5'>
              {fiveStarRating}
              <span className='dmSans font-medium text-c4 text-[14px] leading-5'> ({totalReviews} reviews)</span>
            </p>
          </div>
          <div className='flex flex-row items-center'>
            <Image src='/icons/Flag.svg' alt='flag' width={20} height={20} />
            <p className='pl-2 dmSans font-medium text-base text-c4'>
              {location}
            </p>
          </div>
        </div>
        {/* Location, Depatures, Check In & Out */}
        <div className='flex flex-row items-center flex-wrap pt-[41px] gap-5'>
          <div className='flex flex-row items-center'>
            <Image src='/icons/Location1.svg' alt='vector' width={20} height={20} />
            <p className='text-c1 dmSans font-normal pl-2'>{title}</p>
          </div>
          <div className='flex flex-row items-center'>
            <Image src='/icons/Calender.svg' alt='location' width={20} height={20} />
            <p className='text-c1 dmSans font-normal pl-2'>{checkInDate} - {checkOutDate}</p>
          </div>
          <div className='flex flex-row items-center'>
            <Image src='/icons/Plane.svg' alt='plane' width={20} height={20} />
            <p className='text-c1 dmSans font-normal pl-2'>Departure from {depatureLocation}</p>
          </div>
        </div>
        {/* Facilities  */}
        <div className='flex justify-between w-full items-end '>
          <div className='flex flex-col pt-[40px] gap-2'>
            {facilities.slice(0, 4).map((facility, index) => (
              <div key={index} className='flex flex-row items-center'>
                <Image src={facility.image} alt='wifi' width={20} height={20} />
                <p className='pl-2 dmSans font-medium text-base text-c3'>{facility.title}</p>
              </div>
            ))}
            <a href={website} rel="noreferrer" target="_blank" className='flex flex-row items-center'>
              <Image src='/icons/Website.svg' alt='Company Website' width={20} height={20} />
              <p className='pl-2 dmSans font-medium text-base text-c3'>Visit {propertyType} Website</p>
            </a>
          </div>
          {/* Booking */}
          <div className='flex flex-col items-center justify-center pr-20'>
            <p className='text-c3 text-[28px] leading-[41px] font-bold dmSans'>
              ${costPerNight}
              <span className='text-c4 pl-2 dmSans font-medium text-base'>
                For Two
              </span>
            </p>
            <button
              className='bg-[#316BFF] text-white rounded-[40px] py-3 px-10 mt-4'
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelListingCards