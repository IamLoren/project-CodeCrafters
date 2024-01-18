import React from 'react';
import {
  StatisticsInfoWrap,
  StatisticsTitle,
  StatisticsChart,
  Wrap,
} from './StatisticsStyled';
import ChartStatistic from '../ChartStatistic/ChartStatistic';
import StatisticsTable from './StatisticsTable';
import StatisticsDashboard from './StatisticsDashboard';
import { transactionStatistic } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const coloredCategoriesMap = new Map([
  ['Car', 'rgb(255, 104, 109)'],
  ['Products', 'rgb(255, 157, 137)'],
  ['Main expenses', 'rgb(254, 208, 87)'],
  ['Leisure', 'rgb(91, 255, 167)'],
  ['Other expenses', 'rgb(0, 173, 95)'],
  ['Education', 'rgb(115, 222, 255)'],
  ['Self care', 'rgb(170, 154, 255)'],
  ['Child care', 'rgb(242, 250, 92)'],
  ['Household products', 'rgb(114, 61, 239)'],
  ['Entertainment', 'rgb(201, 79, 130)'],
]);
const Statistics = () => {
  const statistics = useSelector(transactionStatistic);

  const statisticExp = statistics.categoriesSummary
    ? statistics.categoriesSummary.filter(item => item.type === 'EXPENSE')
    : [];

  const expenseSummary = statistics.expenseSummary;
  const incomeSummary = statistics.incomeSummary;

  const data = statisticExp.map(item => ({
    ...item,
    color: coloredCategoriesMap.get(item.name),
  }));

  return (
    <Wrap>
      <StatisticsChart>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <ChartStatistic
          data={data}
          expenseSummary={expenseSummary}
          incomeSummary={incomeSummary}
        />
      </StatisticsChart>
      <StatisticsInfoWrap>
        <StatisticsDashboard />
        <StatisticsTable
          data={data}
          expenseSummary={expenseSummary}
          incomeSummary={incomeSummary}
        />
      </StatisticsInfoWrap>
    </Wrap>
  );
};
export default Statistics;
