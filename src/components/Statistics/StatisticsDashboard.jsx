import React from 'react';
import { DropsWrap, Dropdown, DropdownContent } from './StatisticsStyled';

const StatisticsDashboard = () => {
  return (
    <DropsWrap>
      <Dropdown id="month" name="month" defaultValue="March">
        <DropdownContent value="January">January</DropdownContent>
        <DropdownContent value="February">February</DropdownContent>
        <DropdownContent value="March">March</DropdownContent>
      </Dropdown>
      <Dropdown id="year" name="year" defaultValue="2023">
        <DropdownContent value="2023">2023</DropdownContent>
        <DropdownContent value="2022">2022</DropdownContent>
        <DropdownContent value="2021">2021</DropdownContent>
      </Dropdown>
    </DropsWrap>
  );
};
export default StatisticsDashboard;
