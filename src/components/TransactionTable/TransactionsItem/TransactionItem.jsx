import React, { useState } from "react";
import { EditOutlined } from '@ant-design/icons';

const TransactionItem = ({ transaction }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleDelete = () => {
  };

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.type}</td>
      <td>{transaction.category}</td>
      <td>{transaction.comment}</td>
      <td>{transaction.amount}</td>
      <td>
      {isEdit ? (
          <EditOutlined
            className="edit-icon"
          />
        ) : (
          <EditOutlined
            onClick={handleEdit}
            className="edit-icon"
          />
        )}
        <button type="button" class="btn btn-danger" onClick={handleDelete}>
          Видалити
        </button>
      </td>
    </tr>
  );
};

export default TransactionItem;