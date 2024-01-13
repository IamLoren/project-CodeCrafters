import { StyledDeleteButton } from '../TransactionsItem/TransactionItemStyled';
import { deleteTransactionThunk } from '../../../../src/redux/transactions/operations';
import React from 'react';
import { LuPencil } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalEditForm } from '../../../redux/transactions/transactionsSlice';
import { categories } from '../../../redux/selectors';

const TransactionItem = ({ transaction }) => {
  const dispatch = useDispatch();
  // console.log(transaction);
  const delateTransaction = id => dispatch(deleteTransactionThunk(id));
  const categoriesTransaction = useSelector(categories);
  // console.log(categoriesTransaction);
  const categoryName = categoriesTransaction?.find(category => category.id === transaction.categoryId);
  return (
    <tr>
      <td>{transaction.transactionDate}</td>
      <td>{transaction.type}</td>
      <td>{categoryName.name}</td>
      <td>{transaction.comment}</td>
      <td>{transaction.amount}</td>
      <td>
        <LuPencil
          onClick={() => {
            dispatch(changeModalEditForm(true));
          }}
        />
          <StyledDeleteButton onClick={() => delateTransaction(transaction.id)}>Delete</StyledDeleteButton>
      </td>
    </tr>
  );
};

export default TransactionItem;
