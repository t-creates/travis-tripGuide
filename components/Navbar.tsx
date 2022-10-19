import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import  { useTheme } from 'next-themes';

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/navLogo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navBg, setNavBg] = useState('#c2c2c2');
    const [linkColor, setLinkColor] = useState('#c2c2c2');
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    const { systemTheme, theme, setTheme } = useTheme();
    
    const renderThemeChanger = () => {
      if(!mounted) return null;
  
      const currentTheme = theme === 'system' ? systemTheme : theme;
      
      if(currentTheme === 'dark') {
        return (
          <div className=" "
            onClick={() => setTheme('light')}
          > 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            
          </div>
        )
      } else {
        return (
          <div className=" "
            onClick={() => setTheme('dark')}
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="black">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            
            
          </div>
        )
      }
  
    }
    const navImageChanger = () =>{
      if(!mounted) return null;
  
      const currentTheme = theme === 'system' ? systemTheme : theme;
      
      if(currentTheme === 'dark'){
        return (
          <a className='flex jutify-center items-center gap-2 ' href='/'>
              <Image
                src={ NavLogo }
                alt='/'
                width='39'
                height='35'
                className='cursor-pointer  opacity-100  item-center pr-2 '
              />
              <h2 className="text-xl">Trip Guide</h2>
          </a>
        ) 
      }else {
        return (
          <a className='flex jutify-center items-center gap-2' href='/'>
              <Image
                src={ NavLogo }
                alt='/'
                width='39'
                height='35'
                className='cursor-pointer  opacity-100  item-center pr-2 '
              />
              <h2 className="text-xl" >Trip Guide</h2>
          </a>
      )}
  
    }
  
  
      const handleNav = () => {
        setNav(!nav);
      };
  
      const navMenu = [
        { 
          name: 'Chris',
          route: '/user',
          img:'https://usercontent2.hubstatic.com/6755141_f260.jpg',
          notiIcon:'',
          countryImg:'https://miro.medium.com/max/1400/0*o0-6o1W1DKmI5LbX.png',
          currency:"USD"
        },
      ]
        
  
      
    return (
      <div
        className='fixed w-screen h-[78px] dark:bg-black z-[100] pt-3 ease-in-out duration-300 '
      >
        
        <div className='flex justify-between items-center h-full px-2 2xl:px-16  '>
        {navImageChanger()}
          
          
          <div className="mr-2 flex">
            {navMenu.map((menu)=>(
             <ul style={{ color: `${linkColor}` }} className='hidden md:flex ' key={menu.name} >
                <div className='ml-10 text-sm uppercase flex flex-row  text-black dark:text-gray-300 items-center gap-4 ' >
                    <h3 >{menu.currency}</h3>
                    <img src={menu.countryImg} width="20" height="20" className=" w-[20px] h-[20px] rounded-full" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[27px] h-[27px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <div className="divider divider-horizontal"></div>
                    <img src={menu.img} layout="intrinsic" className="w-[32px] h-[32px] rounded-full"/>
                  <div href={menu.route} className="text-xl">{menu.name}</div>
                </div>
            </ul>
            ))
            
            }
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className='md:hidden'
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-100'  : ''
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? ' fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-rose-100 dark:bg-gray-900 p-10 ease-in duration-500'
                : 'fixed left-[-1400%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link href='/'>
                  <a>
                    <Image
                      src={NavLogo}
                      width='43'
                      height='35'
                      alt='/'
                      className='rounded-lg'
                    />
                  </a>
                </Link>
                <div
                  onClick={handleNav}
                  className='rounded-full outline p-3 cursor-pointer'
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-100 my-4'>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                {navMenu.map((menu)=>(
                  <Link href={menu.route} key={menu.name}>
                  <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-125' >
                    {menu.name}
                  </li>
                </Link>
                ))
  
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  