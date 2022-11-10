import React from 'react';

const Destinations = () => (
  <div className="flex flex-col items-center justify-around">
    <h1 className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl mt-36 p-1">
      Search a best place in the world
    </h1>
    <div className="flex items-center justify-center laptop:w-1/2 mobile:w-full">
      <p className="homepageDesc break-words mt-3">
        Whether you’re looking for places for a vacation. We are here to Guide you
        about the details you need to check in and ease your trips in advance
      </p>
    </div>
  </div>
);

export default Destinations;
