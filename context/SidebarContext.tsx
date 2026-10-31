'use client';

import { SidebarContextProps } from '@/lib/types';
import { createContext, useContext, useState } from 'react';

const sidebarContext = createContext<SidebarContextProps | null>(null);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <sidebarContext.Provider
      value={{
        isOpen,
        toggle: () => setIsOpen((p) => !p),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </sidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const ctx = useContext(sidebarContext);
  if (!ctx) throw new Error('useSidebar must be used inside SidebarProvider');
  return ctx;
};
