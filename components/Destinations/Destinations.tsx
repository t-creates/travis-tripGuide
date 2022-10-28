import React from 'react'
import { hotelLocationData as data } from '../../api/hotelLocation'
import { optionsData } from '../../api/hotelLocation'
import DestinationCard from './DestinationCard'


// const maxDestinationCards = 8;
// const cities = [];

// const cityList = () => {
//   for (let i = 0; i < data.length; i++) {
//   if (data[i].type === 'CITY') {
//     cities.push(data[i].itemName);
//   }
//   }
// }

// cityList();

const Destinations = () => {
console.log(optionsData)

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
      {/* {cities.map((city, index) => (
          <DestinationCard city={city} key={index} />
          ))} */}
      </div>
      </div>
      </>
  )
}



// DESTINATION CARD & FLOW
// Country (set through state) -> list of cities -> hotel destinations per city
// Input country then take a list of 8 (max) city names -> input city name into API and get back number of hotels (destinations) or...
// data.forEach for cites then for those cities city.hotel.length to get number of objects in array === destinations from same API call
// Cards link to search bar location fill and show results on search screen (change the state of search)
// or Multiple API calls one for country and one for city --> then use city.hotel.length to get number of destinations


export default Destinations