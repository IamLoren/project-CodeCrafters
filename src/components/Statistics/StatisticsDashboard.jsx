import React, { useEffect, useState } from 'react';
import { DropsWrap } from './StatisticsStyled';
import { useDispatch, useSelector } from 'react-redux';
import Select, { components } from 'react-select';
import { fetchTransSumThunk } from '../../redux/transactions/operations';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { libStyles } from './SelectedLibStyle';
import { selectIsLogged } from '../../redux/selectors';

const StatisticsDashboard = () => {
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];
  const years = [
    { label: '2024', value: 2024 },
    { label: '2023', value: 2023 },
    { label: '2022', value: 2022 },
    { label: '2021', value: 2021 },
    { label: '2020', value: 2020 },
  ];

  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  const [chosenMonth, setChosenMonth] = useState(1);
  const [chosenYear, setChosenYear] = useState(2024);

  const handleOnMonth = date => {
    setChosenMonth(date.value);
    dispatch(fetchTransSumThunk({ month: date.value, year: chosenYear }));
  };

  const handleOnYear = date => {
    setChosenYear(date.value);
    dispatch(fetchTransSumThunk({ month: chosenMonth, year: date.value }));
  };
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  console.log(currentMonth, currentYear);

  //   const currentDate = new Date();
  //   const currentYear = currentDate.getFullYear();
  //   const currentDate = new Date();
  // const currentMonth = currentDate.getMonth() + 1;

  console.log('!!!', chosenMonth, chosenYear);
  useEffect(() => {
    // if (isLogged) {
    dispatch(fetchTransSumThunk({ month: chosenMonth, year: chosenYear }));
    // }
  }, [dispatch, chosenMonth, chosenYear, isLogged]);

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <IoIosArrowUp size={18} label="Arrow up" color={'var(--white)'} />
        ) : (
          <IoIosArrowDown size={18} label="Arrow down" color={'var(--white)'} />
        )}
      </components.DropdownIndicator>
    );
  };
  return (
    <DropsWrap>
      <Select
        id="month"
        name="month"
        required
        options={months}
        placeholder="Select a month"
        onChange={handleOnMonth}
        styles={libStyles}
        isSearchable={false}
        default={'1'}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
      >
        {/* {' '}
          {months.map(month => (
            <DropdownContent key={month.indexOf(month)} value={month}>
              {month}
            </DropdownContent>
          ))} */}
      </Select>
      <Select
        id="year"
        name="year"
        required
        options={years}
        placeholder="Select a year"
        onChange={handleOnYear}
        styles={libStyles}
        isSearchable={false}
        default={'2024'}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
      >
        {/* {' '}
          {years.map(year => (
            <DropdownContent key={years.indexOf(year)} value={year}>
              {year}
            </DropdownContent>
          ))} */}
      </Select>
    </DropsWrap>
  );
};
export default StatisticsDashboard;
