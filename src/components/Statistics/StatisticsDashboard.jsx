import React, { useState } from 'react';
import { DropsWrap, Dropdown, DropdownContent } from './StatisticsStyled';
import { useDispatch } from 'react-redux';

const StatisticsDashboard = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Auguest',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = [2024, 2023, 2022, 2021, 2020];

  const dispatch = useDispatch();

  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  // const newDate = useSelector(dateSelector);
  // console.log(dispatch(newDate));

  // const hendleSubmit = e => {
  //   e.preventDefault();
  //   setDate(date);
  // };

  const handleOnMonth = e => {
    e.preventDefault();
    setMonth(e.target.value);
    dispatch(setMonth);
  };
  const handleOnYear = e => {
    e.preventDefault();
    setYear(e.target.value);
    dispatch(setYear);
  };

  return (
    <DropsWrap>
      <Dropdown
        id="month"
        name="month"
        defaultValue="January"
        onChange={handleOnMonth}
        value={month}
      >
        {' '}
        {months.map(month => (
          <DropdownContent key={month.indexOf(month)} value={month}>
            {month}
          </DropdownContent>
        ))}
      </Dropdown>
      <Dropdown
        id="year"
        name="year"
        defaultValue="2024"
        onChange={handleOnYear}
        value={year}
      >
        {' '}
        {years.map(year => (
          <DropdownContent key={years.indexOf(year)} value={year}>
            {year}
          </DropdownContent>
        ))}
      </Dropdown>
    </DropsWrap>
  );
};
export default StatisticsDashboard;
