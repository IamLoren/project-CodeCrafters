import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../../redux/selectors.js';
import { changeSelectOption } from '../../redux/transactions/transactionsSlice.js';

const CustomSelect = () => {
  const categoriesTransaction = useSelector(categories);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="select">A to Z</div>
      <ul className="filters-allTypes-list">
        {categoriesTransaction.map(category => {
          return (
            <li
              key={category.id}
              data-id={category.id}
              onClick={() => {
                dispatch(changeSelectOption(category.id));
              }}
            >
              {category.name}
            </li>
          );
        })}
      </ul>

      {/* to add icon open drpdown + make it as absolute by the first div */}
      <svg className="filters-down-svg" width="20" height="20">
        <use href="./images/icons.svg#icon-chevron-down"></use>
      </svg>
    </div>
  );
};

export default CustomSelect;
