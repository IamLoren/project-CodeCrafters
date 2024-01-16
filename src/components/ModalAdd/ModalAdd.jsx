import {
  StyledDisabled,
  StyledExpenseActive,
  StyledIncomeActive,
  StyledModalBody,
  StyledModalToggle,
  StyledTransactionAmount,
  StyledTransactionButtonsWrapper,
  StyledTransactionComment,
  StyledTransactionModalSelect,
} from 'components/TransactionsModal/TransactionsModal.styled';
import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
import AccentButton from '../../components/AccentButton/AccentButton.jsx';
import CustomSelect from 'components/CustomSelect/CustomSelect.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { IDfromSelect } from '../../redux/selectors.js';
import { addTransactionThunk } from '../../redux/transactions/operations.js';
import {
  changeModalClose,
  changeToggleState,
} from '../../redux/transactions/transactionsSlice.js';
import {
  LabelToggle,
  SpanToggle,
  ToggleSwitch,
} from 'components/Toggle/Toggle.styled.js';
import { DatePickerWrapper } from './ModalAdd.styled.js';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import ReactDatePicker from 'react-datepicker';

const ModalAdd = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isDisabled, setIsDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const today = new Date();

  const onChangeToggle = () => {
    setIsDisabled(!isDisabled);
    setIsChecked(!isChecked);
    dispatch(changeToggleState(isChecked));
  };

  const onChange = date => setStartDate(date);

  const dispatch = useDispatch();

  const id = useSelector(IDfromSelect);
  const createTransaction = event => {
    event.preventDefault();
    const formattedDate = startDate.toISOString().slice(0, 10);
    setStartDate(formattedDate);

    const formData = new FormData(event.target);
    const amountValue = formData.get('amount');
    const comment = formData.get('comment');
    const transaction = {
      transactionDate: `${formattedDate}`,
      type: `${!isChecked ? 'INCOME' : 'EXPENSE'}`,
      categoryId: `${!isChecked ? '063f1132-ba5d-42b4-951d-44011ca46262' : id}`,
      comment: `${comment}`,
      amount: `${!isChecked ? amountValue : -amountValue}`,
    };
    dispatch(addTransactionThunk(transaction));
    dispatch(changeModalClose(false));
  };

  return (
    <StyledModalBody onSubmit={createTransaction}>
      <StyledModalToggle>
        {isDisabled ? (
          <StyledDisabled>Income</StyledDisabled>
        ) : (
          <StyledIncomeActive>Income</StyledIncomeActive>
        )}

        <LabelToggle>
          <ToggleSwitch
            defaultChecked
            type="checkbox"
            onChange={onChangeToggle}
            name="type"
          />
          <SpanToggle />
        </LabelToggle>

        {isDisabled ? (
          <StyledExpenseActive>Expense</StyledExpenseActive>
        ) : (
          <StyledDisabled>Expense</StyledDisabled>
        )}
      </StyledModalToggle>

      {isChecked && <CustomSelect />}

      <StyledTransactionModalSelect>
        <StyledTransactionAmount
          type="number"
          placeholder="0.00"
          name="amount"
          required
        />

        <DatePickerWrapper>
          <FaRegCalendarAlt />
          <ReactDatePicker
            required
            name="date"
            selected={startDate}
            onChange={onChange}
            dateFormat="yyyy-MM-dd"
            maxDate={today}
            // showDisabledMonthNavigation
          />
        </DatePickerWrapper>
      </StyledTransactionModalSelect>

      <StyledTransactionComment
        required
        name="comment"
        placeholder="Comment"
        maxLength={12}
      ></StyledTransactionComment>

      <StyledTransactionButtonsWrapper>
        <Button title="Add" />
        <AccentButton title="Cancel" />
      </StyledTransactionButtonsWrapper>
    </StyledModalBody>
  );
};

export default ModalAdd;
