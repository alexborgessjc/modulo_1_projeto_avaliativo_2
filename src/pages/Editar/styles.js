import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 20px;
  width: 20%;
`;

export const InputDiv = styled.div`
  margin: 25px;
`;

export const InputCheck = styled.input`    
  margin:20px;
  margin-left: 35px;
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2); 
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

export const EditarUnidadeDiv = styled.div`
    width: 85%;  
    background-color: white;               
    font-size: 30px;     
    height:100%;
`;

export const Title = styled.div`
    background-color: white;
    font-weight: bold;
    color: black;
    height: 8%; 
    padding-left: 25px;   
    font-family: Sans-serif;   
`;

export const SubTitle = styled.div`    
    text-align: center;
    color: black;
    background-color: white;
    width: 30%;
    margin-left: 0px;
    margin-bottom: 25px;
    margin-top: 50px;
    font-weight: bold;  
    font-family: Sans-serif; 
    font-size: 25px;  
`;

export const Tablelist = styled.div`
    background-color: #FFFAFA; 
    text-align: left;
    padding-left: 40px;   
    height: 60%;
    width: 80%;
    margin-left: 5%;
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
    width: 10%;
    height: 55px; 
    padding-left: 3%;   
    cursor: pointer;
        
`;

export const Background = styled.div`
    background-color: white;
    width: 100%;
    height:90%;    
`;