import React from 'react';
import { LuPencil } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from '../../redux/transactions/operations';
import { changeModalEditForm } from '../../redux/transactions/transactionsSlice';
import { categories } from '../../redux/selectors';
import { TransactionCardContainer, TransactionContent, EditButton, StyledDeleteButt  } from './TransactionCardStyled';

const TransactionCard = ({ transaction }) => {
  const dispatch = useDispatch();
  const deleteTransaction = () => dispatch(deleteTransactionThunk(transaction.id));
  const categoriesTransaction = useSelector(categories);
  const categoryName = categoriesTransaction?.find(
    (category) => category.id === transaction.categoryId
  );

  return (
    <TransactionCardContainer>
      <TransactionContent>
        <p>
          <span>Date</span>
          <span>{transaction.transactionDate}</span>
        </p>
        <p>
          <span>Type</span>
          <span>{transaction.type}</span>
        </p>
        <p>
          <span>Category</span>
          <span>{categoryName?.name}</span>
        </p>
        <p>
          <span>Comment</span>
          <span>{transaction.comment}</span>
        </p>
        <p>
          <span>Sum</span>
          <span>{transaction.amount}</span>
        </p>
        <p>
          <StyledDeleteButt onClick={deleteTransaction}>Delete</StyledDeleteButt>
          <EditButton onClick={() => dispatch(changeModalEditForm(true))}>
  <LuPencil /> Edit
</EditButton>
        </p>
      </TransactionContent>
    </TransactionCardContainer>
  );
};

export default TransactionCard;