import React from 'react';

import BannerHeadline from './BannerHeadline';
import BannerImage from './BannerImage';
// Static Data
import { banners } from '../../data/constants';

const HeroSection = () => (
  <div className="flex flex-auto">
    <BannerHeadline bannerHeadline={banners[1].headline} bannerDesc={banners[1].description} />
    <BannerImage image={banners[1].image} />
  </div>
);

export default HeroSection;
