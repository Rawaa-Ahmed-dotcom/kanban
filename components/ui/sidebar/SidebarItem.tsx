'use client';
import type { SidebarItem } from '@/lib/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarItem = ({ title, icon, href }: SidebarItem) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={`transition-all duration-300 hover:bg-[#7197cd2e] px-3 py-2 rounded-tr-xl rounded-br-xl ${isActive ? "border-l-4 border-l-(--primary-500) bg-[#7197cd2e] " : ""}`}>
      <Link
        className={`flex items-center gap-4 font-medium text-[16px] capitalize    ${
          isActive
            ? 'text-(--primary-500)  '
            : 'text-(--gray-600) hover:text-(--gray-800)'
        }`}
        href={href}
      >
        {icon} {title}
      </Link>
    </li>
  );
};

export default SidebarItem;
