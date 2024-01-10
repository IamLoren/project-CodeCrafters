import React from 'react';
import { BalanceCurrent, BalanceTitle, BalanceWrapper } from './BalanceStyled';

const Balance = () => {
  return (
    <>
      <BalanceWrapper>
        <BalanceTitle>Your balance</BalanceTitle>
        <BalanceCurrent> &#8372; 24 000.00</BalanceCurrent>
      </BalanceWrapper>
    </>
  );
};

export default Balance;
