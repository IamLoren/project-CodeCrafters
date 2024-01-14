import React from 'react';
import {
  StatisticsInfoWrap,
  StatisticsTitle,
  StatisticsChart,
  Wrap,
} from './Statistics.styled';
import ChartStatistic from '../ChartStatistic/ChartStatistic';
import StatisticsTable from './StatisticsTable';
import StatisticsDashboard from './StatisticsDashboard';

const Statistics = () => {
  return (
    <Wrap>
      <StatisticsChart>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <ChartStatistic />
      </StatisticsChart>
      <StatisticsInfoWrap>
        <StatisticsDashboard />
        <StatisticsTable />
      </StatisticsInfoWrap>
    </Wrap>
  );
};
export default Statistics;
