import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllTransactionsThunk,
  fetchTransactionsCategoriesThunk,
} from '../../redux/transactions/operations';
import { selectIsLogged, selectTransactionsList } from '../../redux/selectors';
import TransactionCard from '../TransactionCard/TransactionCard';
import {
  SquareContainer,
  TransactionList,
} from '../TransactionMobile/TransactionMobileStyled';

const TransactionMobile = () => {
  const isLogged = useSelector(selectIsLogged)
  const dispatch = useDispatch();

  useEffect(() => {
    if(isLogged){
      dispatch(fetchTransactionsCategoriesThunk());
      dispatch(fetchAllTransactionsThunk());
    }
  }, [dispatch, isLogged]);

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
