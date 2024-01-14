// import React, { useEffect } from 'react';
import {
  BalanceCurrent,
  BalanceTitle,
  BalanceWrapper,
  MoneySymbol,
} from './BalanceStyled';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/selectors';

const Balance = () => {
  const balance = useSelector(selectBalance);

  return (
    <>
      <BalanceWrapper>
        <BalanceTitle>Your balance</BalanceTitle>
        <BalanceCurrent>
          <MoneySymbol>&#8372;</MoneySymbol> {Number(balance).toFixed(2)}
        </BalanceCurrent>
      </BalanceWrapper>
    </>
  );
};

export default Balance;
