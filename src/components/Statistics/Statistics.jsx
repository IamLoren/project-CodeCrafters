import React from 'react';
import {
  Dropdown,
  DropdownContent,
  DropdownMonth,
  StatisticsTitle,
} from './StatisticsStyled';

const Statistics = () => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>

      <DropdownMonth>
        January
        <DropdownContent>
          <>February</>
        </DropdownContent>
      </DropdownMonth>
    </>
  );
};

export default Statistics;
