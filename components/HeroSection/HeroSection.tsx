import React from 'react';

import { BannerImage, BannerHeadline } from '../index';
// Static Data
import { banners } from '../../data/heroSection';

const HeroSection = () => (
  <div className="flex flex-auto">
    <BannerHeadline bannerHeadline={banners[0].headline} bannerDesc={banners[0].description} />
    <BannerImage image={banners[0].image} />
  </div>
);

export default HeroSection;
