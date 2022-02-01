import React,{useEffect,useState} from 'react'
import axios from 'axios';
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

  const [geracao, setGeracao] = useState([]);

  useEffect(() => {
    async function getGeracao() {
      axios
        .get(`http://localhost:3333/geracao`)
        .then((resp) => setGeracao(resp.data))        
    }
    getGeracao();        
  }, []); 
   
  const obj = 
  geracao.map((geracao) =>{
    return(
      { 
        label: geracao.id,
        data: [geracao.gerado,20,30], //tratar o dado
        borderColor: '#2196f3',
        backgroundColor: '#2196f3',
      }
    )
    
    }
  )
  
  const obj2 = JSON.parse(JSON.stringify(obj));  

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
  datasets:obj2,
};  

  return <Line options={options} data={data}/>;
}