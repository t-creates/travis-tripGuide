import { FC } from 'react';

import { NotificationsBellIcon } from '@/svg/icons';

interface Props {}

const NotificationsDropdown: FC<Props> = (props): JSX.Element => {
  return (
    <button
      type="button"
      className="flex-shrink-0 rounded-full p-2 text-cyan-200 hover:bg-gray-400 hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
    >
      <span className="sr-only">View notifications</span>
        <NotificationsBellIcon />
    </button>
  );
};

export default NotificationsDropdown;