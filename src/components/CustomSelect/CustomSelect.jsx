import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../../redux/selectors.js';
import { changeSelectOption } from '../../redux/transactions/transactionsSlice.js';
// import { IoIosArrowDown } from 'react-icons/io';
// import { StyledModalArrowDown } from 'components/TransactionsModal/TransactionsModal.styled.js';
import Select from 'react-select';
import { selectStyle } from './CustomSelect.style.js';

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const categoriesTransaction = useSelector(categories);
  const dispatch = useDispatch();
  // dispatch(changeSelectOption(value))
  const getSelectValue = selectedOption => {
    setSelectedOption(selectedOption);
    dispatch(changeSelectOption(selectedOption.value));
  };
  const arrOfOptions = categoriesTransaction.map(category => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  return (
    <div>
      <Select
        required
        options={arrOfOptions}
        placeholder="Select a category"
        styles={selectStyle}
        // isSearchable={false}
        onChange={getSelectValue}
        // name="category"
        // {...register('value')}
      />
    </div>
  );
};

export default CustomSelect;
