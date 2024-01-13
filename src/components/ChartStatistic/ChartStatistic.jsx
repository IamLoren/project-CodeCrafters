import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BalanceStyled, DoughnutContainerStyled, NotifStyled } from './ChartStatistic.styled';
import { useSelector } from 'react-redux';
// import { fetchAllTransactionsThunk } from '../../redux/transactions/operations';
import { selectBalance, selectTransactionsList } from '../../redux/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataTr = {
  datasets: [
    {
      // label: '',
      data: [],
      backgroundColor: [
        'rgba(254, 208, 87, 1)',//yellow  
        'rgba(255, 216, 208, 1)',//pouder
        'rgba(253, 148, 152, 1)',//coral
        'rgba(197, 186, 255, 1)',//rose
        'rgba(110, 120, 232, 1)',//blue
        'rgba(74, 86, 226, 1)',//blue dark
        'rgba(129, 225, 255, 1)',//blue light
        'rgba(36, 204, 167, 1)',//green
        'rgba(0, 173, 132, 1)',//green dark
      ],
      borderColor: [
        'rgba(254, 208, 87, 1)',//yellow  
        'rgba(255, 216, 208, 1)',//pouder
        'rgba(253, 148, 152, 1)',//coral
        'rgba(197, 186, 255, 1)',//rose
        'rgba(110, 120, 232, 1)',//blue
        'rgba(74, 86, 226, 1)',//blue dark
        'rgba(129, 225, 255, 1)',//blue light
        'rgba(36, 204, 167, 1)',//green
        'rgba(0, 173, 132, 1)',//green dark
      ],
      borderWidth: 1,
    },
  ],
};

//this const is temp -> delete after real data
// const transactionsList = [
//   {
//     "id": "tempid",
//     "transactionDate": "temp date",
//     "type": "INCOME",
//     "categoryId": "Salary",
//     "userId": "temp user",
//     "comment": "temp comment",
//     "amount": 170000,
//     "balanceAfter": 490900
//   },
//   {
//     "id": "tempid",
//     "transactionDate": "temp date",
//     "type": "EXPENCE",
//     "categoryId": "Car",
//     "userId": "temp user",
//     "comment": "temp comment",
//     "amount": 6000,
//     "balanceAfter": 490900
//   },
//   {
//     "id": "tempid",
//     "transactionDate": "temp date",
//     "type": "EXPENCE",
//     "categoryId": "Household products",
//     "userId": "temp user",
//     "comment": "temp comment",
//     "amount": 2000,
//     "balanceAfter": 490900
//   },
//   {
//     "id": "tempid",
//     "transactionDate": "temp date",
//     "type": "EXPENCE",
//     "categoryId": "Education",
//     "userId": "temp user",
//     "comment": "temp comment",
//     "amount": 18000,
//     "balanceAfter": 490900
//   },
//   {
//     "id": "tempid",
//     "transactionDate": "temp date",
//     "type": "EXPENCE",
//     "categoryId": "Child care",
//     "userId": "temp user",
//     "comment": "temp comment",
//     "amount": 15000,
//     "balanceAfter": 490900
//   },
//   {
//     "id": "tempid",
//     "transactionDate": "temp date",
//     "type": "EXPENCE",
//     "categoryId": "Car",
//     "userId": "temp user",
//     "comment": "temp comment",
//     "amount": 6000,
//     "balanceAfter": 490900
//   },
//   {
//     "id": "tempid",
//     "transactionDate": "temp date",
//     "type": "EXPENCE",
//     "categoryId": "Education",
//     "userId": "temp user",
//     "comment": "temp comment",
//     "amount": 18000,
//     "balanceAfter": 490900
//   },
//   {
//     "id": "tempid",
//     "transactionDate": "temp date",
//     "type": "EXPENCE",
//     "categoryId": "Child care",
//     "userId": "temp user",
//     "comment": "temp comment",
//     "amount": 15000,
//     "balanceAfter": 490900
//   },
//   {
//     "id": "tempid",
//     "transactionDate": "temp date",
//     "type": "EXPENCE",
//     "categoryId": "Car",
//     "userId": "temp user",
//     "comment": "temp comment",
//     "amount": 6000,
//     "balanceAfter": 490900
//   },
// ]

const ChartStatistic = () => {
  const balance = useSelector(selectBalance)
  const transactionsList = useSelector(selectTransactionsList)
  let income = 0;
  let expence = 0;
  const data = dataTr.datasets[0].data
  transactionsList.forEach(transaction => {
    if (transaction.type === "INCOME") income += transaction.amount;
    if (transaction.type === "EXPENCE") {
      data.push(transaction.amount);
      expence += transaction.amount;
    };
  })
  const difference = (income - expence)
  return (
    <DoughnutContainerStyled>
      {
        ((!expence && !income) && <NotifStyled>You don't have any expences and incomes. <br />Now your balance is ₴ {balance}</NotifStyled>) ||
        ((!expence && income) && <NotifStyled>You don't have any expences. <br />Your income is ₴ {income}</NotifStyled>) ||
        ((expence && income) && <BalanceStyled><span>₴ {difference}</span></BalanceStyled>)
      }
      <Doughnut data={dataTr} />
    </DoughnutContainerStyled>
  )
}

export default ChartStatistic
