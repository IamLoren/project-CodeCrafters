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

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const [chosenMonth, setChosenMonth] = useState(currentMonth);
  const [chosenYear, setChosenYear] = useState(currentYear);

  const handleOnMonth = date => {
    setChosenMonth(date.value);
    dispatch(fetchTransSumThunk({ month: date.value, year: chosenYear }));
  };

  const handleOnYear = date => {
    setChosenYear(date.value);
    dispatch(fetchTransSumThunk({ month: chosenMonth, year: date.value }));
  };

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
        // default={months[chosenMonth - 1]}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
      ></Select>
      <Select
        id="year"
        name="year"
        required
        options={years}
        placeholder="Select a year"
        onChange={handleOnYear}
        styles={libStyles}
        isSearchable={false}
        // default={years.find(year => year.value === chosenYear)}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
      ></Select>
    </DropsWrap>
  );
};
export default StatisticsDashboard;
