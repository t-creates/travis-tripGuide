import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Logo';
import CallToAction from '@/components/FooterComponent/CallToAction';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import { footerLinks } from '@/components/FooterComponent/links';

const FooterNav = () => {
  return (
    <div className=' flex flex-col w-[100%] h-[518px] bottom-0 bg-[#F4F5F6] dark:bg-[#222529] '>
      <div className='relative -top-[25%]'>
        <CallToAction />
      </div>
      <div className='flex w-[70%] mx-auto flex-wrap'>
        <div className='md:w-[30%] p-3'>
          <Logo />
          <p className='text-xs py-4 w-[80%]'>
            This is the team that specializes in making sure in the find it a
            your interior looks cool
          </p>
          {}
          <ToggleThemeButton />
        </div>
        {footerLinks.map((link) => (
          <div className='flex flex-col px-16 flex-grow flex-wrap'>
            <h2 className='text-lg font-bold'>{link.title}</h2>
            {link.sublinks.map((sublink) => (
              <Link
                id={sublink.name}
                href={sublink.link}
                className='text-xs leading-loose  hover:text-blue-500'
              >
                <p className='text-xs leading-loose  hover:text-blue-500 cursor-pointer'>
                  {sublink.name}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
