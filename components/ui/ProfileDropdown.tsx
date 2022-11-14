import { FC, ReactNode, Fragment  } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export type ProfiledropDown = {
  label: string;
  onClick(): void;
  icon?: ReactNode;
  url?: any;
}[];

interface Props
{
  options: ProfiledropDown;
  userName: ReactNode;
}

const ProfileDropdown: FC<Props> = ({ userName, options }): JSX.Element =>
{
  return (
    <>
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-1">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
            <img
              className="h-8 w-8 rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
              src="https://avatars.githubusercontent.com/u/26049298?v=4"
              alt=""
            />
            <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
              <span className="sr-only">Open user menu for </span>{userName}
            </span>
            <ChevronDownIcon
              className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-6 w-48 origin-top-right min-w-[15rem] bg-white shadow-md rounded-2xl p-2 dark:bg-gray-800 dark:border dark:border-gray-700">
            <Menu.Item>
              <div className="mb-2 py-3 px-5 -m-2 last:pb-0 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-300">demar@swack.tech</p>
              </div>
            </Menu.Item>
            {options.map(({label, icon, onClick}, index) => {
              return (
                <Menu.Item key={label + index}>
                  {({ active }) => (
                    
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
                      onClick={onClick}
                    >
                      {icon}
                      {label}
                    </a>
                    
                  )}
                </Menu.Item>
              )
            })}
            
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default ProfileDropdown;