import React from 'react';

import { TopTourCard } from '../index';
import { topTourData } from '../../data/topTour';

const TopTour = () => {
  console.log(topTourData);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {topTourData.map((tc) => (
          <TopTourCard
            key={tc.id}
            image={tc.image}
            title={tc.title}
            rating={tc.rating}
            activities={tc.activities}
            id={tc.id}
            className="container"
          />
        ))}
      </div>
      <h1 className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl mt-36 p-1">Top Tour</h1>
      <p className="homepageDesc break-words mt-3">Keep Calm & Travel On</p>
    </div>
  );
};

export default TopTour;
