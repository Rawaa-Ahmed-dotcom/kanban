import DashboardCard from '@/components/ui/DashboardCard';
import LowStockItem from './LowStockItem';

const LowQuantityStock = () => {
  return (
    <DashboardCard
      title="Low Quantity Stock"
      link={{ href: '/inventory?filter=lowStock' }}
    >
      <div className="flex flex-col gap-4">
        <LowStockItem />
      </div>
    </DashboardCard>
  );
};

export default LowQuantityStock;
