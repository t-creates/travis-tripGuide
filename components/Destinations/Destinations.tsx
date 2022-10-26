import React from 'react'
import DestinationCard from './DestinationCard'

const Destinations = () => {
  return (
    <div className='flex flex-col items-center justify-around w-screen overflow-auto'>
      <div className='pt-30'>
      <h1 className='homepageHeadline'>Search a best place in the world</h1>
      </div>
      <div className='flex items-center justify-center w-1/3'>
      <p className='homepageDesc break-words'> 
        Whether you’re looking for places for a vacation. We are here to Guide you
        about the details you need to check in and ease your trips in advance
      </p>
      </div>
      <div className='mt-10'>
        <DestinationCard />
      </div>
    </div>
  )
}

export default Destinations