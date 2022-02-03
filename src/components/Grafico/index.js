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
  const [unidade, setUnidade] = useState([]);

  useEffect(() => {
    async function getGeracao() {
      axios
        .get(`http://localhost:3333/geracao`)
        .then((resp) => setGeracao(resp.data))        
    }
    getGeracao();        
  }, []);  
  
  useEffect(() => {
    async function getUnidade() {
      axios
        .get(`http://localhost:3333/unidades`)
        .then((resp) => setUnidade(resp.data))        
    }
    getUnidade();        
  }, []); 
  
  const options = {
    responsive: true,
    parsing: {
      xAxisKey: 'data',
      yAxisKey: 'gerado'
    },
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

const obj = unidade.map((unidade) =>{   
    const leiturasDaUnidade = geracao.filter((gerado)=> gerado.idUnidade == unidade.id)
    console.log("unidade", unidade.id, leiturasDaUnidade)
    // for(const leitura of leiturasDaUnidade) {
    //   numeros.push(leitura.gerado)
    // }
    // numeros = [10, 50, 20]
    // const testeOrdenado = teste.sort(item => item.data)
    // const testeMapeado = teste.map(item => item.gerado)
    // numeros = testeMapeado
    // console.log(testeOrdenado)
    // numeros.push(teste[0].gerado);
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const color = `rgb(${r}, ${g}, ${b})`
      return(      
      {         
        label: unidade.apelido,
        //data: numeros, //tratar o dado
        //data: [{data:'2016-12-25', lido:20}, {data:'2016-12-26', lido:10}],
        data: leiturasDaUnidade,
        borderColor: color,
        backgroundColor: color,
      }
    )
})
  
const obj2 = JSON.parse(JSON.stringify(obj)); 

const data = {
  labels:['2022-01', '2022-02','2022-03', '2022-04', '2022-05', '2022-06'],
  datasets: obj2,   
}

  return <Line options={options} data={data} />;
}