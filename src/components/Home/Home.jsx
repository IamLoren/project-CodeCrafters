import TransactionsList from 'components/TransactionTable/TransactionsList/TransactionsList';
import TransactionsModal from 'components/TransactionsModal/TransactionsModal';
import React from 'react';
import { changeModalAddForm } from '../../redux/transactions/transactionsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { modalIsOpen } from '../../redux/selectors.js';
import { AiOutlinePlus } from 'react-icons/ai';
import { StyledHomeModalOpenBtn } from './Home.styled.js';
import  TransactionMobile  from 'components/TransactionMobile/TransactionMobile.jsx';
import { useMediaQuery } from 'react-responsive';

const Home = () => {

  const isModalOpen = useSelector(modalIsOpen);
  const dispatch = useDispatch();
  const isTransactionMobile = useMediaQuery({ maxWidth: 767 });
  const isTransactionDesktop = useMediaQuery({ minWidth: 768 });


  return (
    <>
      {isTransactionDesktop && <TransactionsList />}
      {isTransactionMobile && <TransactionMobile />}
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
