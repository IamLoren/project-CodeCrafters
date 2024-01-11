import React from 'react';
import {
  Dropdown,
  DropdownContent,
  DropdownMonth,
  StatisticsTitle,
} from './StatisticsStyled';

import ChartStatistic from 'components/ChartStatistic/ChartStatistic';
import React from 'react';

const Statistics = () => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <ChartStatistic />
      <div>Statistics</div>
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
