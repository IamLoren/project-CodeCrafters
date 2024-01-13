import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  StyledTransactionsModalBackdrop,
  StyledModalTransaction,
  StyledModalCloseBtn,
} from './TransactionsModal.styled.js';
import { AiOutlineClose } from 'react-icons/ai';
import { modalIsAdd, modalIsEdit, modalIsOpen } from '../../redux/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalClose } from '../../redux/transactions/transactionsSlice.js';
import ModalEdit from 'components/ModalEdit/ModalEdit.jsx';
import ModalAdd from 'components/ModalAdd/ModalAdd.jsx';

const TransactionsModal = () => {
  const isModalOpen = useSelector(modalIsOpen);
  const isModalEdit = useSelector(modalIsEdit);
  const isModalAdd = useSelector(modalIsAdd);

  const dispatch = useDispatch();

  const clickBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch(changeModalClose(false));
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        dispatch(changeModalClose(false));
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return (
    isModalOpen && (
      <StyledTransactionsModalBackdrop
        open={isModalOpen}
        onClick={clickBackdrop}
      >
        {/* header */}
        <StyledModalTransaction>
          <h2>Add transaction</h2>

          {/* button close */}
          <StyledModalCloseBtn
            onClick={() => {
              dispatch(changeModalClose(false));
            }}
          >
            <AiOutlineClose size="24" />
          </StyledModalCloseBtn>
          {/* render form */}
          {isModalEdit && <ModalEdit />}
          {isModalAdd && <ModalAdd />}
        </StyledModalTransaction>
      </StyledTransactionsModalBackdrop>
    )
  );
};

export default TransactionsModal;
