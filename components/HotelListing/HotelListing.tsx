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
      <div className="flex flex-col pl-16 gap-8">
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
        <button onClick={toggleViewAllHotelListings} className='dmSans font-medium text-base text-[#145CE6]'>
          View All
        </button>
      </div>
    </div>
  )
}

export default HotelListing