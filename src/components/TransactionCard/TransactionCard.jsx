import React from 'react';
import { LuPencil } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from '../../redux/transactions/operations';
import {
  changeEditTransaction,
  changeModalEditForm,
} from '../../redux/transactions/transactionsSlice';
import { categories } from '../../redux/selectors';
import {
  TransactionCardContainer,
  TransactionContent,
  EditButton,
  StyledDeleteButt,
} from './TransactionCardStyled';
import { changeBalanceValue } from '../../redux/auth/authSlice';

const TransactionCard = ({ transaction }) => {
  const dispatch = useDispatch();
  const delateTransaction = (id, amount) => {
    dispatch(deleteTransactionThunk(id))
      .unwrap()
      .then(() => {
        dispatch(changeBalanceValue(amount));
      });
  };
  const categoriesTransaction = useSelector(categories);
  const categoryName = categoriesTransaction?.find(
    category => category.id === transaction.categoryId
  );

  const typeDisplay = transaction?.type
    .replace('INCOME', '+')
    .replace('EXPENSE', '-');

  const handleClick = li => {
    dispatch(changeEditTransaction(li));
    dispatch(changeModalEditForm(true));
  };


  return (
    <TransactionCardContainer type={transaction.type}>
      <TransactionContent>
        <p>
          <span>Date</span>
          <span className="transaction-value">
            {transaction.transactionDate}
          </span>
        </p>
        <p>
          <span>Type</span>
          <span className="transaction-value">{typeDisplay}</span>
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
          <StyledDeleteButt
            onClick={() =>
              delateTransaction(transaction?.id, transaction?.amount)
            }
          >
            Delete
          </StyledDeleteButt>
          <EditButton
            onClick={() => {
              handleClick(transaction);
            }}
          >
            <LuPencil /> Edit
          </EditButton>
        </p>
      </TransactionContent>
    </TransactionCardContainer>
  );
};

export default TransactionCard;
