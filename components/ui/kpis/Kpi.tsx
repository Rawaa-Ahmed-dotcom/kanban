import { kpiType } from '@/lib/types';
import Image from 'next/image';

const Kpi = ( {title , icon , value , bg , customClass} : kpiType & {customClass? : string}) => {
  return (
    <div className="flex flex-col  gap-4 border-r border-r-(--gray-100) col-span-1 last:border-0 pr-5">
      <div className="flex items-center justify-center">
        <Image
          src={icon}
          width={25}
          height={25}
          alt={title}
          className={`${bg} p-0.5 object-cover rounded-sm`}
        />
      </div>
      <div className={`flex items-center justify-between ${customClass}`}>
        <span className="text-(--gray-600) font-semibold text-[16px]">
          $ {value}
        </span>
        <span className="font-medium text-[14px] text-(--gray-500)">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Kpi;
