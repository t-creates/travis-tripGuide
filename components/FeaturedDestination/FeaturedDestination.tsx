import React from 'react';

import { FeaturedDestinationCard } from '../index';
import { destinationCardsData as data } from '../../data/destinationCards';

const FeaturedDestination = () => (
  <div>
    <div className="mt-10 laptop:grid grid-cols-4 gap-5 container mobile:flex mobile:flex-row mobile:overflow-x-auto">
      {data.map((dc) => (
        <FeaturedDestinationCard
          image={dc.image}
          location={dc.location}
          destinations={dc.destinations}
          key={dc.id}
        />
      ))}
    </div>
    <h1
      className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl mobile:mt-10 laptop:mt-36 break-words"
    >
      Featured Destinations
    </h1>
    <p className="homepageDesc break-words mt-3">Popular destinations open to visitors from Indonesia</p>
  </div>
);

export default FeaturedDestination;
