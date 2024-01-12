import { StyledDeleteButton } from '../TransactionsItem/TransactionItemStyled';
import { deleteTransactionThunk } from '../../../../src/redux/transactions/operations';
import React from 'react';
import { LuPencil } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { changeModalEditForm } from '../../../redux/transactions/transactionsSlice';

const TransactionItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTransactionThunk(transaction.id));
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.type}</td>
      <td>{transaction.category}</td>
      <td>{transaction.comment}</td>
      <td>{transaction.amount}</td>
      <td>
        <LuPencil
          onClick={() => {
            dispatch(changeModalEditForm(true));
          }}
        />
        <StyledDeleteButton onClick={handleDelete}>Delete</StyledDeleteButton>
      </td>
    </tr>
  );
};

export default TransactionItem;
