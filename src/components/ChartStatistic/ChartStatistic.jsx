import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutContainerStyled } from './ChartStatistic.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [30, 22, 7, 3, 12, 3, 13, 6, 4],
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
  return (
    <DoughnutContainerStyled>
      <Doughnut data={data} />
      <p>₴ 24 000.00</p>
    </DoughnutContainerStyled>

  )
}

export default ChartStatistic