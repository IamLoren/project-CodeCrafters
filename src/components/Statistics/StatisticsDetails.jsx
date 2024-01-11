import React from 'react';
import {} from './StatisticsStyled';

const StatisticsDetails = () => {
  const data = [
    { category: 'Main expenses', sum: 9700.0, color: '#FFD700' },
    { category: 'Products', sum: 3800.74, color: '#FFC0CB' },
    { category: 'Car', sum: 1500.0, color: '#E75480' },
    { category: 'Self care', sum: 800.0, color: '#9999FF' },
    { category: 'Child care', sum: 2208.5, color: '#6A5ACD' },
    { category: 'Household products', sum: 300.0, color: '#6495ED' },
    { category: 'Education', sum: 3400.0, color: '#ADD8E6' },
    { category: 'Leisure', sum: 1230.0, color: '#90EE90' },
    { category: 'Other expenses', sum: 610.0, color: '#98FB98' },
  ];
  return (
    <table>
      <p>Category</p>
      <p>Sum</p>
    </table>
  );
};

export default StatisticsDetails;
