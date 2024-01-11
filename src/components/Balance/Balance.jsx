import React from 'react';
import {
  BalanceCurrent,
  BalanceTitle,
  BalanceWrapper,
  MoneySymbol,
} from './BalanceStyled';

const Balance = () => {
  return (
    <>
      <BalanceWrapper>
        <BalanceTitle>Your balance</BalanceTitle>
        <BalanceCurrent>
          <MoneySymbol>&#8372;</MoneySymbol> 24 000.00
        </BalanceCurrent>
      </BalanceWrapper>
    </>
  );
};

export default Balance;
