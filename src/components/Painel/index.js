import React from 'react';
import { Quadrado, Title } from './styles';

function Painel() {
  
    return (  
        <>
            <Quadrado>
                <Title>Total Unidades</Title>
                10
            </Quadrado>  
            <Quadrado>
                <Title>Unidades Ativas</Title>
                20
            </Quadrado> 
            <Quadrado>
                <Title>Unidades inativas</Title>
                30
            </Quadrado> 
            <Quadrado>
                <Title>Média de energia</Title>
                40
            </Quadrado> 
        </>      
    ); 
  
}

export default  React.memo(Painel);