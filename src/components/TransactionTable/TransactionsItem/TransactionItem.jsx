import React from "react";
import { LuPencil } from 'react-icons/lu';
import {StyledDeleteButton} from '../TransactionsItem/TransactionItemStyled';
import { useDispatch } from 'react-redux'; 
import { deleteTransactionThunk } from '../../../../src/redux/transactions/operations';

const TransactionItem = ({ transaction, onDeleteTransaction }) => {
//   const [isEdit, setIsEdit] = useState(false);

//   const handleEdit = () => {
//     setIsEdit(true);
//   };
  
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
            // onClick={handleEdit}
            className="edit-icon"
          />
       <StyledDeleteButton 
       onClick={handleDelete}
       >
        Delete
        </StyledDeleteButton>
      </td>
    </tr>
  );
};

export default TransactionItem;