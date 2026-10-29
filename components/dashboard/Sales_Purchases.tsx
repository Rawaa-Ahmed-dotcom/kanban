import { SalesChartProps } from "@/lib/types";
import SalesChart from "../ui/charts/SalesChart";
import DashboardCard from "../ui/DashboardCard";

const Sales_Purchases = ({data} : {data : SalesChartProps}) => {
  return (
   <DashboardCard title="Sales & Purchase">
    <SalesChart data={data} />
  </DashboardCard>
  )
}

export default Sales_Purchases
