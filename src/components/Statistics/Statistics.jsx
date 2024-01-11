import React from 'react';
import {
  StatisticsInfoWrap,
  StatisticsTitle,
  StatisticsWrap,
} from './StatisticsStyled';
import ChartStatistic from '../ChartStatistic/ChartStatistic';
import StatisticsDetails from './StatisticsDetails';
import StatisticsDate from './StatisticsDate';

const Statistics = () => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsWrap>
        <ChartStatistic />
        <StatisticsInfoWrap>
          <StatisticsDate />
          <StatisticsDetails />
        </StatisticsInfoWrap>
      </StatisticsWrap>
    </>
  );
};
export default Statistics;
