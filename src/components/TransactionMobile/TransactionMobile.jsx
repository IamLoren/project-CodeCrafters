import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllTransactionsThunk,
  fetchTransactionsCategoriesThunk,
} from '../../redux/transactions/operations';
import { selectTransactionsList } from '../../redux/selectors';
import TransactionCard from '../TransactionCard/TransactionCard';
import {
  SquareContainer,
  TransactionList,
} from '../TransactionMobile/TransactionMobileStyled';

const TransactionMobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTransactionsThunk());
    dispatch(fetchTransactionsCategoriesThunk());
  }, [dispatch]);

  const transactions = useSelector(selectTransactionsList);

  return (
    <SquareContainer>
      <TransactionList>
        {transactions?.map(transaction => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </TransactionList>
    </SquareContainer>
  );
};

export default TransactionMobile;
