import styled from 'styled-components';
import '../../assets/css/fonts.css'

export const FormDefault = styled.form`
  display: flex;
 
  justify-content: center;
  flex-direction: column;

  button{
    background: #4CBC9A;
    color: #fff;
    border: none;
    border-radius: 10px;    
    text-shadow:none;
    width: 50%;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    margin-top: 20px;    
  }  
`;

export const ScreenLogin = styled.div`
    display: flex;  
    width: 100%;     
    height: 100%;  
    background-color: lightblue;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: blue;
`;

export const ImageDiv = styled.div`
  width: 50%;  
  background-color: grey;
  margin: 0px;           
  font-size: 30px;    
  color: green; 
  text-align: center;
  vertical-align: middle; 
  img{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;    
  }
`;

export const FormDiv = styled.div`  
  width: 50%;
  background-color: white;
  padding: 80px;        
  font-size: 30px;     
  text-align: center; 
  form{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  img{
    margin-left: auto;
    margin-right: auto;
  }
  
`;

export const TitleLogin = styled.div`
  margin-bottom: 40px;
  font-family: 'Roboto Slab', serif;
  color: #696969;
  font-weight: bold;
`;
