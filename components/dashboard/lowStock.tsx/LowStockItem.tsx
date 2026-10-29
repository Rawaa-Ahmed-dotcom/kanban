import Image from 'next/image';
import Badge from '../../ui/Badge';

const LowStockItem = () => {
  return (
    <div className="flex gap-6 items-center">
          <Image
            src="/low_stock_1.png"
            width={60}
            height={70}
            alt="product_title"
          />
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-[16px] text-(--gray-800)">
              product_title
            </h3>
            <p className="text-(--gray-500) font-normal text-[14px]">
              Remaining Quantity : 10 Packet
            </p>
          </div>
          <Badge variant="low_stock" customClass="py-[2px] px-[6px] rounded-lg">
            Low
          </Badge>
        </div>
  )
}

export default LowStockItem
