import React from 'react';
import Image from 'next/image';

import logo from '../public/logo.svg';

const Logo = () => {
  return (
    <div className='flex gap-2 '>
      <Image src={logo} height={24} width={25.26} alt='' />
      <h3 className='text-l font-bold'>TripGuide</h3>
    </div>
  );
};

export default Logo;
