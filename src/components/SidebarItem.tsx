import { IoCalendarOutline, IoCheckboxOutline, IoListOutline } from "react-icons/io5";
import { SideItem } from './SideItem';

const pages = [
  {
    href: '/dashboard',
    name: 'Dashboard',
    icon: <IoCalendarOutline size={30} />,
  },
  {
    href: '/dashboard/rest-todos',
    name: 'Rest TODOS',
    icon: <IoCheckboxOutline size={30} />,
  },
  {
    href: '#',
    name: 'Server Actions',
    icon: <IoListOutline size={30} />,
  },
];

export const SidebarItem = () => {
  return (
    <ul className='space-y-2 tracking-wide mt-8'>
      {pages.map((page) => {
        return <SideItem key={page.href} {...page} />;
      })}
    </ul>
  );
};
