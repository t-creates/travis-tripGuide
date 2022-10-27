import React from 'react'
import { hotelLocationData as data } from '../../api/hotelLocation'
import DestinationCard from './DestinationCard'


const Destinations = () => {
  console.log(data);
  const locations = [];
  const destinations = locations.length

  return (
    <>
    <div className='flex flex-col items-center justify-around'>
      <div className='pt-30'>
      <h1 className='homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl'>Search a best place in the world</h1>
      </div>
      <div className='flex items-center justify-center laptop:w-1/2 mobile:w-full'>
      <p className='homepageDesc break-words'> 
        Whether you’re looking for places for a vacation. We are here to Guide you
        about the details you need to check in and ease your trips in advance
      </p>
      </div>
      <div className='mt-10'>
      {data.map((location, index) => {
        if (location === 'CITY') {
          locations.push(data[index])
          return (
          <DestinationCard locations={locations} destinations={destinations} key={index} />
          )
        }
      })}
      </div>
      </div>
      </>
  )
}



// DESTINATION CARD & FLOW
// Country -> list of cities -> hotel destinations per city
// Input country then take a list of 8 (max) city names -> input city name into API and get back number of hotels (destinations) or...
// data.sort for cites then for those cities city.length to get number of objects in array === destinations from same API call
// Cards link to search bar location fill and show results on search screen (change the state of search)



export default Destinations