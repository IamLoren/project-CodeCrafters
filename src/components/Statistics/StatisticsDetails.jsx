import React from 'react';
import { Wrap } from './StatisticsStyled';

const StatisticsDetails = () => {
  const data = [
    { category: 'Main expenses', sum: 8700.0, color: '#FED057' },
    { category: 'Products', sum: 3800.74, color: '#FFD8D0' },
    { category: 'Car', sum: 1500.0, color: '#FD9498' },
    { category: 'Self care', sum: 800.0, color: '#C5BAFF' },
    { category: 'Child care', sum: 2208.5, color: '#6E78E8' },
    { category: 'Household products', sum: 300.0, color: '#4A56E2' },
    { category: 'Education', sum: 3400.0, color: '#81E1FF' },
    { category: 'Leisure', sum: 1230.0, color: '#24CCA7' },
    { category: 'Other expenses', sum: 610.0, color: '#00AD84' },
  ];
  return (
    <Wrap>
      <div>
        <p>Category</p>
        <p>Sum</p>
      </div>
      <ul>
        {data.map(item => (
          <li>
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
