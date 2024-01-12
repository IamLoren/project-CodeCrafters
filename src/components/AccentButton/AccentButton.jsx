import { CancelTransactionButton } from 'components/TransactionsModal/TransactionsModal.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeModalClose } from '../../redux/transactions/transactionsSlice';

const AccentButton = ({ title }) => {
  const dispatch = useDispatch();
  return (
    <CancelTransactionButton
      onClick={() => {
        dispatch(changeModalClose(false));
      }}
    >
      {title}
    </CancelTransactionButton>
  );
};

export default AccentButton;
