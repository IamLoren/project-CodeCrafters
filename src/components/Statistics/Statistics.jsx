import React from 'react';
import {
  StatisticsInfoWrap,
  StatisticsTitle,
  StatisticsChart,
  Wrap,
} from './StatisticsStyled';
import ChartStatistic from '../ChartStatistic/ChartStatistic';
import StatisticsDetails from './StatisticsDetails';
import StatisticsDate from './StatisticsDate';

const Statistics = () => {
  return (
    <Wrap>
      <StatisticsChart>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <ChartStatistic />
      </StatisticsChart>
      <StatisticsInfoWrap>
        <StatisticsDate />
        <StatisticsDetails />
      </StatisticsInfoWrap>
    </Wrap>
  );
};
export default Statistics;
