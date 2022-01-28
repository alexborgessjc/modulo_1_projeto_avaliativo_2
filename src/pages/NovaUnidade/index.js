
import Menu from '../../components/Menu';
import {toast} from 'react-toastify';

import React,{ useState } from 'react';
import {Form, ListaUnidadeDiv, TelaDiv, MenuDiv, Title, SubTitle, Tablelist, ButtonNew, Background} from './styles';

function ListaUnidades() { 
    const [apelido, setApelido] = useState('')
    const [local, setLocal] = useState('')
    
    async function handleSubmit(unidade) {        
        unidade.preventDefault();
                         
        try {            
            await fetch('http://localhost:3333/unidades',
                {                    
                    method: 'POST',
                    body: JSON.stringify({
                        apelido: apelido,
                        local: local                      
                    }),
                    headers: { 'Content-Type': 'application/json' },
                    },
                )
                toast.success('Cadastrado com sucesso')
            } catch (error) {
            toast.error('Deu ruim')
        }        
    }
          
    return (        
        <TelaDiv>
            <MenuDiv>
                <Menu></Menu>
            </MenuDiv>            
            <ListaUnidadeDiv>                
                <Title>Unidades</Title>
                <Background>
                    <SubTitle>Cadastro de Unidade Geradora</SubTitle>
                    <Form onSubmit={handleSubmit}>
                        <Tablelist>
                            Apelido
                            <input type="text"                                
                                value={apelido}
                                onChange={(unidade) => setApelido(unidade.target.value)}
                            /><br/> 
                            Local
                            <input type="text"                                
                                value={local}
                                onChange={(unidade) => setLocal(unidade.target.value)}
                            />                                                                                                                                                                         
                        </Tablelist>  
                        <ButtonNew>                              
                                <button type="submit">Salvar</button>                            
                        </ButtonNew>
                    </Form>
                </Background>                
            </ListaUnidadeDiv>              
        </TelaDiv>        
    );    
}
export default ListaUnidades;