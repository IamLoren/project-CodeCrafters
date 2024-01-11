import React from 'react';
import {
  Dropdown,
  DropdownContent,
  StatisticsTitle,
  StatisticsWrap,
} from './StatisticsStyled';

const Statistics = () => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsWrap>
        <Dropdown id="month" name="month" defaultValue="January">
          <DropdownContent value="January">January</DropdownContent>
          <DropdownContent value="February">February</DropdownContent>
          <DropdownContent value="March">March</DropdownContent>
        </Dropdown>
        <Dropdown id="year" name="year" defaultValue="2023">
          <DropdownContent value="2021">2021</DropdownContent>
          <DropdownContent value="2022">2022</DropdownContent>
          <DropdownContent value="2023">2023</DropdownContent>
        </Dropdown>
      </StatisticsWrap>
    </>
  );
};

export default Statistics;
