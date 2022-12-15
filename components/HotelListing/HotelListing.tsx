import React, { useState } from 'react'
import { HotelListingCards } from '@/components'

import { hotelListingData } from '@/constants/hotelListing'

const HotelListing = () => {
  const [viewAllHotelListings, setViewAllHotelListings] = useState(false)

  const toggleViewAllHotelListings = () => {
    setViewAllHotelListings(prevState => !prevState)

  }

  return (
    <div>
      <div className="flex flex-col pl-16 gap-8 py-24">
        {!viewAllHotelListings ? (
          hotelListingData.slice(0, 3).map((hotel) => (
            <div key={hotel.id} className='w-[970px] h-[465px]'>
              <HotelListingCards
                {...hotel}
              />
            </div>
          ))
        ) : (
          hotelListingData.map((hotel) => (
            <div key={hotel.id} className='w-[970px] h-[465px]'>
              <HotelListingCards
                {...hotel}
              />
            </div>
          ))
        )
        }
        {!viewAllHotelListings ? (
          <div className='flex items-center justify-center pt-14'>
            <button onClick={toggleViewAllHotelListings} className='dmSans font-medium text-base text-c1 px-2 py-5
        w-[176px] h-[46px] border-c5 border-2 rounded-[474px] flex items-center justify-center 
         hover:text-white hover:border-[#316BFF] hover:bg-[#316BFF]'
            >
              View All
            </button>
          </div>
        ) : null
        }
      </div>
    </div>
  )
}

export default HotelListing