import { ConfigProvider, DatePicker, Space } from 'antd';
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
import { StyledDatePicker } from 'components/ModalAdd/ModalAdd.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { categories, transactionForEdit } from '../../redux/selectors.js';
import { editTransactionThunk } from '../../redux/transactions/operations.js';
import { changeModalClose } from '../../redux/transactions/transactionsSlice.js';

const ModalEdit = () => {
  const [date, setDate] = useState('');

  const onChange = (date, dateString) => {
    setDate(dateString);
  };

  const dispatch = useDispatch();

  const transactionEdit = useSelector(transactionForEdit);
  const categoriesTransaction = useSelector(categories);

  const categoryName = categoriesTransaction?.find(
    category => category.id === transactionEdit?.categoryId
  );

  const editTransaction = event => {
    event.preventDefault();
    const id = transactionEdit.id;
    const formData = new FormData(event.target);
    const amountValue = formData.get('amount');
    const comment = formData.get('comment');
    const transaction = {
      transactionDate: `${date}`,
      type: `${transactionEdit?.type}`,
      categoryId: `${transactionEdit?.categoryId}`,
      comment: `${comment}`,
      amount: `${
        transactionEdit?.type === 'INCOME' ? amountValue : -amountValue
      }`,
    };
    dispatch(editTransactionThunk(id, transaction));
    dispatch(changeModalClose(false));
    console.log(transactionEdit);
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

      {transactionEdit?.type === 'EXPENSE' && <span>{categoryName?.name}</span>}

      <StyledTransactionModalSelect>
        <StyledTransactionAmount
          name="amount"
          type="number"
          placeholder={amountPlaceholder}
          required
        />

        <ConfigProvider
          theme={{
            components: {
              DatePicker: {
                activeBg: 'transparent',
                activeBorderColor: 'var(--modal-input-underline)',
                hoverBg: 'transparent',
                cellHoverBg: 'var(--balance-bg)',
              },
            },
          }}
        >
          <Space
            direction="vertical"
            placeholder={transactionEdit?.transactionDate}
          >
            <StyledDatePicker>
              <DatePicker onChange={onChange} />
            </StyledDatePicker>
          </Space>
        </ConfigProvider>
      </StyledTransactionModalSelect>

      <StyledTransactionComment
        name="comment"
        placeholder={transactionEdit?.comment}
      ></StyledTransactionComment>

      <StyledTransactionButtonsWrapper>
        <Button title="Save" />
        <AccentButton title="Cancel" />
      </StyledTransactionButtonsWrapper>
    </StyledModalBody>
  );
};

export default ModalEdit;
