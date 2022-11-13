import React from 'react';

import { FeatureDestinationCard } from '../index';
import { topTourData } from '../../data/topTour';

const TopTour = () => (
  <div className="laptop:mt-14 mobile:mt-7">
    <div className="flex justify-between items-center">
      <div className="grid grid-cols-2 gap-5 w-2/3 ">
        {topTourData.slice(0, 3).map((tc) => (
          <FeatureDestinationCard
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
      <div className="grid grid-cols-1 grid-rows-3 gap-5 w-1/3 ml-5">
        {topTourData.slice(3, 6).map((tc) => (
          <FeatureDestinationCard
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
    <h1 className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl mt-36 p-1">Top Tour</h1>
    <p className="homepageDesc break-words mt-3">Keep Calm & Travel On</p>
  </div>
);

export default TopTour;
