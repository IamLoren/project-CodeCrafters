import React, { useEffect, useState } from 'react';
import { DropsWrap } from './StatisticsStyled';
import { useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import { fetchTransactionSummaryThunk } from '../../redux/transactions/operations';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const StatisticsDashboard = () => {
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'Auguest' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];
  const years = [
    { label: 2024, value: 1 },
    { label: 2023, value: 2 },
    { label: 2022, value: 3 },
    { label: 2021, value: 4 },
    { label: 2020, value: 5 },
  ];

  const dispatch = useDispatch();

  const [chosenMonth, setChosenMonth] = useState();
  const [chosenYear, setChosenYear] = useState();

  console.log('!!!', chosenMonth, chosenYear);

  const handleOnMonth = date => {
    // setChosenMonth(date.value);
    console.log(date);
    // dispatch(
    //   fetchTransactionSummaryThunk({ month: date.value, year: chosenYear })
    // );
  };

  console.log('!!!', chosenMonth, chosenYear);

  const handleOnYear = date => {
    setChosenYear(date.value);
    // dispatch(
    //   fetchTransactionSummaryThunk({ month: chosenMonth, year: date.value })
    // );
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
