import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BalanceStyled, DoughnutContainerStyled, NotifStyled } from './ChartStatistic.styled';
import { useSelector } from 'react-redux';
import { selectBalance, selectTransactionsList, transactionStatistic } from '../../redux/selectors';
import { TransactionList } from 'components/TransactionMobile/TransactionMobileStyled';

ChartJS.register(ArcElement, Tooltip, Legend);

const coloredCategoriesMap = new Map([
  ['Main expenses', 'rgba(0, 173, 132, 1)'],
  ['Products', 'rgba(255, 216, 208, 1)'],
  ['Car', 'rgba(253, 148, 152, 1)'],
  ['Self care', 'rgba(197, 186, 255, 1)'],
  ['Child care', 'rgba(74, 86, 226, 1)'],
  ['Household products', 'rgba(74, 86, 226, 1)'],
  ['Education', 'rgba(129, 225, 255, 1)'],
  ['Leisure', 'rgba(36, 204, 167, 1)'],
  ['Other expenses', 'rgba(0, 173, 132, 1)'],
]);

export const dataTr = {
  datasets: [
    {
      // label: '',
      data: [],
      backgroundColor: [
        // 'rgba(254, 208, 87, 1)',//yellow  
        // 'rgba(255, 216, 208, 1)',//pouder
        // 'rgba(253, 148, 152, 1)',//coral
        // 'rgba(197, 186, 255, 1)',//rose
        // 'rgba(110, 120, 232, 1)',//blue
        // 'rgba(74, 86, 226, 1)',//blue dark
        // 'rgba(129, 225, 255, 1)',//blue light
        // 'rgba(36, 204, 167, 1)',//green
        // 'rgba(0, 173, 132, 1)',//green dark
      ],
      borderColor: [
        'rgba(36, 204, 167, 1)',//green
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

const ChartStatistic = () => {
  const balance = useSelector(selectBalance)
  const transactionsList = useSelector(selectTransactionsList)
  console.log(TransactionList)
  let income = 0;
  let expence = 0;
  const bgcl = dataTr.datasets[0].backgroundColor

  const data = dataTr.datasets[0].data
  transactionsList?.forEach(transaction => {
    if (transaction.type === "INCOME") income += transaction.amount;
    if (transaction.type === "EXPENSE") {
      data.push(transaction.amount);
      expence += transaction.amount;
      bgcl.push(coloredCategoriesMap.get('Main expenses'))
      console.log(bgcl)
    };

  })
  const difference = (income + expence)
  return (
    <DoughnutContainerStyled>
      {
        ((!expence && !income) && <NotifStyled>You don't have any expences and incomes. <br />Now your balance is ₴ {balance}</NotifStyled>) ||
        ((!expence && income) && <NotifStyled>You don't have any expences. <br />Your income is ₴ {income}</NotifStyled>) ||
        <BalanceStyled><span>₴ {difference}</span></BalanceStyled>
      }
      <Doughnut data={dataTr} />
    </DoughnutContainerStyled>
  )
}

export default ChartStatistic
