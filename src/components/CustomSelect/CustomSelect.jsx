import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../../redux/selectors.js';
import { changeSelectOption } from '../../redux/transactions/transactionsSlice.js';
import Select, { components } from 'react-select';
import { selectStyle } from './CustomSelect.styled.js';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const CustomSelect = () => {
  const categoriesTransaction = useSelector(categories);
  const dispatch = useDispatch();
  const getSelectValue = selectedOp => {
    dispatch(changeSelectOption(selectedOp?.value));
  };
  const arrOfOptions = categoriesTransaction.map(category => {
    return {
      value: category.id,
      label: category.name,
    };
  });

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
    <div>
      <Select
        required
        options={arrOfOptions}
        placeholder="Select a category"
        styles={selectStyle}
        onChange={getSelectValue}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default CustomSelect;
