import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransactionItem from '../TransactionsItem/TransactionItem';
import { fetchAllTransactionsThunk, fetchTransactionsCategoriesThunk } from '../../../redux/transactions/operations';
import { selectTransactionsList } from '../../../redux/selectors';
import { changeModalEditForm } from '../../../redux/transactions/transactionsSlice';
import {
  TransactionContainer,
  SquareContainer,
  TransactionDetails,
  StyledDeleteButt,
} from './TransactionMobileStyled';
import { LuPencil } from 'react-icons/lu';
import { deleteTransactionThunk } from '../../../../src/redux/transactions/operations';

const TransactionMobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTransactionsThunk());
    dispatch(fetchTransactionsCategoriesThunk());
  }, [dispatch]);

  
  const transactions = useSelector(selectTransactionsList);

  const deleteTransaction = (id) => dispatch(deleteTransactionThunk(id));



  return (
    <TransactionContainer>
      {transactions.length === 0 ? (
        <p>You don't have any transactions yet</p>
      ) : (
        transactions?.map((transaction) => (
          <SquareContainer key={transaction.id}>
            <TransactionDetails>
              <p>Date: {transaction.transactionDate}</p>
              <p>Type: {transaction.type}</p>
              <p>Category: {transaction.categoryName}</p>
              <p>Comment: {transaction.comment}</p>
              <p>Sum: {transaction.amount}</p>
              <TransactionItem key={transaction.id} transaction={transaction} />
              <StyledDeleteButt onClick={() => deleteTransaction(transaction.id)}>
                Delete
              </StyledDeleteButt>
              <LuPencil
                onClick={() => {
                  dispatch(changeModalEditForm(true));
                }}
              />
            </TransactionDetails>
          </SquareContainer>
        ))
      )}
    </TransactionContainer>
  );
};


export default TransactionMobile;