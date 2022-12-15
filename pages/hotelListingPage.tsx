import React from 'react'

import { HotelListing, Filter } from '@/components'

const hotelListingPage = () => {
  return (
    <div className='flex flex-row'>
      <Filter />
      <HotelListing />
    </div>
  )
}

export default hotelListingPage