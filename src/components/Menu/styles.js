import styled from 'styled-components';

export const NavDiv = styled.div`
    background: white;    
    margin-top: 10%; 
    padding-left: 12%;     
    div:hover{
        background: #4CBC9A;
    }
`;

export const ButtonItem = styled.div`
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
    width: 60%;
    height: 55px; 
    padding-left: 30px;   
    &:hover{
        a{
            color:white;        
        }
        svg{        
            color:white;           
        } 
    }
    a{
        color:grey;
        text-decoration: none
    } 
    svg{
        padding-right: 5px;  
        color:grey;      
    }    
`;

