import React, {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import TransactionItem from '../TransactionsItem/TransactionItem';
import { fetchAllTransactionsThunk, fetchTransactionsCategoriesThunk } from '../../../redux/transactions/operations';
import { selectTransactionsList } from '../../../redux/selectors';

const TransactionMobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTransactionsThunk());
    dispatch(fetchTransactionsCategoriesThunk());
  }, [dispatch]);

  const transactions = useSelector(selectTransactionsList);


  return (
   <>
          {transactions.length === 0 ? (
            <p>You don't have any transactions of your own yet</p>
          ) : (
            transactions?.map((transaction) => (
              <TransactionItem key={transaction.id}>
                <div>{transaction.date}</div>
                <div>{transaction.type}</div>
                <div>{transaction.category}</div>
                <div>{transaction.comment}</div>
                <div>{transaction.sum}</div>
              </TransactionItem>
            ))
          )}
       </> 
  );
};

export default TransactionMobile;