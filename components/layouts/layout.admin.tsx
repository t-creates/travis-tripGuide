import { FC } from 'react';

import RouteGuard from '@/helpers/routeGuard';

interface Props {}

const LayoutAdmin: FC<Props> = (props): JSX.Element => {
  return (
    <RouteGuard>
      User Dashboard
    </RouteGuard>
  );
};

export default LayoutAdmin;