'use client';

import { useSidebar } from '@/context/SidebarContext';


const SidebarDrawer = ({children} : {children : React.ReactNode}) => {
  const { isOpen , close} = useSidebar();
  return (
    <>
      
 <div
        onClick={close}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-(--bg-card) shadow-lg z-50
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {children}
      </aside>
    </>
  );
};

export default SidebarDrawer;
