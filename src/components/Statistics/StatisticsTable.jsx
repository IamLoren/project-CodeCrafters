import React from 'react';
import {
  Text,
  StatisticHead,
  WrapCategories,
  CategoriesList,
  CategoriesItem,
  CategoryName,
  SpanIncome,
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
    { i: 1, category: 'Main expenses', sum: 8700.0, color: '#FED057' },
    { i: 2, category: 'Products', sum: 3800.74, color: '#FFD8D0' },
    { i: 3, category: 'Car', sum: 1500.0, color: '#FD9498' },
    { i: 4, category: 'Self care', sum: 800.0, color: '#C5BAFF' },
    { i: 5, category: 'Child care', sum: 2208.5, color: '#6E78E8' },
    { i: 6, category: 'Household products', sum: 300.0, color: '#4A56E2' },
    { i: 7, category: 'Education', sum: 3400.0, color: '#81E1FF' },
    { i: 8, category: 'Leisure', sum: 1230.0, color: '#24CCA7' },
    { i: 9, category: 'Other expenses', sum: 610.0, color: '#00AD84' },
  ];

  const transactionsList = useSelector(selectTransactionsList);
  const expenseArr = transactionsList?.filter(item => item.type === 'EXPENSE');

  const categoriesList = useSelector(categories);

  console.log(
    'transactionsList, expenseArr, categoriesList',
    transactionsList,
    expenseArr,
    categoriesList
  );

  return (
    <WrapCategories>
      <StatisticHead>
        <Text>Category</Text>
        <Text>Sum</Text>
      </StatisticHead>
      <CategoriesList>
        {data.map(item => (
          <CategoriesItem key={item.i}>
            <CategoryName>{item.category}</CategoryName>
            <div color={item.color}></div>
            <CategoryName>{item.sum.toFixed(2)}</CategoryName>
          </CategoriesItem>
        ))}
        <CategoriesItem>
          <CategoryName>Expenses:</CategoryName>
          <span>22549.24</span>
        </CategoriesItem>
        <CategoriesItem>
          <CategoryName>Income:</CategoryName>
          <SpanIncome>27350.00</SpanIncome>
        </CategoriesItem>
      </CategoriesList>
    </WrapCategories>
  );
};

export default StatisticsTable;
