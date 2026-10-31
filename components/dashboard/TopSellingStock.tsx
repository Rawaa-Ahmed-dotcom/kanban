
import Table from '../ui/Table';
import { TopSellingStockCols, TopSellingStockData } from '@/lib/utils';
import DashboardCard from '../ui/DashboardCard';

const TopSellingStock = () => {
  return (
    <DashboardCard title='Top Selling Stock' link={{href : "/inventory?filter=top_selling" }}>
      <Table columns={TopSellingStockCols} data={TopSellingStockData} customClass='min-w-150'/>
    </DashboardCard>
  );
};

export default TopSellingStock;
