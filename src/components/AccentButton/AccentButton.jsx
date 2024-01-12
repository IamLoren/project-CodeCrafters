import { CancelTransactionButton } from 'components/TransactionsModal/TransactionsModal.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeModalIsOpen } from '../../redux/transactions/transactionsSlice';

const AccentButton = ({ title }) => {
  const dispatch = useDispatch();
  return (
    <CancelTransactionButton
      onClick={() => {
        dispatch(changeModalIsOpen(false));
      }}
    >
      {title}
    </CancelTransactionButton>
  );
};

export default AccentButton;
