import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  BalanceStyled,
  DoughnutContainerStyled,
  NotifStyled,
} from './ChartStatistic.styled';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartStatistic = ({ data, expenseSummary, incomeSummary }) => {
  const balance = useSelector(selectBalance);

  const dataTr = {
    datasets: [
      {
        data: data.map(el => el.total),
        backgroundColor: data.map(el => el.color),
        borderColor: data.map(el => el.color),
        borderWidth: 1,
      },
    ],
  };
  const diff = Math.abs(incomeSummary - Math.abs(expenseSummary));
  return (
    <DoughnutContainerStyled>
      {(!expenseSummary && !incomeSummary && (
        <NotifStyled>
          You don't have any expences and incomes. <br />
          Now your balance is ₴ {balance}
        </NotifStyled>
      )) ||
        (!expenseSummary && incomeSummary && (
          <NotifStyled>
            You don't have any expences. <br />
            Your income is ₴ {incomeSummary}
          </NotifStyled>
        )) || (
          <BalanceStyled>
            <span>₴ {diff}</span>
          </BalanceStyled>
        )}
      <Doughnut data={dataTr} />
    </DoughnutContainerStyled>
  );
};

export default ChartStatistic;
