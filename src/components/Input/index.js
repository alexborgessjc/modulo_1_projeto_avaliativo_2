import React from 'react';
import { AiFillMail } from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";

import { 
   ContainerInput,     
   InputText,
   ErrorMessage
   } from './styles';

function Input({label, errorMessage, flexBasis, ...otherProps }) {
  const icone = label;

  if(icone ==="E-mail"){
    return (  
      <>
        <ContainerInput flexBasis={flexBasis}>              
          <AiFillMail size="20px" />     
          <InputText 
            {...otherProps}        
          />         
        </ContainerInput>
        <ErrorMessage>{errorMessage}</ErrorMessage> 
      </>        
    );
  }
  else{
    return (    
      <>
      <ContainerInput flexBasis={flexBasis}>              
        <RiLockPasswordLine size="20px" />     
        <InputText 
          {...otherProps}        
        />       
      </ContainerInput>
      <ErrorMessage>{errorMessage}</ErrorMessage> 
      </>
      
    );
  }
  
}

export default  React.memo(Input);