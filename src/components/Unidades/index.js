import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { TR, ButtonRemover, ButtonEditar,Thead } from './styles';

function Unidades() {   
  const [unidade, setUnidade] = useState([]);

  useEffect(() => {
    async function getUnidade() {
      axios
        .get(`http://localhost:3333/unidades`)
        .then((resp) => setUnidade(resp.data))
    }
    getUnidade();        
}, []);  

  function removeUnidade(idUnidade) {              
    axios.delete(`http://localhost:3333/unidades/${idUnidade}`).then(async()=>{
      const resp = await axios.get(
        `http://localhost:3333/geracao?idUnidade=${idUnidade}`
      );
      resp.data.forEach(
        async(receivedData) =>
          await axios.delete(
            `http://localhost:3333/geracao/${receivedData.id}`    
        )
      );
    });   
    removeFromTable(idUnidade);
    alert("Unidade: "+idUnidade+" Removida!")
  }

  function removeFromTable(id){
    const newUnidade = unidade.filter((idUnidade)=>{
      if(idUnidade.id === id){
        return false;
      }else{
        return true;
      }
    });    
    setUnidade(newUnidade);
  }
  
  return (
    <>  
      <Thead>
        <TR>
          <th>ID</th>
          <th>Apelido</th>
          <th>Local</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th></th>
          <th></th>          
        </TR>        
      </Thead>          
      {
        unidade.map((unidade) =>{
          return(   
            <tbody key={unidade.id}>         
              <tr >              
                <td>{unidade.id}</td>    
                <td>{unidade.apelido}</td> 
                <td>{unidade.local}</td>    
                <td>{unidade.marca}</td>  
                <td>{unidade.modelo}</td> 
                <td>
                  <ButtonEditar><Link to={"/editar/"+unidade.id}>Editar</Link></ButtonEditar>
                </td> 
                <td>        
                  <ButtonRemover onClick={() => removeUnidade(unidade.id)}>Remover</ButtonRemover>                 
                </td>                                
              </tr>  
            </tbody>                    
          )
        } 
      )       
      }      
    </>
  );
}

export default Unidades;