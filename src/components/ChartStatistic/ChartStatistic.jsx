import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutContainerStyled } from './ChartStatistic.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactionsThunk } from '../../redux/transactions/operations';
import { selectBalance, selectTransactionsList } from '../../redux/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataTr = {
  datasets: [
    {
      label: '',
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

const ChartStatistic = () => {

  const transactionsList = useSelector(selectTransactionsList)
  const data = dataTr.datasets[0].data
  transactionsList.map(transaction => {
    data.push(transaction.amount)
    dataTr.datasets[0].label = transaction.categoryId
  })
  console.log(data)

  console.log(transactionsList)
  return (
    <DoughnutContainerStyled>
      <Doughnut data={dataTr} />
      <p>₴ difference</p>
    </DoughnutContainerStyled>

  )
}

export default ChartStatistic