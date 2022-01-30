import styled from 'styled-components';

export const Quadrado = styled.div`
    background-color: white;
    border: 1px solid grey;
    width: 20%;    
    margin-left: 50px;
    border-radius: 5px;
    padding-top: 15px;
    padding-bottom: 10px;
    cursor: pointer;
    &:hover{
        border: 1px solid blue;
        color: blue;
        div{        
        color: blue;
        } 
    }        
`;

export const Title = styled.div`
       color:grey;
`;