import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { moonDark, moonLight, sunLight, sunDark } from '../public/themes';

const ToggleThemeButton = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div
      className={`inline-flex w-32 h-[38px] py-1 pl-[5px] pr-1 gap-2.5 ${
        currentTheme === 'dark'
          ? 'bg-[#3B3E44] border-[#3B3E44]'
          : 'bg-[#FCFCFD] border-[#F4F5F6]'
      }  border-[0.5px]  drop-shadow-md  rounded-lg`}
    >
      <button
        className={`${
          currentTheme === 'dark'
            ? 'bg-[#464950] border-[#3B3E44]'
            : 'bg-[#FCFCFD] border-[#F4F5F6]'
        }  py-[3px] px-[18px] rounded-lg border-[0.5px] drop-shadow-md`}
      >
        <Image
          src={currentTheme === 'dark' ? moonLight : sunDark}
          alt=''
          width={17}
          height={17}
        />
      </button>
      <button
        onClick={() =>
          setTheme(`${currentTheme === 'dark' ? 'light' : 'dark'}`)
        }
        className=' hover:bg-[#cbcccd] py-[3px] px-[18px] rounded-lg'
      >
        <Image
          src={currentTheme === 'dark' ? sunLight : moonDark}
          alt=''
          width={17}
          height={17}
        />
      </button>
    </div>
  );
};

export default ToggleThemeButton;
