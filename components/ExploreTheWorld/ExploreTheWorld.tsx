import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

import { ExploreTheWorldCard } from '@/components'
import { exploreTheWorldData } from '@/constants/exploreTheWorld'

const ExploreTheWorld = () => {
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
          <h1 className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl">Explore The World</h1>
          <p className="homepageDesc break-words mt-3">10,788 beautiful places to go</p>
        </div>
        <div className='items-center mobile:hidden tablet:flex'>
          <button onClick={movePrev} disabled={isDisabled('prev')}
            className='disabled:cursor-not-allowed hover:bg-c6 rounded-full' >
            {/* Left Arrow */}
            <Image src='/icons/ArrowLeft.svg' alt='Left Arrow' width={25} height={24} />
          </button>
          <button onClick={moveNext} disabled={isDisabled('next')}
            className='disabled:cursor-not-allowed hover:bg-c6 rounded-full' >
            {/* Right Arrow */}
            <Image src='/icons/ArrowRight.svg' alt='Right Arrow' width={25} height={24} />
          </button>
        </div>
      </div>
      <div ref={carousel}
        className="carousel-container relative overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide
        flex justify-between items-center flex-row overflow-x-auto py-10 gap-[30px]"
      >
        {exploreTheWorldData.map((exploreCard) => (
          <div
            key={exploreCard.id}
            className="tablet:min-w-[270px] h-[362px] mobile:min-w-[200px] mobile:h-[375px]
            relative snap-start carousel-item rounded-2xl bg-c9 p-3 flex flex-col hover:shadow-2xl hover:cursor-pointer">
            <ExploreTheWorldCard {...exploreCard} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreTheWorld