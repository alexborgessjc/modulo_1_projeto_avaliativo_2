import Menu from '../../components/Menu';

import React  from 'react';
import { CadastroDiv,TelaDiv,MenuDiv,Title,Background} from './styles';

function CadastroDeUnidade() {
    return (
        <TelaDiv>
            <MenuDiv>
                <Menu></Menu>
            </MenuDiv>            
            <CadastroDiv>                
                <Title>Unidades</Title>
                <Background>
                    Teste
                </Background>                
            </CadastroDiv>              
         </TelaDiv>
    );
}
    
export default CadastroDeUnidade;