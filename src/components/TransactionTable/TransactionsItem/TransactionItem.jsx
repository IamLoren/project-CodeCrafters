import React from 'react';
import { LuPencil } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { changeModalIsOpen } from '../../../redux/transactions/transactionsSlice';

const TransactionItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {};

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
            dispatch(changeModalIsOpen(true));
          }}
        />

        <button type="button" class="btn btn-danger" onClick={handleDelete}>
          Видалити
        </button>
      </td>
    </tr>
  );
};

export default TransactionItem;
