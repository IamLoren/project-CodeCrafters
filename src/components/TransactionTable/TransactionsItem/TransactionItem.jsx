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

const TransactionItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const delateTransaction = id => dispatch(deleteTransactionThunk(id));
  const categoriesTransaction = useSelector(categories);
  const categoryName = categoriesTransaction?.find(
    category => category.id === transaction?.categoryId
  );

  const handleClick = tr => {
    dispatch(changeEditTransaction(tr));
    dispatch(changeModalEditForm(true));
    // const type = event.target.closest('tr').querySelector('.type').textContent;
  };

  return (
    <tr>
      <td className="date">{transaction?.transactionDate}</td>
      <td className="type">{transaction?.type}</td>
      <td className="name">{categoryName?.name}</td>
      <td className="comment">{transaction?.comment}</td>
      <td className="amount">{transaction?.amount}</td>
      <td>
        <LuPencil onClick={() => handleClick(transaction)} />
        <StyledDeleteButton onClick={() => delateTransaction(transaction?.id)}>
          Delete
        </StyledDeleteButton>
      </td>
    </tr>
  );
};

export default TransactionItem;
