import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  StyledTransactionsModalBackdrop,
  StyledModalTransaction,
  StyledModalBody,
  StyledTransactionAmount,
  StyledTransactionComment,
  StyledTransactionModalSelect,
  StyledTransactionButtonsWrapper,
  StyledModalCloseBtn,
  StyledModalToggle,
  StyledSelect,
} from './TransactionsModal.styled.js';
import Toggle from 'components/Toggle/Toggle';
// import { Select } from 'antd';
import Button from '../Button/Button.jsx';
import AccentButton from 'components/AccentButton/AccentButton.jsx';
import { DatePicker, Space } from 'antd';
import { AiOutlineClose } from 'react-icons/ai';
import { modalIsOpen } from '../../redux/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalIsOpen } from '../../redux/transactions/transactionsSlice.js';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const modalRootElement = document.getElementById('modal'); //portal modal
// console.log(modalRootElement);
const TransactionsModal = () => {
  const element = useMemo(() => document.createElement('div'), []); //portal modal
  useEffect(() => {
    modalRootElement.appendChild(element);

    return () => {
      modalRootElement.removeChild(element);
    };
  }); //portal modal

  const isModalOpen = useSelector(modalIsOpen);

  const dispatch = useDispatch();

  // close backdrop & esc

  const clickBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch(changeModalIsOpen(false));
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        dispatch(changeModalIsOpen(false));
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);
  //

  return createPortal(
    isModalOpen && (
      <StyledTransactionsModalBackdrop
        open={isModalOpen}
        onClick={clickBackdrop}
      >
        <StyledModalTransaction>
          <h2>Add transaction</h2>
          <StyledModalToggle>
            <p>Income</p>
            <Toggle />
            <p>Expense</p>
          </StyledModalToggle>

          <StyledModalCloseBtn
            onClick={() => {
              dispatch(changeModalIsOpen(false));
            }}
          >
            <AiOutlineClose size="24" />
          </StyledModalCloseBtn>

          <StyledModalBody>
            <StyledSelect
              showSearch
              style={{ width: 394 }}
              placeholder="Select a category"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? '').includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Main expenses',
                },
                {
                  value: '2',
                  label: 'Products',
                },
                {
                  value: '3',
                  label: 'Car',
                },
                {
                  value: '4',
                  label: 'Self care',
                },
                {
                  value: '5',
                  label: 'Child care',
                },
                {
                  value: '6',
                  label: 'Household products',
                },
              ]}
            />
            <StyledTransactionModalSelect>
              <StyledTransactionAmount
                type="number"
                placeholder="0.00"
                required
              />

              {/* <TransactionDate type="date" required /> */}
              <Space direction="vertical" placeholder="Select date">
                <DatePicker onChange={onChange} />
              </Space>
            </StyledTransactionModalSelect>

            <br />
            <StyledTransactionComment placeholder="Comment"></StyledTransactionComment>
            <br />
            <StyledTransactionButtonsWrapper>
              <Button title="Add" />
              <AccentButton title="Cancel" />
            </StyledTransactionButtonsWrapper>
          </StyledModalBody>
        </StyledModalTransaction>
      </StyledTransactionsModalBackdrop>
    ),
    element
  );
};

export default TransactionsModal;
