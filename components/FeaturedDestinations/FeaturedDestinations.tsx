import React from 'react';

import { FeaturedDestinationCard } from '@/components';
import { featuredDestinationData } from '@/constants/featuredDestination'

const FeaturedDestinations = () => (
  <>
    <h1
      className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl mobile:mt-10 laptop:mt-36 break-words"
    >
      Featured Destinations
    </h1>
    <p className="homepageDesc break-words mt-3">Popular destinations open to visitors from Indonesia</p>
    <div className="laptop:pt-10 mobile:pt-7">
      <div className="flex justify-between items-center laptop:flex-row mobile:flex-col max-w-7xl">
        <div className="grid laptop:grid-cols-2 gap-5 laptop:w-2/3 mobile:w-full mobile:grid-cols-1 mt-5">
          <FeaturedDestinationCard {...featuredDestinationData[0]} containerStyles="rectangle" />
          {featuredDestinationData.slice(1, 3).map((featDestCard) => (
            <FeaturedDestinationCard
              key={featDestCard.id}
              {...featDestCard}
              containerStyles="vertical"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-5 laptop:w-1/3 mobile:w-full laptop:ml-5 mobile:mt-5">
          {featuredDestinationData.slice(3, 6).map((featDestCard) => (
            <FeaturedDestinationCard
              key={featDestCard.id}
              {...featDestCard}
              containerStyles="square"
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default FeaturedDestinations;
