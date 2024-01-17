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
  MobileImage,
  MobileText,
} from '../TransactionMobile/TransactionMobileStyled';
import MobileImg from '../../img/Mobile/notransaction-mobile.webp';

const TransactionMobile = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      dispatch(fetchTransactionsCategoriesThunk());
      dispatch(fetchAllTransactionsThunk());
    }
  }, [dispatch, isLogged]);

  const transactions = useSelector(selectTransactionsList);

  return (
    <SquareContainer>
      <TransactionList>
        {transactions?.length > 0 ? (
          transactions.map(transaction => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <>
            <MobileImage src={MobileImg} alt="Image Description" />
            <MobileText>Add your first transaction</MobileText>
          </>
        )}
      </TransactionList>
    </SquareContainer>
  );
};

export default TransactionMobile;
