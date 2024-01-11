import React from 'react';
import { Wrap } from './StatisticsStyled';

const StatisticsDetails = () => {
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
  return (
    <Wrap>
      <div>
        <p>Category</p>
        <p>Sum</p>
      </div>
      <ul>
        {data.map(item => (
          <li key={item.i}>
            <p>{item.category}</p>
            <p color={item.color}></p>
            <p>{item.sum.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <p>Expenses:</p> <span>22549.24</span>
      <p>Income:</p> <span>27350.00</span>
    </Wrap>
  );
};

export default StatisticsDetails;
