import React, { useEffect, useState } from 'react';
import { DropsWrap } from './StatisticsStyled';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { fetchTransactionSummaryThunk } from '../../redux/transactions/operations';

const StatisticsDashboard = () => {
  const months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'Auguest', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];
  const years = [
    { name: 2024, value: 1 },
    { name: 2023, value: 2 },
    { name: 2022, value: 3 },
    { name: 2021, value: 4 },
    { name: 2020, value: 5 },
  ];

  const dispatch = useDispatch();

  const [chosenMonth, setChosenMonth] = useState();
  const [chosenYear, setChosenYear] = useState();

  const handleOnMonth = date => {
    setChosenMonth(date.value);
    dispatch(
      fetchTransactionSummaryThunk({ month: date.value, year: chosenYear })
    );
  };
  const handleOnYear = date => {
    setChosenYear(date.value);
    dispatch(
      fetchTransactionSummaryThunk({ month: chosenMonth, year: date.value })
    );
  };
  useEffect(() => {
    fetchTransactionSummaryThunk({ month: chosenMonth, year: chosenYear });
  }, [dispatch, chosenMonth, chosenYear]);

  const libStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: '16px',
      fontFamily: 'Poppins-Regular',
      borderRadius: '8px',
      border: `1px solid (--white-60, rgba(255, 255, 255, 0.60))`,
      background: 'rgba(74, 86, 226, 0.10)',

      width: '182px',
      height: '50px',
      paddingLeft: '12px',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: 'var(--white)',
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: '8px',
      background:
        'var(--Small-Form-color, linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%))',
      boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(50px)',
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      borderRadius: '8px',
      background: isSelected ? 'var(--modal-background)' : 'transparent',
      color: isSelected ? 'var(--expenses-color)' : provided.color,
      ':hover': {
        background: 'var(--modal-background)',
        color: 'var(--expenses-color)',
      },
    }),
  };
  return (
    <DropsWrap>
      <Select
        id="month"
        name="month"
        required
        options={months}
        placeholder="Month"
        onChange={handleOnMonth}
        styles={libStyles}
        isSearchable={false}
        components={{
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
        placeholder="Year"
        onChange={handleOnYear}
        styles={libStyles}
        isSearchable={false}
        components={{
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
