import { ConfigProvider, DatePicker, Space } from 'antd';
import {
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
import Toggle from 'components/Toggle/Toggle.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { IDfromSelect, toggleState } from '../../redux/selectors.js';
import { addTransactionThunk } from '../../redux/transactions/operations.js';

const ModalAdd = () => {
  const [date, setDate] = useState('');
  const onChange = (date, dateString) => {
    setDate(dateString);
    // console.log(date);
  };

  const dispatch = useDispatch();

  const typeToggle = useSelector(toggleState);
  const id = useSelector(IDfromSelect);
  const createTransaction = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const amountValue = formData.get('amount');
    const comment = formData.get('comment');
    console.log(typeToggle)
    const transaction = {
      transactionDate: `${date}`,
      type: `${typeToggle ? 'INCOME' : 'EXPENSE'}`,
      categoryId: `${typeToggle ? "063f1132-ba5d-42b4-951d-44011ca46262" : id}`,
      comment: `${comment}`,
      amount: `${typeToggle ? amountValue : -amountValue}`
    };
    dispatch(addTransactionThunk(transaction));
  };

  return (
    <StyledModalBody onSubmit={createTransaction}>
      <StyledModalToggle>
        <p>Expense</p>
        <Toggle />
        <p>Income</p>
      </StyledModalToggle>
      <CustomSelect />

      <StyledTransactionModalSelect>
        <StyledTransactionAmount
          type="number"
          placeholder="0.00"
          name="amount"
          required
        />

        {/* <TransactionDate type="date" required /> */}
        <ConfigProvider
          theme={{
            components: {
              DatePicker: {
                activeBg: 'transparent',
                activeBorderColor: '#906090',
                hoverBorderColor: '#906090',
                hoverBg: 'transparent',
                cellHoverBg: '#906090',
                // tests
                // cellHoverWithRangeBg: 'orange',
                // cellBgDisabled: 'red',
                // addonBg: 'green',
                // cellActiveWithRangeBg: 'yellow',
              },
            },
          }}
        >
          <Space direction="vertical" placeholder="Select date">
            <DatePicker onChange={onChange} />
          </Space>
        </ConfigProvider>
      </StyledTransactionModalSelect>

      <br />
      <StyledTransactionComment
        name="comment"
        placeholder="Comment"
      ></StyledTransactionComment>
      <br />
      <StyledTransactionButtonsWrapper>
        <Button title="Add" />
        <AccentButton title="Cancel" />
      </StyledTransactionButtonsWrapper>
    </StyledModalBody>
  );
};

export default ModalAdd;
