
import Menu from '../../components/Menu';
import Unidades from '../../components/Unidades';
import { Link } from "react-router-dom";

import React from 'react';
import { Tabela, ButtonNovaUnidade, UnidadeDiv,TelaDiv,MenuDiv,Title,SubTitle,Tablelist,ButtonNew,Background} from './styles';

function ListaUnidades() {         
    return (        
        <TelaDiv>
            <MenuDiv>
                <Menu></Menu>
            </MenuDiv>            
            <UnidadeDiv>                
                <Title>Unidades</Title>
                <Background>
                    <SubTitle>Lista de unidades</SubTitle>
                    <Tablelist>
                        <Tabela>                                                 
                            <Unidades/>  
                        </Tabela>                                                                                                                                                                   
                    </Tablelist>  
                    <ButtonNew>                         
                            <ButtonNovaUnidade><Link to="/novaunidade">Nova unidade</Link></ButtonNovaUnidade>                                                                     
                    </ButtonNew>
                </Background>                
            </UnidadeDiv>              
        </TelaDiv>        
    );    
}
export default ListaUnidades;