'use client';

import {
  BarChart,
  Legend,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { SalesChartProps } from '@/lib/types';

export default function SalesChart({ data }: { data: SalesChartProps }) {
  return (
    <div style={{ width: '100%', height: "100%"}}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          barGap={4}
          barSize={12}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="purchaseGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7DD3FC" />
              <stop offset="100%" stopColor="#7C6FF0" />
            </linearGradient>
            <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ADE5A" />
              <stop offset="100%" stopColor="#3F9F6B" />
            </linearGradient>
          </defs>
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
            domain={[10000, 60000]}
            ticks={[10000, 20000, 30000, 40000, 50000, 60000]}
            tickFormatter={(v) => v.toLocaleString('en-US')}
          />
          <Tooltip cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
          <Legend
            verticalAlign="bottom"
            align="left"
            iconType="circle"
            iconSize={18}
            wrapperStyle={{ paddingTop: 16, paddingLeft: 40 }}
          />
          <Bar
            dataKey="purchase"
            name="Purchase"
            fill="url(#purchaseGrad)"
            radius={[8, 8, 8, 8]}
          />
          <Bar
            dataKey="sales"
            name="Sales"
            fill="url(#salesGrad)"
            radius={[8, 8, 8, 8]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
