import Menu from '../../components/Menu';

import React from 'react';
import { EditarDiv,TelaDiv,MenuDiv} from './styles';

function EditarUnidades() {    
          
    return (        
        <TelaDiv>
            <MenuDiv>
                <Menu></Menu>
            </MenuDiv>            
            <EditarDiv>                
                Editar Unidade
            </EditarDiv>              
        </TelaDiv>        
    );    
}
export default EditarUnidades;