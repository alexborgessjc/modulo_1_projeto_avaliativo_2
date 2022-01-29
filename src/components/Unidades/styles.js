import styled from 'styled-components';

export const Thead = styled.thead`
    font-weight: bold;
`;

export const ButtonRemover = styled.button`
    display: flex;
    align-items: center;
    flex-direction: row;    
    text-decoration: none;
    border: none;
    border-radius: 15px;    
    text-shadow:none;
    font-weight: bold;
    font-size: 16px;  
    margin: 5px;          
    width: 100%;
    height: 28px;        
    background: #d62d56; 
    color: white;
    cursor: pointer;
    padding-left: 30px;     
`;
export const ButtonEditar = styled.button`
    display: flex;
    align-items: center;
    flex-direction: row;    
    text-decoration: none;
    border: none;
    border-radius: 15px;    
    text-shadow:none;
    font-weight: bold;
    font-size: 16px;  
    margin: 5px;          
    width: 100%;
    height: 25px;        
    background: #8db51b; 
    color: white;
    cursor: pointer;
    padding-left: 25px;     
    a{
        color: white;
        text-decoration: none
    }     
`;