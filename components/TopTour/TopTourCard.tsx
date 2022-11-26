import React from 'react';
import Image from 'next/image';

interface iTopTour {
  image: any;
  title: string;
  popularPlaces: number;
  locationID: number;
  location: string;
}

const TopTourCard = ({ image, popularPlaces, title, locationID, location }: iTopTour) => (
  <>
    <Image src={image} alt={title} layout='fill' className='object-fill rounded-xl' />
    <h3 className='absolute text-c9 text-center ml-4 mt-4 bg-gray-900/20 py-3 px-5 rounded-3xl text-base dmSans'>{title}</h3>
    <h1 className='absolute text-c9 bottom-14 left-10 text-xl dmSans font-semibold'>{location}</h1>
    <p className='absolute text-c9/80 tracking-wider bottom-10 left-10 dmSans text-xs'>{popularPlaces} Popular Places</p>
  </>
);

export default TopTourCard;
