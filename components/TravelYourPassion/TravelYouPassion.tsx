import React from 'react'

import { TravelYourPassionCard } from '@/components'
import { travelYourPassionData } from '@/constants/TravelYourPassion'

const TravelYouPassion = () => {
  return (
    <div className='pb-10'>
      <h1 className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl p-1">Travel Your Passion</h1>
      <p className="homepageDesc break-words mt-3 pb-12">Most brillaint reasons TripGuide should be your one-stop-shop!</p>
      <div className='flex justify-between items-center laptop:flex-row mobile:flex-col laptop:overflow-x-auto gap-5'>
        {travelYourPassionData.map((passionCard) => (
          <div
            key={passionCard.id}
            className="tablet:min-w-[270px] h-[362px] mobile:min-w-[200px] mobile:h-[375px]
                      relative snap-start carousel-item rounded-2xl bg-c9 p-3 flex flex-col hover:shadow-2xl hover:cursor-pointer">
            <TravelYourPassionCard
              {...passionCard}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TravelYouPassion