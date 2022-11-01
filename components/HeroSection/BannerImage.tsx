import React from 'react';
import Image from 'next/image';

const BannerImage = ({ image }) => (
  <div className="hero-banner-image laptop:h-[40rem] tablet:h-[25rem] mobile:h-96">
    <Image src={image} alt="hero-image" layout="fill" priority />
  </div>
);

export default BannerImage;
