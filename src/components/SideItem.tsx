'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string
  icon: JSX.Element
  name: string
}

export const SideItem = ({href, icon, name}: Props) => {
  const path = usePathname();

  return (
    <li key={href}>
      <Link
        href={href}
        className={`px-4 py-3 flex items-center space-x-4 ${
          path === href
            ? 'rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400'
            : 'rounded-xl text-gray-600 group hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400'
        }`}
      >
        {icon}
        <span className='-mr-1 font-medium'>{name}</span>
      </Link>
    </li>
  );
};
