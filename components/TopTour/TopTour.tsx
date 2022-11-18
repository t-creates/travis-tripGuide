import React from 'react';

import { TopTourCard } from '../index';
import { topTourData } from '@/data/topTour';

const TopTour = () => (
  <div>
    <h1 className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl mt-36 p-1">Top Tour</h1>
    <p className="homepageDesc break-words mt-3">Keep Calm & Travel On</p>
    <div className="flex justify-between items-center laptop:flex-row mobile:flex-col max-w-7xl">
      {topTourData.map((tourCard) => (
        <TopTourCard
          key={tourCard.id}
          image={tourCard.image}
          title={tourCard.title}
          popularPlaces={tourCard.popularPlaces}
          locationID={tourCard.locationID}
        />
      ))}
    </div>
  </div>
);

export default TopTour;
