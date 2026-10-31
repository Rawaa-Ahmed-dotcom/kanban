'use client';
import { useSidebar } from '@/context/SidebarContext';
import { RxHamburgerMenu } from 'react-icons/rx';

const BurgerIcon = () => {
  const { toggle } = useSidebar();
  return (
    <RxHamburgerMenu
      size={35}
      className="text-(--gray-600) cursor-pointer hover:text-(--gray-900) "
      onClick={toggle}
    />
  );
};

export default BurgerIcon;
