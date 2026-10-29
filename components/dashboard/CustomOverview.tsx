import { CustomOverviewProps, kpiType } from '@/lib/types';
import Kpi from '../ui/kpis/Kpi';
import DashboardCard from '../ui/DashboardCard';

const CustomOverview = ({
  title,
  kpisData,
  gridClass = 'grid-cols-4',
  kpiClass,
}: CustomOverviewProps) => (
  <DashboardCard title={title}>
    <div className={`grid h-full gap-5 ${gridClass}`}>
      {kpisData.map((kpi: kpiType) => (
        <Kpi
          key={kpi.title}
          title={kpi.title}
          icon={kpi.icon}
          value={kpi.value}
          bg={kpi.bg}
          customClass={kpiClass}
        />
      ))}
    </div>
  </DashboardCard>
);

export default CustomOverview;
