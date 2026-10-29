import Link from 'next/link';
import Heading from './kpis/Heading';
import { DashboardCardProps } from '@/lib/types';


const DashboardCard = ({ title, children, link, className = '' }: DashboardCardProps) => {
  return (
    <div
      className={`bg-(--bg-card) w-full rounded-lg py-5 px-4 flex flex-col gap-5 h-full ${className}`}
    >
      {link ? (
        <div className="flex items-center justify-between">
          <Heading title={title} />
          <Link
            href={link.href}
            className="capitalize text-[14px] font-normal text-(--primary-700) transition-all duration-200 hover:underline"
          >
            {link.label ?? 'see all'}
          </Link>
        </div>
      ) : (
        <Heading title={title} />
      )}
      {children}
    </div>
  );
};

export default DashboardCard;