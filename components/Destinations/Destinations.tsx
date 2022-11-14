import React from 'react';

import DestinationCard from './DestinationCard';
import { destinationCardsData as data } from '../../data/destinationCards';

// Cards still need to be linked to autofill search and render location results on search page && Dark theme

const Destinations = () => (
  <div className=''>
    <div className="mt-10 laptop:grid grid-cols-4 gap-5 container mobile:flex mobile:flex-row mobile:overflow-x-auto">
      {data.map((dc) => (
        <DestinationCard
          image={dc.image}
          location={dc.location}
          destinations={dc.destinations}
          key={dc.id}
        />
      ))}
    </div>
  </div>
);

export default Destinations;
