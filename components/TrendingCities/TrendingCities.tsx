import React from 'react'

import { TrendingCitiesCard } from '@/components'
import { exploreTheWorldData } from '@/constants/exploreTheWorld'

const TrendingCities = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-36'>
      <div>
        <h1 className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl p-1">Trending Cities</h1>
        <p className="homepageDesc break-words mt-3">The most searched for cities on TripGuide</p>
      </div>
      <div className='grid grid-cols-2 justify-around gap-10 py-10 '>
        {exploreTheWorldData.slice(0, 6).map((data) => (
          <div
            key={data.id}
            className="w-[470px] h-[215px] rounded-2xl shrink bg-c9 hover:shadow-2xl hover:cursor-pointer"
          >
            <TrendingCitiesCard {...data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingCities