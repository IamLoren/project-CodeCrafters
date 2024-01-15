import React from 'react';
import { LuPencil } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from '../../redux/transactions/operations';
import { changeModalEditForm } from '../../redux/transactions/transactionsSlice';
import { categories } from '../../redux/selectors';
import {
  TransactionCardContainer,
  TransactionContent,
  EditButton,
  StyledDeleteButt,
} from './TransactionCardStyled';

const TransactionCard = ({ transaction }) => {
  const dispatch = useDispatch();
  const deleteTransaction = () =>
    dispatch(deleteTransactionThunk(transaction.id));
  const categoriesTransaction = useSelector(categories);
  const categoryName = categoriesTransaction?.find(
    category => category.id === transaction.categoryId
  );

  const typeDisplay = transaction?.type.replace('INCOME', '+').replace('EXPENSE', '-');

  if (!transaction) {
    // If there are no transactions, display a message
    return <p>Add your first transaction</p>;
  }


  return (
    <TransactionCardContainer type={transaction.type} >
      <TransactionContent>
        <p>
          <span>Date</span>
          <span className="transaction-value">
            {transaction.transactionDate}
          </span>
        </p>
        <p>
          <span>Type</span>
          <span className="transaction-value">
            {typeDisplay}
          </span>
        </p>
        <p>
          <span>Category</span>
          <span className="transaction-value">{categoryName?.name}</span>
        </p>
        <p>
          <span>Comment</span>
          <span className="transaction-value">{transaction.comment}</span>
        </p>
        <p>
          <span>Sum</span>
          <span
            className="transaction-sum"
            style={{
              color: transaction.type === 'INCOME' ? '#FFB627' : '#FF868D',
              fontWeight: 600,
            }}
          >
            {Math.abs(transaction?.amount)}
          </span>
        </p>
        <p>
          <StyledDeleteButt onClick={deleteTransaction}>
            Delete
          </StyledDeleteButt>
          <EditButton onClick={() => dispatch(changeModalEditForm(true))}>
            <LuPencil /> Edit
          </EditButton>
        </p>
      </TransactionContent>
    </TransactionCardContainer>
  );
};

export default TransactionCard;
