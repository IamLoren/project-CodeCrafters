import React from 'react';
import {
  Text,
  StatisticHead,
  WrapCategories,
  CategoriesList,
  CategoriesItem,
  CategoryName,
  SpanIncome,
  IndicateColor,
  NameColor,
  NoTrans,
  SpanExp,
} from './StatisticsStyled';

export const StatisticsTable = ({ data, expenseSummary, incomeSummary }) => {
  // const income = incomeTotal.toFixed(2);

  // Math.abs("-1"); // 1
  console.log('StTable-data:', data);
  // const statistics = useSelector(transactionStatistic);

  return (
    <WrapCategories>
      <StatisticHead>
        <Text>Category</Text>
        <Text>Sum</Text>
      </StatisticHead>
      <CategoriesList>
        {data.length ? (
          data.map((category, i) => (
            <CategoriesItem key={i}>
              <NameColor>
                <IndicateColor color={category.color}></IndicateColor>
                <CategoryName>{category.name}</CategoryName>
              </NameColor>
              <CategoryName>{Math.abs(category.total)}</CategoryName>
            </CategoriesItem>
          ))
        ) : (
          <NoTrans>No transaction for this month</NoTrans>
        )}
        <CategoriesItem>
          <CategoryName>Expenses:</CategoryName>
          <SpanExp>{Math.abs(expenseSummary)}</SpanExp>
        </CategoriesItem>
        <CategoriesItem>
          <CategoryName>Income:</CategoryName>
          <SpanIncome>{incomeSummary}</SpanIncome>
        </CategoriesItem>
      </CategoriesList>
    </WrapCategories>
  );
};

export default StatisticsTable;

// let data = [
//   {
//     i: 1,
//     category: 'Main expenses',
//     sum: 8700.0,
//     color: '#FED057',
//     type: 'EXPENSE',
//   },
//   {
//     i: 2,
//     category: 'Products',
//     sum: 3800.74,
//     color: '#FFD8D0',
//     type: 'EXPENSE',
//   },
//   { i: 3, category: 'Car', sum: 1500.0, color: '#FD9498', type: 'EXPENSE' },
//   {
//     i: 4,
//     category: 'Self care',
//     sum: 800.0,
//     color: '#C5BAFF',
//     type: 'EXPENSE',
//   },
//   {
//     i: 5,
//     category: 'Child care',
//     sum: 2208.5,
//     color: '#6E78E8',
//     type: 'EXPENSE',
//   },
//   {
//     i: 6,
//     category: 'Household products',
//     sum: 300.0,
//     color: '#4A56E2',
//     type: 'EXPENSE',
//   },
//   {
//     i: 7,
//     category: 'Education',
//     sum: 3400.0,
//     color: '#81E1FF',
//     type: 'EXPENSE',
//   },
//   {
//     i: 8,
//     category: 'Leisure',
//     sum: 1230.0,
//     color: '#24CCA7',
//     type: 'INCOME',
//   },
//   {
//     i: 9,
//     category: 'Other expenses',
//     sum: 610.0,
//     color: '#00AD84',
//     type: 'INCOME',
//   },
// ];
