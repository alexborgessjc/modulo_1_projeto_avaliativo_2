import styled from 'styled-components';

export const Thead = styled.thead`
    font-weight: bold;     
`;

export const TR = styled.tr`
    
`;

export const ButtonRemover = styled.button`
    display: flex;
    align-items: center;
    flex-direction: row;    
    text-decoration: none;
    border: none;
    border-radius: 5px;    
    text-shadow:none;
    font-weight: bold;
    font-size: 16px;  
    margin: 5px;          
    width: 100px;
    height: 28px;        
    background: #d62d56; 
    color: white;
    cursor: pointer;
    padding-left: 15px;         
`;
export const ButtonEditar = styled.button`
    display: flex;
    align-items: center;
    flex-direction: row;    
    text-decoration: none;
    border: none;
    border-radius: 5px;    
    text-shadow:none;
    font-weight: bold;
    font-size: 16px;  
    margin: 5px;          
    width: 100px;
    height: 25px;        
    background: #8db51b; 
    color: white;
    cursor: pointer;
    padding-left: 15px;        
    a{
        color: white;
        text-decoration: none
    }     
`;