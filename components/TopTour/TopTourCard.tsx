import React from 'react';
import Image from 'next/image';

interface iTopTour {
  image: any;
  title: string;
  rating: number;
  activities: number;
  id: number;
}

const TopTourCard = ({ image, title, rating, activities, id }: iTopTour) => {

  if (id === 0) {
    return (
      <div className='col-span-2 object-fill'>
        <Image
          src={image}
          alt="Top Tour Location"
          width={700}
          height={180}
          className='rounded-2xl'
        />
      </div>
    )
  }
  else if (id > 2) {
    return (
      <div className=''>
        <Image
          src={image}
          alt="Top Tour Location"
          width={100}
          height={100}
          className='rounded-2xl'
        />
      </div>
    )
  }

  else if (id === 1 || id === 2) {
    return (
      <div className='row-span-1'>
        <Image
          src={image}
          alt="Top Tour Location"
          width={250}
          height={250}
          className='rounded-2xl'
        />
      </div>
    )
  }

};

export default TopTourCard;
