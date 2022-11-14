import { NextPage } from 'next';

import LayoutAdmin from '@/components/layouts/layout.admin';

interface Props {}

const UserDashboard: NextPage<Props> = () => {
  return (
    <LayoutAdmin />
  );
};

export default UserDashboard;