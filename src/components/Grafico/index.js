import React from 'react'

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

export default function Chart({ labels, dataPlot}){

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      x:{
        grid:{
          display: false
        }
      },
      y:{
        position:'left'
      }
    },
    plugins:{
      legend:{
        display: true,
      },
      title:{
        display: false,
      },
    },
};

const data = {
  labels:['Janeiro', 'Fevereiro','Março', 'Abril', 'Maio', 'Junho'],
  datasets:[
    {
      label: 'Geração',
      data: [10,20,30], //tratar o dado
      borderColor: '#2196f3',
      backgroundColor: '#2196f3',
    },
  ],
};
  return <Line options={options} data={data}/>;
}