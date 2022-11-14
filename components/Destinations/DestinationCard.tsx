import React from 'react';
import Image from 'next/image';

interface iDestination {
  image: any;
  destinations: number;
  location: string;
}

const DestinationCard = ({ image, destinations, location }: iDestination) => {
  return (
    <div
      className='flex flex-col p-5 items-start border-slate-100 border-2 rounded-lg
    hover:border-none cardBackground hover:shadow-xl hover:cursor-pointer mobile:min-w-[12rem]'
    >
      <div>
        <Image
          src={image}
          alt='destination'
          width={60}
          height={60}
          className='rounded-lg'
        />
      </div>
      <h3 className='text-xl font-bold text-c3 dmSans pt-3'>{location}</h3>
      <p className='text-sm text-c4 dmSans pt-3'>{destinations} Destinations</p>
    </div>
  );
};

export default DestinationCard;
