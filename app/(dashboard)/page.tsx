import CustomOverview from '@/components/dashboard/CustomOverview';
import CustomSummary from '@/components/dashboard/CustomSummary';
import {
  salesKpis,
  purchaseKpis,
  inventoryKpis,
  productKpis,
} from '@/lib/utils';
import Sales_Purchases from '@/components/dashboard/Sales_Purchases';
import { monthlyData } from '@/lib/utils';
import OrderSummary from '@/components/dashboard/OrderSummary';
import TopSellingStock from '@/components/dashboard/TopSellingStock';
import LowQuantityStock from '@/components/dashboard/lowStock.tsx/LowQuantityStock';

const page = () => {
  return (
    <div className="py-5.5 px-8 bg-(--bg-main)">
      <div className="grid grid-cols-3 grid-rows-6 gap-x-5.5 gap-y-7.25">
        <div className="col-span-2 row-span-1">
          <CustomOverview title="Sales Overview" kpisData={salesKpis} />
        </div>
        <div className="col-span-1 row-span-1">
          <CustomSummary title="Inventory Summary" kpisData={inventoryKpis} />
        </div>
        <div className="col-span-2 row-span-1">
          <CustomOverview title="Purchase Overview" kpisData={purchaseKpis} />
        </div>
        <div className="col-span-1 row-span-1">
          <CustomSummary title="Product Summary" kpisData={productKpis} />
        </div>
        <div className="col-span-2 row-span-2">
          <Sales_Purchases data={monthlyData} />
        </div>
        <div className="col-span-1 row-span-2 ">
          <OrderSummary />
        </div>
        <div className="col-span-2 row-span-2">
          <TopSellingStock />
        </div>
        <div className="col-span-1 row-span-2">
          <LowQuantityStock />
        </div>
      </div>
    </div>
  );
};

export default page;
