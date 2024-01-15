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
import { categories, transactionStatistic } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const Statistics = () => {
  const coloredCategoriesMap = new Map([
    ['Main expenses', 'var(--main-expenses)'],
    ['Products', 'var(--products)'],
    ['Car', 'var(--car)'],
    ['Self care', 'var(--self-care)'],
    ['Child care', 'var(--child-care)'],
    ['Household products', 'var(--household)'],
    ['Education', 'var(--education)'],
    ['Leisure', 'var(--leisure)'],
    ['Other expenses', 'var(--other-expenses)'],
  ]);
  // const transactionsList = useSelector(selectTransactionsList);
  // const expenseArr = transactionsList?.filter(item => item.type === 'EXPENSE');
  // const incomeArr = transactionsList?.filter(item => item.type === 'INCOME');

  const categoriesList = useSelector(categories);

  const statistics = useSelector(transactionStatistic);

  const statisticExp = statistics.categoriesSummary
    ? statistics.categoriesSummary.filter(item => item.type === 'EXPENSE')
    : [];

  // console.log('transactionsList', transactionsList);
  console.log('categoriesList', categoriesList);
  console.log('statistics', statistics);
  console.log('statisticExp', statisticExp);
  const expenseSummary = statistics.expenseSummary;
  const incomeSummary = statistics.incomeSummary;

  const data = statisticExp.map(item => ({
    ...item,
    color: coloredCategoriesMap.get(item.name),
  }));

  console.log('Maindata:', data);
  // const totalExpense = expenseArr.reduce((total, el) => {
  //   return total + Number(el.amount);
  // }, 0);
  // const expense = totalExpense.toFixed(2);

  // const incomeTotal = incomeArr.reduce((total, el) => {
  //   return (total += Number(el.amount));
  // }, 0);

  return (
    <Wrap>
      <StatisticsChart>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <ChartStatistic data={data} />
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
