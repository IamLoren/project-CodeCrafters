import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  TransactionTable,
  TransactionTbody,
  TransactionThead,
  WrapperList,
  StyledImage,
  StyledText,
} from './TransactionsListStyled';

import TransactionItem from '../TransactionsItem/TransactionItem';
import {
  fetchAllTransactionsThunk,
  fetchTransactionsCategoriesThunk,
} from '../../../redux/transactions/operations';
import {
  selectIsLogged,
  selectTransactionsList,
} from '../../../redux/selectors';
import TransacImg from '../../../img/nottransaction.webp';

const TransactionsList = () => {
  const [overflowY, setOverflowY] = useState('hidden');
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      dispatch(fetchTransactionsCategoriesThunk());
      dispatch(fetchAllTransactionsThunk());
    }
  }, [dispatch, isLogged]);

  const transactions = useSelector(selectTransactionsList);

  useEffect(() => {
    if (transactions?.length > 5) {
      setOverflowY('scroll');
    } else {
      setOverflowY('hidden');
    }
  }, [transactions]);

  return (
    <Container>
      <WrapperList className="wrapperList" style={{ overflowY }}>
        <TransactionTable className={`table table-bordered table-striped`}>
          <TransactionThead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Sum</th>
              <th></th>
              <th></th>
            </tr>
          </TransactionThead>
          <TransactionTbody>
            {transactions?.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ position: 'relative' }}>
                  <StyledImage src={TransacImg} alt="Image Description" />
                  <StyledText>Add your first transaction</StyledText>
                </td>
              </tr>
            ) : (
              transactions?.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))
            )}
          </TransactionTbody>
        </TransactionTable>
      </WrapperList>
    </Container>
  );
};

export default TransactionsList;
