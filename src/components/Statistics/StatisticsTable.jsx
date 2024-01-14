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
} from './StatisticsStyled';
import { useSelector } from 'react-redux';
import { categories, selectTransactionsList } from '../../redux/selectors.js';

const StatisticsTable = () => {
  // const categories = [
  //   'Main expenses',
  //   'Products',
  //   'Car',
  //   'Self care',
  //   'Child care',
  //   'Household products',
  //   'Education',
  //   'Leisure',
  //   'Other expenses',
  //   'Entertainment',
  // ];

  const data = [
    {
      i: 1,
      category: 'Main expenses',
      sum: 8700.0,
      color: '#FED057',
      type: 'EXPENSE',
    },
    {
      i: 2,
      category: 'Products',
      sum: 3800.74,
      color: '#FFD8D0',
      type: 'EXPENSE',
    },
    { i: 3, category: 'Car', sum: 1500.0, color: '#FD9498', type: 'EXPENSE' },
    {
      i: 4,
      category: 'Self care',
      sum: 800.0,
      color: '#C5BAFF',
      type: 'EXPENSE',
    },
    {
      i: 5,
      category: 'Child care',
      sum: 2208.5,
      color: '#6E78E8',
      type: 'EXPENSE',
    },
    {
      i: 6,
      category: 'Household products',
      sum: 300.0,
      color: '#4A56E2',
      type: 'EXPENSE',
    },
    {
      i: 7,
      category: 'Education',
      sum: 3400.0,
      color: '#81E1FF',
      type: 'EXPENSE',
    },
    {
      i: 8,
      category: 'Leisure',
      sum: 1230.0,
      color: '#24CCA7',
      type: 'INCOME',
    },
    {
      i: 9,
      category: 'Other expenses',
      sum: 610.0,
      color: '#00AD84',
      type: 'INCOME',
    },
  ];

  const transactionsList = useSelector(selectTransactionsList);
  const expenseArr = transactionsList?.filter(item => item.type === 'EXPENSE');
  const incomeArr = transactionsList?.filter(item => item.type === 'INCOME');
  // const expenseArr = data?.filter(item => item.type === 'EXPENSE');
  // const incomeArr = data?.filter(item => item.type === 'INCOME');
  const categoriesList = useSelector(categories);

  console.log(
    'transactionsList',
    transactionsList,
    'expenseArr',
    expenseArr,
    'incomeArr',
    incomeArr,
    'categoriesList',
    categoriesList
  );

  const totalExpense = expenseArr.reduce((total, el) => {
    return total + Number(el.amount);
  }, 0);
  const expense = totalExpense.toFixed(2);

  const incomeTotal = incomeArr.reduce((total, el) => {
    return (total += Number(el.amount));
  }, 0);
  const income = incomeTotal.toFixed(2);

  // Math.abs("-1"); // 1

  return (
    <WrapCategories>
      <StatisticHead>
        <Text>Category</Text>
        <Text>Sum</Text>
      </StatisticHead>
      <CategoriesList>
        {data.map(item => (
          <CategoriesItem key={item.i}>
            <NameColor>
              <IndicateColor color={item.color}></IndicateColor>
              <CategoryName>{item.category}</CategoryName>
            </NameColor>

            <CategoryName>{item.sum.toFixed(2)}</CategoryName>
          </CategoriesItem>
        ))}
        <CategoriesItem>
          <CategoryName>Expenses:</CategoryName>
          <span>{expense}</span>
        </CategoriesItem>
        <CategoriesItem>
          <CategoryName>Income:</CategoryName>
          <SpanIncome>{income}</SpanIncome>
        </CategoriesItem>
      </CategoriesList>
    </WrapCategories>
  );
};
const coloredCategoriesMap = new Map([
  ['Main expenses', 'rgba(254, 208, 87, 1)'],
  ['Products', 'rgba(255, 216, 208, 1)'],
  ['Car', 'rgba(253, 148, 152, 1)'],
  ['Self care', 'rgba(197, 186, 255, 1)'],
  ['Child care', 'rgba(110, 120, 232, 1)'],
  ['Household products', 'rgba(74, 86, 226, 1)'],
  ['Education', 'rgba(129, 225, 255, 1)'],
  ['Leisure', 'rgba(36, 204, 167, 1)'],
  ['Other expenses', 'rgba(0, 173, 132, 1)'],
]);
export default StatisticsTable;
