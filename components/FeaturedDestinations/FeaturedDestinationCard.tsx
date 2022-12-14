import React from 'react';
import Image from 'next/image';

import { manIcon } from '@/public';


interface iFeaturedDestinations {
  containerStyles: string;
  image: any;
  title: string;
  rating: number;
  activities: number;
  id: number;
}

const FeatureDestinationCard = ({ image, title, rating, activities, containerStyles }: iFeaturedDestinations) => {
  const cName = containerStyles === "rectangle" ? "col-start-1 laptop:col-span-2" : "w-full h-full";
  const imageHeight = () => {
    if (containerStyles === "rectangle") {
      return 'h-[12rem]';
    }
    else if (containerStyles === 'vertical') {
      return 'h-[16.3rem]';
    }
    else if (containerStyles === 'square') {
      return 'h-[9rem]';
    }
  }

  return (
    <div className={`${cName} ${imageHeight()} relative`} >
      <Image
        src={image}
        alt="Top Tour Location"
        className='rounded-2xl '
        layout='fill'
      />
      {containerStyles === 'square' ? (
        <>
          <p className='absolute text-orange-600 w-7 text-center ml-4 mt-4 bg-c9 rounded-3xl text-xs'>{rating}</p>
          <h3 className='absolute text-c9 tracking-wider font-semibold bottom-6 left-5 text-lg dmSans'>{title}</h3>
          <div className='flex flex-row'>
            <div className='absolute bottom-1 left-5'>
              <Image
                src={manIcon}
                alt='Activities'
                width={12}
                height={12}
                className='rounded-full' />
            </div>
            <p className='absolute text-c9 tracking-wider bottom-2 left-10 dmSans text-[.5rem]'>{activities} Activites</p>
          </div>

        </>
      ) : (
        <>
          <p className='absolute text-orange-600 w-10 text-sm text-center ml-5 mt-5 bg-c9 rounded-3xl'>{rating}</p>
          <h3 className='absolute text-c9 tracking-wider font-semibold leading-10 bottom-6 left-5 text-xl dmSans'>{title}</h3>
          <div className='flex flex-row'>
            <div className='absolute bottom-1 left-5'>
              <Image
                src={manIcon}
                alt='Activities'
                width={15}
                height={15}
                className='rounded-full' />
            </div>
            <p className='absolute text-c9 tracking-wider bottom-2 left-10 dmSans text-[.8rem]'>{activities} Activites</p>
          </div>
        </>
      )}

    </div >
  );
};

export default FeatureDestinationCard;
