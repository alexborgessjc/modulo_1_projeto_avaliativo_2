import styled from 'styled-components';

export const ButtonNovaUnidade = styled.button`
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
    margin-left: 70%;     
    width: 15%;
    height: 55px; 
    padding-left: 4%;   
    &:hover{
      background: #4C5DF1; 
        a{
            color:white;   
                 
        }        
    }
    a{
        color:grey;
        text-decoration: none
    } 
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
export const DashboardDiv = styled.div`
    width: 85%;  
    background-color: white;               
    font-size: 30px;          
    vertical-align: middle; 
    height:100%;
`;

export const Title = styled.div`
    background-color: white;
    color: black;
    height: 8%;  
    padding-left: 2%; 
    font-weight: bold;  
    padding-top: 20px;  
`;

export const PainelFundo = styled.div`    
    text-align: center;
    color: black;
    background-color: #FFFAFA;
    width: 80%;
    margin-left: 5%;   
    padding-top: 20px;   
    display: flex;     
`;

export const Tablelist = styled.div`
    /* background-color: white;  */
    text-align: center;   
    height: 60%;
    width: 80%;
    margin-left: 5%;
    color: black;    
    margin-top: 30px;
    padding-top: 30px;
    canvas{
        background-Color:white;
    }
`;

export const ButtonNew = styled.div`
    background-color: white; 
    text-align: right;
`;

export const Background = styled.div`
    background-color: #FFFAFA;
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

export const Button = styled.button`
  border: 0;
  background: #EC6D08;
  width: 150px;
  color: #FFF;
  font-weight: bold;
  float: right;
  margin: 10px 0;
`;



