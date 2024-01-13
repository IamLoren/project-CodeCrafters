import { ConfigProvider, DatePicker, Space } from 'antd';
import {
  StyledModalBody,
  StyledModalToggle,
  StyledTransactionAmount,
  StyledTransactionButtonsWrapper,
  StyledTransactionComment,
  StyledTransactionModalSelect,
} from 'components/TransactionsModal/TransactionsModal.styled';
import React from 'react';
import Button from '../Button/Button.jsx';
import AccentButton from '../../components/AccentButton/AccentButton.jsx';
import Toggle from 'components/Toggle/Toggle.jsx';

const onChange = (date, dateString) => {
  // console.log(date, dateString);
};

const ModalEdit = () => {
  return (
    <StyledModalBody>
      <StyledModalToggle>
        <p>Income</p>
        {/* <Toggle /> */}
        <p>Expense</p>
      </StyledModalToggle>
      <StyledTransactionModalSelect>
        <StyledTransactionAmount type="number" placeholder="0.00" required />

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
                cellHoverWithRangeBg: 'orange',
                cellBgDisabled: 'red',
                addonBg: 'green',
                cellActiveWithRangeBg: 'yellow',
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
      <StyledTransactionComment placeholder="Comment"></StyledTransactionComment>
      <br />
      <StyledTransactionButtonsWrapper>
        <Button title="Add" />
        <AccentButton title="Cancel" />
      </StyledTransactionButtonsWrapper>
    </StyledModalBody>
  );
};

export default ModalEdit;
