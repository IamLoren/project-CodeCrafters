import React, { useState } from "react";
import {
    TransactionTable,
    TransactionTbody,
    TransactionThead,
  } from './TransactionsListStyled';
  
import TransactionItem from '../TransactionsItem/TransactionItem'


const TransactionsList = () => {
  const [transactions /*, setTransactions*/] = useState([
    {
      date: "04.01.24",
      type: "-",
      category: "Other",
      comment: "Gift for your wife",
      amount: 300.00,
    },
    {
      date: "05.01.23",
      type: "+",
      category: "Income",
      comment: "January bonus",
      amount: 8000.00,
    },
    {
      date: "07.01.23",
      type: "-",
      category: "Car",
      comment: "Oil",
      amount: 1000.00,
    },
    {
      date: "07.01.23",
      type: "-",
      category: "Products",
      comment: "Vegetables for the week",
      amount: 280.00,
    },
    {
      date: "07.01.23",
      type: "+",
      category: "Income",
      comment: "Gift",
      amount: 1000.00,
    },
  ]);

  return (
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
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} />
        ))}
      </TransactionTbody>
    </TransactionTable>
  );
};
  
    
  export default TransactionsList;
