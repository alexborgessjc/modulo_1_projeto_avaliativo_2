import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Quadrado, Title } from './styles';

function Painel() {
    const [geracao, setGeracao] = useState([]);
    const [unidade, setUnidade] = useState([]);
    const [unidadeAtiva, setUnidadeAtiva] = useState([]);
    const [unidadeInativa, setUnidadeInativa] = useState([]);
        
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
    
    useEffect(() => {
        async function getUnidadeAtiva() {
        axios
            .get(`http://localhost:3333/unidades?ativo=true`)
            .then((resp) => setUnidadeAtiva(resp.data))
        }
        getUnidadeAtiva();        
    }, []);
           
    useEffect(() => {
        async function getUnidadeInativa() {
        axios
            .get(`http://localhost:3333/unidades?ativo=false`)
            .then((resp) => setUnidadeInativa(resp.data))
        }
        getUnidadeInativa();        
    }, []);
      
    //Gerando a média de W
    let soma = 0;
    function mostrar(element, index,array){
        soma +=Number(element.id);        
    }
    geracao.forEach(mostrar); 
        
    return (  
        <>
            <Quadrado>
                <Title>Total Unidades</Title>
                {unidade.length}
            </Quadrado>  
            <Quadrado>
                <Title>Unidades Ativas</Title>
                {unidadeAtiva.length}
            </Quadrado> 
            <Quadrado>
                <Title>Unidades inativas</Title>
                {unidadeInativa.length}
            </Quadrado> 
            <Quadrado>
                <Title>Média de energia</Title> 
                {soma/unidade.length} kw                     
            </Quadrado> 
        </>      
    ); 
  
}

export default  React.memo(Painel);