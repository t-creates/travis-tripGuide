import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { TopTourCard } from '@/components';
import { topTourData } from '@/constants/topTour';

const TopTour = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  // Carousel
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className='mt-36'>
      <div className='flex flex-row justify-between'>
        <div>
          <h1 className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl p-1">Top Tour</h1>
          <p className="homepageDesc break-words mt-3 mb-12">Keep Calm & Travel On</p>
        </div>
        <div className='flex items-center mobile:hidden tablet:flex'>
          <button onClick={movePrev} disabled={isDisabled('prev')}
            className='disabled:cursor-not-allowed hover:bg-c6 rounded-full' >
            {/* Left Arrow */}
            <Image src="/icons/ArrowLeft.svg" alt="arrow-left" width={25} height={24} />
          </button>
          <button onClick={moveNext} disabled={isDisabled('next')}
            className='disabled:cursor-not-allowed hover:bg-c6 rounded-full' >
            {/* Right Arrow */}
            <Image src="/icons/ArrowRight.svg" alt="arrow-right" width={25} height={24} />
          </button>
        </div>
      </div>
      <div ref={carousel}
        className="carousel-container relative overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide
        flex justify-between items-center laptop:flex-row mobile:flex-col laptop:overflow-x-auto gap-5"
      >
        {topTourData.map((tourCard) => (
          <div
            key={tourCard.id}
            className="tablet:min-w-[370px] h-[495px] mobile:min-w-[250px] mobile:h-[375px] relative snap-start carousel-item"
          >
            <TopTourCard
              image={tourCard.image}
              title={tourCard.title}
              popularPlaces={tourCard.popularPlaces}
              locationID={tourCard.locationID}
              location={tourCard.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default TopTour;
