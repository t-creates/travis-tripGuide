import { FC, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover } from '@headlessui/react'

import { showToast } from '@/helpers/functions';
import TripGuideLogo from '@/svg/logos/tripGuide';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { signOutUser } from "@/store/reducers/user.reducer";
import { clearNotification } from '@/store/reducers/notifications.reducer';
import { 
  NotificationsDropdown, 
  ProfileDropdown,
  LanguageDropdown,
  CurrencyDropdown,
} from '@/components/ui';
import
{
  MyWalletIcon,
  MyRewardsIcon,
  SignOutIcon,
  BookingIcon,
  MyProfileIcon,
  MyAccountIcon,
} from "@/svg/icons";

interface Props { }

const Header1: FC<Props> = (props): JSX.Element =>
{
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  const notifications = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let { global } = notifications;
    if(notifications && global.error) {
      const msg = global.msg ? global.msg : 'Error';
      showToast('ERROR', msg);
      dispatch(clearNotification());
    }
    if(notifications && global.success) {
      const msg = global.msg ? global.msg : 'Success';
      showToast('SUCCESS', msg);
      dispatch(clearNotification());
    }
  }, [dispatch, notifications]);

  const options = [
    {
      label: "My Profile",
      onClick: () => {router.push('/users/dashboard')},
      icon: <MyProfileIcon />
    },
    {
      label: "Manage account",
      onClick: () => { console.log("Manage account") },
      icon: <MyAccountIcon />
    },
    {
      label: "Booking",
      onClick: () => { console.log("Booking") },
      icon: <BookingIcon />
    },
    {
      label: "My Wallet",
      onClick: () => { console.log("My Wallet") },
      icon: <MyWalletIcon />
    },
    {
      label: "My Rewards",
      onClick: () => { console.log("My Rewards") },
      icon: <MyRewardsIcon />
    },
    {
      label: "Sign Out",
      onClick: () => {
        dispatch(signOutUser());
        router.push("/")
      },
      icon: <SignOutIcon />
    },
  ];

  return (
    <div className="min-h-full">
      <Popover as="header" className=" bg-white border-b border-gray-200">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                {/* Logo */}
                <Link href='/' className="absolute left-0 flex-shrink-0 py-5 lg:static">
                  <a>
                    <span className="sr-only">Trip Guide</span>
                    <TripGuideLogo className="h-6 w-auto sm:h-10" />
                  </a>
                </Link>

                {/* Right section on desktop */}
                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                    <CurrencyDropdown />
                    <LanguageDropdown />
                    <NotificationsDropdown />
                  <span className="mx-4 h-7 w-px bg-gray-200 lg:mx-2" aria-hidden="true" />
                  {user && !user.auth ?
                    <>
                      <Link href="/users/sign_in" passHref>
                        <a className='flex px-2'>
                        <MyAccountIcon className='mr-2' />
                        Log in
                        </a>
                      </Link>
                    </>
                    :
                    <ProfileDropdown options={options} userName="Demar" />
                  }
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>
    </div>
  );
};

export default Header1;