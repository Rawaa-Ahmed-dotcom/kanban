'use client';

import { OrderSummaryProps } from '@/lib/types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const OrderSummaryChart = ({ data }: { data: OrderSummaryProps }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid vertical={false} stroke="#E5E7EB" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748B', fontSize: 14 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748B', fontSize: 14 }}
            tickMargin={12}
            domain={[0, 4000]}
            ticks={[0, 1000, 2000, 3000 , 4000]}
            tickFormatter={(v) => v.toLocaleString('en-US')}
          />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={14}
            wrapperStyle={{ paddingTop: 16, paddingLeft: 40, gap: 40 }}
          />

          <Line
            type="monotone"
            dataKey="ordered"
            name="Ordered"
            stroke="#DBA362"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="delivered"
            name="Delivered"
            stroke="var(--primary-100)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderSummaryChart;