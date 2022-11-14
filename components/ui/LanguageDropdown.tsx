import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const LanguageDropdown: FC<Props> = (props): JSX.Element => {
  return (
    <Link href="/" passHref>
      <a href="#" className="flex items-center p-2 text-gray-700 hover:text-gray-800">
        <img
          src="https://tailwindui.com/img/flags/flag-canada.svg"
          alt=""
          
        />
      </a>
      {/* <img src='https://miro.medium.com/max/1400/0*o0-6o1W1DKmI5LbX.png' width="20" height="20" className=" w-[20px] h-[20px] rounded-full" /> */}
    </Link>
  );
};

export default LanguageDropdown;