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
  ['Main expenses', 'rgba(0, 173, 132, 1)'],
  ['Products', 'rgba(255, 216, 208, 1)'],
  ['Car', 'rgba(253, 148, 152, 1)'],
  ['Self care', 'rgba(197, 186, 255, 1)'],
  ['Child care', 'rgba(74, 86, 226, 1)'],
  ['Household products', 'rgba(74, 86, 226, 1)'],
  ['Education', 'rgba(129, 225, 255, 1)'],
  ['Leisure', 'rgba(36, 204, 167, 1)'],
  ['Other expenses', 'rgba(0, 173, 132, 1)'],
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
