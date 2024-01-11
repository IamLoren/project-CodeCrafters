import TransactionsList from 'components/TransactionTable/TransactionsList/TransactionsList';
import TransactionsModal from 'components/TransactionsModal/TransactionsModal';
import React from 'react';

const Home = () => {
  return (
    <>
      <TransactionsList />
       <TransactionsModal/>
    </>
  );
};

export default Home;
