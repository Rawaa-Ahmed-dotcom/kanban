import DashboardCard from '../ui/DashboardCard';
import OrderSummaryChart from '../ui/charts/OrderSummaryChart';
import { OrderSummaryData } from '@/lib/utils';

const OrderSummary = () => {
  return (
    <DashboardCard title="Order Summary">
      <OrderSummaryChart data={OrderSummaryData} />
    </DashboardCard>
  );
};

export default OrderSummary;
