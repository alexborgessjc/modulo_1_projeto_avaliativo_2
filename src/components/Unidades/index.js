import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";

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
    axios.delete(`http://localhost:3333/unidades/${idUnidade}`)    
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
    <div className="item-unidade">  
      {
        unidade.map((unidade) =>{
          return(
            <div key={unidade.id}>
              <div className="id">{unidade.id}</div>      
              <div className="btn">        
                <button onClick={() => removeUnidade(unidade.id)}>Remover</button>
                <Link to="/editar">
                <button>
                  Editar
                </button>
                </Link>
              </div>
            </div>
          )
        }
        
        

        )
        
      }            
      
    </div>
  );
}

export default Unidades;