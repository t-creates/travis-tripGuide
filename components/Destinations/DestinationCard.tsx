import React from 'react';
import Image from 'next/image';

const DestinationCard = ({ image, destinations, location }) => (
  <div className="flex flex-col p-5 items-start border-slate-100 border-2 rounded-lg
    hover:border-none cardBackground hover:shadow-xl hover:cursor-pointer mobile:min-w-[12rem]"
  >
    <div>
      <Image src={image} alt="destination" width={60} height={60} className="rounded-lg" />
    </div>
    <div>
      <p className="text-xl font-bold c3 dmSans pt-3">{location}</p>
    </div>
    <div>
      <h3 className="text-sm c4 dmSans pt-3">{destinations} Destinations</h3>
    </div>
  </div>
);
export default DestinationCard;
