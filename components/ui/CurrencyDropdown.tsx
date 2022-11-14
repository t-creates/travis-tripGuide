import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const CurrencyDropdown: FC<Props> = (props): JSX.Element => {
  return (
    <Link href="/" passHref>
      <a className="font-medium p-2 text-gray-500 dark:text-gray-400">CAD</a>
    </Link>
  );
};

export default CurrencyDropdown;