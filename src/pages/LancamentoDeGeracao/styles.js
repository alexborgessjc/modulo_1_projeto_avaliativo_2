import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 20px;
  width: 20%;
`;

export const InputDiv = styled.div`
  margin: 40px;  
`;

export const InputCheck = styled.input`    
  margin:20px;
  
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
`;

export const Form = styled.form`
  display: flex; 
  justify-content: center;
  flex-direction: column;
`;

export const TelaDiv = styled.div`
    display: flex;       
    background-color: lightblue;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: blue;
`;

export const MenuDiv = styled.div`
    width: 15%;
    background-color: white;
    padding: 0px;        
    font-size: 30px;     
    text-align: center; 
    height: 100%;    
`;
export const ListaUnidadeDiv = styled.div`
    width: 85%;  
    background-color: white;               
    font-size: 30px;    
    color: green;     
    vertical-align: middle; 
    height:100%;
`;

export const Title = styled.div`
    background-color: white;
    font-weight: bold;
    color: black;
    height: 8%; 
    padding-left: 25px;   
    font-family: Sans-serif;   
    margin-top: 40px;
`;

export const Tablelist = styled.div`
    background-color: #FFFAFA; 
    text-align: left;
    padding-left: 40px;   
    height: 60%;
    width: 80%;
    margin-left: 0%;
    color: black;
    font-family: Sans-serif; 
    font-size: 25px;   
`;

export const DivButtonNew = styled.div`
    background-color: white; 
    text-align: left;
    padding-left: 5%;
    margin-top: 15px;
`;

export const ButtonNew = styled.button`
    color:white; 
    background: #4C5DF1; 
    display: flex;
    align-items: center;
    flex-direction: row;    
    text-decoration: none;
    border: none;
    border-radius: 15px;    
    text-shadow:none;
    font-weight: bold;
    font-size: 16px;        
    width: 160px;
    height: 55px; 
    padding-left: 40px;   
    cursor: pointer;
        
`;

export const Background = styled.div`
    background-color: white;
    width: 100%;
    height:90%;    
`;
//Teste

export const Table = styled.table`
  width: 100%;
  background: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const THeader = styled.thead`
  background: #EC6D08;
  th {
  color: #FFF;
  text-align: left;
  padding: 12px;
  }
`;




