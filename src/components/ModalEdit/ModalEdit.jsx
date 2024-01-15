import {
  StyledDisabled,
  StyledExpenseActive,
  StyledIncomeActive,
  StyledModalBody,
  StyledModalToggle,
  StyledTransactionButtonsWrapper,
  StyledTransactionModalSelect,
} from 'components/TransactionsModal/TransactionsModal.styled';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button.jsx';
import AccentButton from '../../components/AccentButton/AccentButton.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { categories, transactionForEdit } from '../../redux/selectors.js';
import { editTransactionThunk } from '../../redux/transactions/operations.js';
import { changeModalClose } from '../../redux/transactions/transactionsSlice.js';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import ReactDatePicker from 'react-datepicker';
import {
  StyledAmount,
  StyledComment,
  StyledDisabledSelect,
  StyledEditDatePickerWrapper,
} from './ModalEdit.styled.js';

const ModalEdit = () => {
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();

  const onChange = date => setStartDate(date);

  const dispatch = useDispatch();

  const transactionEdit = useSelector(transactionForEdit);
  const categoriesTransaction = useSelector(categories);

  useEffect(() => {
    if (transactionEdit) {
      setStartDate(new Date(transactionEdit.transactionDate));
    }
  }, [transactionEdit]);

  const categoryName = categoriesTransaction?.find(
    category => category.id === transactionEdit?.categoryId
  );

  const editTransaction = event => {
    event.preventDefault();
    const id = transactionEdit.id;
    const formData = new FormData(event.target);
    const amountValue = formData.get('amount');
    const comment = formData.get('comment');
    const formattedDate = startDate.toISOString().slice(0, 10);
    setStartDate(formattedDate);
    const transaction = {
      transactionDate: `${formattedDate}`,
      type: `${transactionEdit?.type}`,
      categoryId: `${transactionEdit?.categoryId}`,
      comment: `${comment}`,
      amount:
        transactionEdit?.type === 'INCOME'
          ? Number(amountValue)
          : Number(-amountValue),
    };
    dispatch(editTransactionThunk({ id, transaction }));
    dispatch(changeModalClose(false));
  };

  const amountPlaceholder = Math.abs(transactionEdit?.amount);

  return (
    <StyledModalBody onSubmit={editTransaction}>
      <StyledModalToggle>
        {transactionEdit?.type === 'INCOME' ? (
          <StyledIncomeActive>{transactionEdit.type}</StyledIncomeActive>
        ) : (
          <StyledDisabled>Income</StyledDisabled>
        )}
        /
        {transactionEdit?.type === 'EXPENSE' ? (
          <StyledExpenseActive>{transactionEdit?.type}</StyledExpenseActive>
        ) : (
          <StyledDisabled>Expense</StyledDisabled>
        )}
      </StyledModalToggle>

      {transactionEdit?.type === 'EXPENSE' && (
        <StyledDisabledSelect>{categoryName?.name}</StyledDisabledSelect>
      )}

      <StyledTransactionModalSelect>
        <StyledAmount
          name="amount"
          type="number"
          placeholder={amountPlaceholder}
          required
        />

        <StyledEditDatePickerWrapper>
          <FaRegCalendarAlt />
          <ReactDatePicker
            required
            name="date"
            selected={startDate}
            onChange={onChange}
            dateFormat="dd.MM.yyyy"
            maxDate={today}
          />
        </StyledEditDatePickerWrapper>
      </StyledTransactionModalSelect>

      <StyledComment
        required
        name="comment"
        placeholder={transactionEdit?.comment}
        maxLength={12}
      ></StyledComment>

      <StyledTransactionButtonsWrapper>
        <Button title="Save" />
        <AccentButton title="Cancel" />
      </StyledTransactionButtonsWrapper>
    </StyledModalBody>
  );
};

export default ModalEdit;
