import React from 'react';

import { FeaturedDestinationCard } from '../index';
import { featuredDestinationData } from '../../data/featuredDestination';

const FeaturedDestinations = () => (
  <>
    <h1
      className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl mobile:mt-10 laptop:mt-36 break-words"
    >
      Featured Destinations
    </h1>
    <p className="homepageDesc break-words mt-3">Popular destinations open to visitors from Indonesia</p>
    <div className="laptop:mt-12 mobile:mt-7">
      <div className="flex justify-between items-center laptop:flex-row mobile:flex-col max-w-7xl">
        <div className="grid laptop:grid-cols-2 gap-5 laptop:w-2/3 mobile:w-full mobile:grid-cols-1 mt-5">
          {featuredDestinationData.slice(0, 3).map((tc) => (
            <FeaturedDestinationCard
              key={tc.id}
              image={tc.image}
              title={tc.title}
              rating={tc.rating}
              activities={tc.activities}
              id={tc.id}
              type={tc.type}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-5 laptop:w-1/3 mobile:w-full laptop:ml-5 mobile:mt-5">
          {featuredDestinationData.slice(3, 6).map((tc) => (
            <FeaturedDestinationCard
              key={tc.id}
              image={tc.image}
              title={tc.title}
              rating={tc.rating}
              activities={tc.activities}
              id={tc.id}
              type={tc.type}
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default FeaturedDestinations;
