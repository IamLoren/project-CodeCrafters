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
  CategoriesItemSum,
} from './StatisticsStyled';

export const StatisticsTable = ({ data, expenseSummary, incomeSummary }) => {
  return (
    <WrapCategories>
      <StatisticHead>
        <Text>Category</Text>
        <Text>Sum</Text>
      </StatisticHead>
      <CategoriesList>
        {data.length
          ? data.map((category, i) => (
              <CategoriesItem key={i}>
                <NameColor>
                  <IndicateColor color={category.color}></IndicateColor>
                  <CategoryName>{category.name}</CategoryName>
                </NameColor>
                <CategoryName>{Math.abs(category.total)}</CategoryName>
              </CategoriesItem>
            ))
          : [] && <NoTrans>No transaction for this month</NoTrans>}
        <CategoriesItemSum>
          <CategoryName>Expenses:</CategoryName>
          <SpanExp>{Math.abs(expenseSummary)}</SpanExp>
        </CategoriesItemSum>
        <CategoriesItemSum>
          <CategoryName>Income:</CategoryName>
          <SpanIncome>{incomeSummary}</SpanIncome>
        </CategoriesItemSum>
      </CategoriesList>
    </WrapCategories>
  );
};

export default StatisticsTable;
