import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  TransactionsModalWindow,
  ModalWrapper,
  ModalBody,
  TransactionAmount,
  TransactionComment,
  TransactionModalSelect,
  TransactionButtonsWrapper,
  ModalCloseBtn,
  ModalToggleOptions,
  StyledSelect,
} from './TransactionsModalStyled.jsx';
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

  return createPortal(
    isModalOpen && (
      <TransactionsModalWindow open={isModalOpen}>
        <ModalWrapper>
          <h2>Add transaction</h2>
          <ModalToggleOptions>
            <p>Income</p>
            <Toggle />
            <p>Expense</p>
          </ModalToggleOptions>

          <ModalCloseBtn
            onClick={() => {
              dispatch(changeModalIsOpen(false));
            }}
          >
            <AiOutlineClose size="24" />
          </ModalCloseBtn>

          <ModalBody>
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
            <TransactionModalSelect>
              <TransactionAmount type="number" placeholder="0.00" required />

              {/* <TransactionDate type="date" required /> */}
              <Space direction="vertical" placeholder="Select date">
                <DatePicker onChange={onChange} />
              </Space>
            </TransactionModalSelect>

            <br />
            <TransactionComment placeholder="Comment"></TransactionComment>
            <br />
            <TransactionButtonsWrapper>
              <Button title="Add" />
              <AccentButton title="Cancel" />
            </TransactionButtonsWrapper>
          </ModalBody>
        </ModalWrapper>
      </TransactionsModalWindow>
    ),
    element
  );
};

export default TransactionsModal;
