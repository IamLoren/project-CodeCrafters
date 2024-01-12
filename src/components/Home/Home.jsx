import TransactionsList from 'components/TransactionTable/TransactionsList/TransactionsList';
import TransactionsModal from 'components/TransactionsModal/TransactionsModal';
import React from 'react';
import { changeModalAddForm } from '../../redux/transactions/transactionsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { modalIsOpen } from '../../redux/selectors.js';
import { AiOutlinePlus } from 'react-icons/ai';
import { StyledHomeModalOpenBtn } from './Home.styled.js';

const Home = () => {
  const isModalOpen = useSelector(modalIsOpen);
  const dispatch = useDispatch();

  return (
    <>
      <TransactionsList />
      {isModalOpen && <TransactionsModal />}
      <StyledHomeModalOpenBtn
        onClick={() => {
          dispatch(changeModalAddForm(true));
        }}
      >
        <AiOutlinePlus size="24" />
      </StyledHomeModalOpenBtn>
    </>
  );
};

export default Home;
