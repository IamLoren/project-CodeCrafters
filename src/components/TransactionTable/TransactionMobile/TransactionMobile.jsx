import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransactionItem from '../TransactionsItem/TransactionItem';
import { fetchAllTransactionsThunk, fetchTransactionsCategoriesThunk } from '../../../redux/transactions/operations';
import { selectTransactionsList } from '../../../redux/selectors';
import {
  TransactionContainer,
  SquareContainer,
  HeaderList,
  HeaderItem,
} from './TransactionMobileStyled';

const TransactionMobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTransactionsThunk());
    dispatch(fetchTransactionsCategoriesThunk());
  }, [dispatch]);

  const transactions = useSelector(selectTransactionsList);

  return (
    <TransactionContainer>
      {transactions.length === 0 ? (
        <p>You don't have any transactions of your own yet</p>
      ) : (
        transactions?.map((transaction) => (
          <SquareContainer key={transaction.id}>
            <HeaderList>
              <HeaderItem>Date:</HeaderItem>
              <HeaderItem>Type:</HeaderItem>
              <HeaderItem>Category:</HeaderItem>
              <HeaderItem>Comment:</HeaderItem>
              <HeaderItem>Sum:</HeaderItem>
            </HeaderList>
            <TransactionItem  transaction={transaction} />
          </SquareContainer>
        ))
      )}
    </TransactionContainer>
  );
};

export default TransactionMobile;
