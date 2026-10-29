import { PrimaryBtnProps } from '@/lib/types';
import { buttonVariants } from '@/lib/utils';


const Button = ({ variant = 'primary' , children , className , type = 'button'}: PrimaryBtnProps) => {
  return (
    <button
    type = {type}
      className={`${className} ${buttonVariants[variant]} w-full rounded-sm flex items-center justify-center text-[16px] font-medium py-2.5 cursor-pointer transition-all duration-300  `}
    >
      {children}
    </button>
  );
};

export default Button;
