import React, {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    TransactionTable,
    TransactionTbody,
    TransactionThead,
  } from './TransactionsListStyled';
  
import TransactionItem from '../TransactionsItem/TransactionItem'
import { fetchAllTransactionsThunk, fetchTransactionsCategoriesThunk } from '../../../redux/transactions/operations'; 
import {selectTransactionsList} from '../../../redux/selectors'



const TransactionsList = () => {
  // const [transactions /*, setTransactions*/] = useState/[
  //   {
  //     date: "04.01.24",
  //     type: "-",
  //     category: "Other",
  //     comment: "Gift for your wife",
  //     amount: 300.00,
  //   },
  //   {
  //     date: "05.01.23",
  //     type: "+",
  //     category: "Income",
  //     comment: "January bonus",
  //     amount: 8000.00,
  //   },
  //   {
  //     date: "07.01.23",
  //     type: "-",
  //     category: "Car",
  //     comment: "Oil",
  //     amount: 1000.00,
  //   },
  //   {
  //     date: "07.01.23",
  //     type: "-",
  //     category: "Products",
  //     comment: "Vegetables for the week",
  //     amount: 280.00,
  //   },
  //   {
  //     date: "07.01.23",
  //     type: "+",
  //     category: "Income",
  //     comment: "Gift",
  //     amount: 1000.00,
  //   },
  // ]);

  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactionsList); 

  useEffect(() => {
    dispatch(fetchAllTransactionsThunk());
    dispatch(fetchTransactionsCategoriesThunk());
  }, [dispatch]);
  
  return (
    <Container>
    <TransactionTable class="table table-bordered table-striped">
      <TransactionThead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
          <th></th>
        </tr>
      </TransactionThead>
      <TransactionTbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="6">Ви ще не маєте власних транзакцій</td>
            </tr>
          ) : (
            transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))
          )}
        </TransactionTbody>
    </TransactionTable>
    </Container>
  );
};
  
    
  export default TransactionsList;
