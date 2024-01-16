import { StyledDeleteButton } from '../TransactionsItem/TransactionItemStyled';
import { deleteTransactionThunk } from '../../../../src/redux/transactions/operations';
import React from 'react';
import { LuPencil } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeEditTransaction,
  changeModalEditForm,
} from '../../../redux/transactions/transactionsSlice';
import { categories } from '../../../redux/selectors';
import { changeBalanceValue } from '../../../redux/auth/authSlice.js';

const TransactionItem = ({ transaction }) => {
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
    category => category.id === transaction?.categoryId
  );

  const handleClick = tr => {
    dispatch(changeEditTransaction(tr));
    dispatch(changeModalEditForm(true));
  };

  return (
    <tr>
      <td className="date">
        {transaction?.transactionDate.slice(2).split('-').reverse().join('.')}
      </td>
      <td className="type">{transaction?.type === 'INCOME' ? '+' : '-'}</td>
      <td className="name">{categoryName?.name}</td>
      <td className="comment">{transaction?.comment}</td>
      {transaction?.type === 'INCOME' ? (
        <td
          className="amount"
          style={{
            color: '#FFB627',
            fontWeight: 600,
            fontFamily: 'Poppins SemiBold',
          }}
        >
          {transaction?.amount}
        </td>
      ) : (
        <td
          className="amount"
          style={{
            color: '#FF868D',
            fontWeight: 600,
            fontFamily: 'Poppins SemiBold',
          }}
        >
          {Math.abs(transaction?.amount)}
        </td>
      )}
      <td>
        <LuPencil
          style={{ cursor: 'pointer', color: 'var(--text-forms)' }}
          size={14}
          onClick={() => {
            handleClick(transaction);
          }}
        />
      </td>
      <td>
        <StyledDeleteButton
          onClick={() =>
            delateTransaction(transaction?.id, transaction?.amount)
          }
        >
          Delete
        </StyledDeleteButton>
      </td>
    </tr>
  );
};

export default TransactionItem;
