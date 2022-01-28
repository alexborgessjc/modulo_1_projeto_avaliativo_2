import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => props.flexBasis};  
  border: 1px solid black;
  width: 50%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;  
  border-radius: 5px;
  margin-bottom: 15px;
  svg{
    padding-left: 2%;   
    color: grey;    
    position: relative;
    top: 20px; 
    width: 50px;
    height: 50px;

  }   
`;

export const InputText = styled.input`    
  margin-left: auto;
  margin-right: auto;
  width: 47%;
  height: 50px;
  border-radius: 5px;
  outline: none;  
  padding-left: 0px;    
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 11px;
  margin-bottom: 2px;  
`;