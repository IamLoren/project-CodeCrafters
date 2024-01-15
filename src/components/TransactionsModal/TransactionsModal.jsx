import React, { useEffect } from 'react';
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
import { useMediaQuery } from 'react-responsive';
import Header from 'components/Header/Header.jsx';

const TransactionsModal = () => {
  const isModalOpen = useSelector(modalIsOpen);
  const isModalEdit = useSelector(modalIsEdit);
  const isModalAdd = useSelector(modalIsAdd);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const isDesktop = useMediaQuery({ minWidth: 768 });

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
        {isMobile && <Header />}
        <StyledModalTransaction>
          {isModalAdd && <h2>Add transaction</h2>}
          {isModalEdit && <h2>Edit transaction</h2>}

          {isDesktop && (
            <StyledModalCloseBtn
              onClick={() => {
                dispatch(changeModalClose(false));
              }}
            >
              <AiOutlineClose size="24" />
            </StyledModalCloseBtn>
          )}

          {isModalEdit && <ModalEdit />}
          {isModalAdd && <ModalAdd />}
        </StyledModalTransaction>
      </StyledTransactionsModalBackdrop>
    )
  );
};

export default TransactionsModal;
